/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { Language } from 'src/common/enums/language.enum';
import { InjectQueue } from '@nestjs/bull';
import type { Queue } from 'bull';
import {
  WHATSAPP_INBOUND_JOB,
  WHATSAPP_INBOUND_QUEUE,
} from '../constants/whatsapp-queue.constants';
import { MEDIA_ASSET_URLS } from '../constants/media-asset-urls';

type VerifyWebhookInput = {
  mode?: string;
  verifyToken?: string;
  challenge?: string;
};

export type NormalizedWhatsAppMessage = {
  whatsappPhoneNumber: string;
  providerMessageId: string;
  text: string | null;
  interactiveValue: string | null;
  rawMessage?: Record<string, unknown> | null;
};

type WhatsAppWebhookPayload = {
  entry?: Array<{
    changes?: Array<{
      value?: {
        messages?: Array<{
          id?: string;
          from?: string;
          type?: string;
          text?: {
            body?: string;
          };
          interactive?: {
            button_reply?: {
              id?: string;
              title?: string;
            };
            list_reply?: {
              id?: string;
              title?: string;
            };
          };
        }>;
        statuses?: Array<{
          id?: string;
          status?: string;
          timestamp?: string;
          recipient_id?: string;
        }>;
      };
    }>;
  }>;
};

@Injectable()
export class WhatsAppService {
  private readonly logger = new Logger(WhatsAppService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    @InjectQueue(WHATSAPP_INBOUND_QUEUE)
    private readonly whatsAppInboundQueue: Queue,
  ) {}

  private async enqueueInboundMessage(
    message: NormalizedWhatsAppMessage,
  ): Promise<void> {
    this.logger.log(
      `Queueing inbound WhatsApp message ${message.providerMessageId} from ${message.whatsappPhoneNumber}`,
    );

    const job = await this.whatsAppInboundQueue.add(
      WHATSAPP_INBOUND_JOB,
      {
        whatsappPhoneNumber: message.whatsappPhoneNumber,
        providerMessageId: message.providerMessageId,
        text: message.text,
        interactiveValue: message.interactiveValue,
        rawPayload: message.rawMessage ?? null,
      },
      {
        jobId: message.providerMessageId,
        removeOnComplete: 100,
        removeOnFail: 500,
        attempts: 1,
        backoff: {
          type: 'exponential',
          delay: 2000,
        },
      },
    );

    this.logger.log(
      `Queued inbound WhatsApp message ${message.providerMessageId} as Bull job ${job.id}`,
    );
  }

  verifyWebhook(input: VerifyWebhookInput): string {
    const expectedVerifyToken = this.configService.get<string>(
      'WHATSAPP_VERIFY_TOKEN',
    );

    if (
      input.mode === 'subscribe' &&
      input.verifyToken &&
      expectedVerifyToken &&
      input.verifyToken === expectedVerifyToken
    ) {
      return input.challenge ?? '';
    }

    throw new UnauthorizedException('Invalid webhook verification token.');
  }

  async handleWebhook(payload: Record<string, any>) {
    const normalizedMessage = this.extractNormalizedMessage(
      payload as WhatsAppWebhookPayload,
    );

    if (!normalizedMessage) {
      return { received: true };
    }

    await this.enqueueInboundMessage(normalizedMessage);

    return { received: true };
  }

  private isStatusOnlyWebhook(payload: WhatsAppWebhookPayload): boolean {
    const value = payload.entry?.[0]?.changes?.[0]?.value;

    const hasMessages = !!value?.messages?.length;
    const hasStatuses = !!value?.statuses?.length;

    return !hasMessages && hasStatuses;
  }

  private extractNormalizedMessage(
    payload: WhatsAppWebhookPayload,
  ): NormalizedWhatsAppMessage | null {
    const entry = payload.entry?.[0];
    const change = entry?.changes?.[0];
    const value = change?.value;
    const message = value?.messages?.[0];

    if (!message?.from || !message?.id) {
      return null;
    }

    if (message.type === 'text') {
      return {
        whatsappPhoneNumber: message.from,
        providerMessageId: message.id,
        text: message.text?.body ?? null,
        interactiveValue: null,
        rawMessage: message,
      };
    }

    if (message.type === 'interactive') {
      const buttonReplyId = message.interactive?.button_reply?.id;
      const listReplyId = message.interactive?.list_reply?.id;

      return {
        whatsappPhoneNumber: message.from,
        providerMessageId: message.id,
        text: null,
        interactiveValue: buttonReplyId ?? listReplyId ?? null,
        rawMessage: message,
      };
    }

    return {
      whatsappPhoneNumber: message.from,
      providerMessageId: message.id,
      text: null,
      interactiveValue: null,
      rawMessage: message,
    };
  }

  async sendOrchestratorResponse(data: {
    to: string;
    language: Language;
    response: {
      message: string;
      options: Array<{ label: string; value: string }>;
      mediaAssetKey?: string | null;
    };
  }): Promise<void> {
    const sanitizedOptions = this.sanitizeOptions(data.response.options);
    const optionCount = sanitizedOptions.length;
    const body = data.response.message.trim();

    const imageUrl = this.resolveMediaAssetUrl(data.response.mediaAssetKey);

    if (imageUrl) {
      try {
        await this.sendImageMessage({
          to: data.to,
          imageUrl,
        });
      } catch (error: any) {
        this.logger.warn(
          `Failed to send WhatsApp image for mediaAssetKey ${data.response.mediaAssetKey}: ${error.message}`,
        );
      }
    }

    // If there is nothing else to send after the image, stop here.
    if (!body && optionCount === 0) {
      this.logger.warn(
        `Orchestrator response for ${data.to} had no text and no options.`,
      );
      return;
    }

    if (optionCount === 0) {
      await this.sendTextMessage({
        to: data.to,
        body,
      });
      return;
    }

    if (this.shouldSplitInteractiveMessage(body)) {
      if (body) {
        await this.sendTextMessage({ to: data.to, body });
      }

      const choosePrompt = this.getChooseOptionPrompt(data.language);

      if (optionCount <= 3) {
        await this.sendButtonsMessage({
          to: data.to,
          body: choosePrompt,
          options: sanitizedOptions,
        });
        return;
      }

      await this.sendListMessage({
        to: data.to,
        language: data.language,
        body: choosePrompt,
        options: sanitizedOptions,
      });
      return;
    }

    if (optionCount <= 3) {
      await this.sendButtonsMessage({
        to: data.to,
        body: body || this.getChooseOptionPrompt(data.language),
        options: sanitizedOptions,
      });
      return;
    }

    if (optionCount > 10) {
      this.logger.warn(
        `Orchestrator returned ${optionCount} options. WhatsApp list supports a limited number, so only the first 10 will be used.`,
      );
    }

    await this.sendListMessage({
      to: data.to,
      language: data.language,
      body: body || this.getChooseOptionPrompt(data.language),
      options: sanitizedOptions.slice(0, 10),
    });
  }

  private async sendTextMessage(data: {
    to: string;
    body: string;
  }): Promise<void> {
    try {
      const accessToken = this.configService.get<string>(
        'WHATSAPP_ACCESS_TOKEN',
      );
      const phoneNumberId = this.configService.get<string>(
        'WHATSAPP_PHONE_NUMBER_ID',
      );
      const apiVersion =
        this.configService.get<string>('WHATSAPP_API_VERSION') ?? 'v25.0';

      if (!accessToken || !phoneNumberId) {
        this.logger.warn(
          'WhatsApp access token or phone number ID is missing. Skipping outbound send.',
        );
        return;
      }

      const url = `https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`;

      const payload = {
        messaging_product: 'whatsapp',
        to: data.to,
        type: 'text',
        text: {
          body: data.body,
        },
      };

      this.logger.log(`Sending WhatsApp text message to ${data.to}`);

      await firstValueFrom(
        this.httpService.post(url, payload, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          timeout: 15000,
        }),
      );

      this.logger.log(`Sent WhatsApp text message to ${data.to}`);
    } catch (error: any) {
      this.logger.error(
        `Failed to send WhatsApp text message to ${data.to}: ${error.message}`,
        error.stack,
      );
      throw error;
    }
  }

  private async sendButtonsMessage(data: {
    to: string;
    body: string;
    options: Array<{ label: string; value: string }>;
  }): Promise<void> {
    const accessToken = this.configService.get<string>('WHATSAPP_ACCESS_TOKEN');
    const phoneNumberId = this.configService.get<string>(
      'WHATSAPP_PHONE_NUMBER_ID',
    );
    const apiVersion =
      this.configService.get<string>('WHATSAPP_API_VERSION') ?? 'v25.0';

    if (!accessToken || !phoneNumberId) {
      this.logger.warn(
        'WhatsApp access token or phone number ID is missing. Skipping outbound send.',
      );
      return;
    }

    const url = `https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`;

    const payload = {
      messaging_product: 'whatsapp',
      to: data.to,
      type: 'interactive',
      interactive: {
        type: 'button',
        body: {
          text: data.body,
        },
        action: {
          buttons: data.options.slice(0, 3).map((option) => ({
            type: 'reply',
            reply: {
              id: option.value,
              title: this.formatButtonTitle(option.label),
            },
          })),
        },
      },
    };

    this.logger.log(`Sending WhatsApp buttons message to ${data.to}`);

    await firstValueFrom(
      this.httpService.post(url, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        timeout: 15000,
      }),
    );

    this.logger.log(`Sent WhatsApp buttons message to ${data.to}`);
  }

  private async sendListMessage(data: {
    to: string;
    language: Language;
    body: string;
    options: Array<{ label: string; value: string }>;
  }): Promise<void> {
    const accessToken = this.configService.get<string>('WHATSAPP_ACCESS_TOKEN');
    const phoneNumberId = this.configService.get<string>(
      'WHATSAPP_PHONE_NUMBER_ID',
    );
    const apiVersion =
      this.configService.get<string>('WHATSAPP_API_VERSION') ?? 'v25.0';

    if (!accessToken || !phoneNumberId) {
      this.logger.warn(
        'WhatsApp access token or phone number ID is missing. Skipping outbound send.',
      );
      return;
    }

    const url = `https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`;

    const payload = {
      messaging_product: 'whatsapp',
      to: data.to,
      type: 'interactive',
      interactive: {
        type: 'list',
        body: {
          text: data.body,
        },
        action: {
          button: this.formatListButtonLabel(data.language),
          sections: [
            {
              title: this.formatListSectionTitle(data.language),
              rows: data.options.slice(0, 10).map((option) => ({
                id: option.value,
                title: this.formatListRowTitle(option.label),
                description: '',
              })),
            },
          ],
        },
      },
    };

    this.logger.log(`Sending WhatsApp list message to ${data.to}`);

    await firstValueFrom(
      this.httpService.post(url, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        timeout: 15000,
      }),
    );

    this.logger.log(`Sent WhatsApp list message to ${data.to}`);
  }

  private sanitizeOptions(
    options: Array<{ label: string; value: string }>,
  ): Array<{ label: string; value: string }> {
    const seen = new Set<string>();

    return options.filter((option) => {
      const label = option.label?.trim();
      const value = option.value?.trim();

      if (!label || !value) {
        return false;
      }

      if (seen.has(value)) {
        return false;
      }

      seen.add(value);
      return true;
    });
  }

  private resolveMediaAssetUrl(mediaAssetKey?: string | null): string | null {
    if (!mediaAssetKey) {
      return null;
    }

    return MEDIA_ASSET_URLS[mediaAssetKey] ?? null;
  }

  private async sendImageMessage(data: {
    to: string;
    imageUrl: string;
    caption?: string;
  }): Promise<void> {
    const accessToken = this.configService.get<string>('WHATSAPP_ACCESS_TOKEN');
    const phoneNumberId = this.configService.get<string>(
      'WHATSAPP_PHONE_NUMBER_ID',
    );
    const apiVersion =
      this.configService.get<string>('WHATSAPP_API_VERSION') ?? 'v25.0';

    if (!accessToken || !phoneNumberId) {
      this.logger.warn(
        'WhatsApp access token or phone number ID is missing. Skipping outbound image send.',
      );
      return;
    }

    const url = `https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`;

    const payload = {
      messaging_product: 'whatsapp',
      to: data.to,
      type: 'image',
      image: {
        link: data.imageUrl,
        ...(data.caption?.trim() ? { caption: data.caption.trim() } : {}),
      },
    };

    this.logger.log(`Sending WhatsApp image message to ${data.to}`);

    try {
      await firstValueFrom(
        this.httpService.post(url, payload, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          timeout: 30000,
        }),
      );

      this.logger.log(`Sent WhatsApp image message to ${data.to}`);
    } catch (error: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const message = error?.message ?? 'Unknown error';

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      if (message.includes('timeout')) {
        this.logger.warn(
          `WhatsApp image request timed out for ${data.to}. Meta may still have accepted and delivered it.`,
        );
        return;
      }

      this.logger.error(
        `Failed to send WhatsApp image message to ${data.to}: ${message}`,
        error?.stack,
      );

      throw error;
    }
  }

  async sendTypingIndicator(data: {
    to: string;
    messageId: string;
  }): Promise<void> {
    const accessToken = this.configService.get<string>('WHATSAPP_ACCESS_TOKEN');
    const phoneNumberId = this.configService.get<string>(
      'WHATSAPP_PHONE_NUMBER_ID',
    );
    const apiVersion =
      this.configService.get<string>('WHATSAPP_API_VERSION') ?? 'v25.0';

    if (!accessToken || !phoneNumberId) {
      this.logger.warn(
        'WhatsApp access token or phone number ID is missing. Skipping typing indicator.',
      );
      return;
    }

    const url = `https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`;

    const payload = {
      messaging_product: 'whatsapp',
      status: 'read',
      message_id: data.messageId,
      typing_indicator: {
        type: 'text',
      },
    };

    this.logger.log(
      `Sending WhatsApp typing indicator for ${data.to} using inbound message ${data.messageId}`,
    );

    await firstValueFrom(
      this.httpService.post(url, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      }),
    );

    this.logger.log(`Sent WhatsApp typing indicator for ${data.to}`);
  }
  private formatButtonTitle(label: string): string {
    return label.trim().slice(0, 20);
  }

  private formatListRowTitle(label: string): string {
    return label.trim().slice(0, 24);
  }

  private shouldSplitInteractiveMessage(body: string): boolean {
    return body.trim().length > 300;
  }

  private getChooseOptionPrompt(language: Language): string {
    return language === Language.SW
      ? 'Chagua chaguo hapa chini.'
      : 'Choose an option below.';
  }

  private formatListButtonLabel(language: Language): string {
    return language === Language.SW ? 'Chagua' : 'Choose';
  }

  private formatListSectionTitle(language: Language): string {
    return language === Language.SW ? 'Chaguo zilizopo' : 'Available options';
  }
}
