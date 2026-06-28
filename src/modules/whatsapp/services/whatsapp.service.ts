/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
import {
  WhatsAppSendPartResult,
  WhatsAppSendResult,
  WhatsAppSendPartType,
} from '../types/whatsapp-send-result.type';

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
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 5000,
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
  }): Promise<WhatsAppSendResult> {
    const sanitizedOptions = this.sanitizeOptions(data.response.options);
    const optionCount = sanitizedOptions.length;
    const body = data.response.message.trim();
    const imageUrl = this.resolveMediaAssetUrl(data.response.mediaAssetKey);
    const parts: WhatsAppSendPartResult[] = [];

    if (imageUrl) {
      const imageResult = await this.sendImageMessage({
        to: data.to,
        imageUrl,
      });

      parts.push(imageResult);
    }

    if (!body && optionCount === 0) {
      this.logger.warn(
        `Orchestrator response for ${data.to} had no text and no options.`,
      );

      return {
        overallStatus: this.buildOverallSendStatus(parts),
        parts,
      };
    }

    if (optionCount === 0) {
      if (body) {
        parts.push(
          await this.sendTextMessage({
            to: data.to,
            body,
          }),
        );
      }

      return {
        overallStatus: this.buildOverallSendStatus(parts),
        parts,
      };
    }

    if (this.shouldSplitInteractiveMessage(body)) {
      if (body) {
        parts.push(
          await this.sendTextMessage({
            to: data.to,
            body,
          }),
        );
      }

      const choosePrompt = this.getChooseOptionPrompt(data.language);

      if (optionCount <= 3) {
        parts.push(
          await this.sendButtonsMessage({
            to: data.to,
            body: choosePrompt,
            options: sanitizedOptions,
          }),
        );

        return {
          overallStatus: this.buildOverallSendStatus(parts),
          parts,
        };
      }

      parts.push(
        await this.sendListMessage({
          to: data.to,
          language: data.language,
          body: choosePrompt,
          options: sanitizedOptions,
        }),
      );

      return {
        overallStatus: this.buildOverallSendStatus(parts),
        parts,
      };
    }

    if (optionCount <= 3) {
      parts.push(
        await this.sendButtonsMessage({
          to: data.to,
          body: body || this.getChooseOptionPrompt(data.language),
          options: sanitizedOptions,
        }),
      );

      return {
        overallStatus: this.buildOverallSendStatus(parts),
        parts,
      };
    }

    if (optionCount > 10) {
      this.logger.warn(
        `Orchestrator returned ${optionCount} options. WhatsApp list supports a limited number, so only the first 10 will be used.`,
      );
    }

    parts.push(
      await this.sendListMessage({
        to: data.to,
        language: data.language,
        body: body || this.getChooseOptionPrompt(data.language),
        options: sanitizedOptions.slice(0, 10),
      }),
    );

    return {
      overallStatus: this.buildOverallSendStatus(parts),
      parts,
    };
  }

  private async sendTextMessage(data: {
    to: string;
    body: string;
  }): Promise<WhatsAppSendPartResult> {
    const payload = {
      messaging_product: 'whatsapp',
      to: data.to,
      type: 'text',
      text: {
        body: data.body,
      },
    };

    return this.executeWhatsAppSend({
      partType: 'text',
      to: data.to,
      payload,
      timeoutMs: 15000,
    });
  }

  private async sendButtonsMessage(data: {
    to: string;
    body: string;
    options: Array<{ label: string; value: string }>;
  }): Promise<WhatsAppSendPartResult> {
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

    return this.executeWhatsAppSend({
      partType: 'buttons',
      to: data.to,
      payload,
      timeoutMs: 15000,
    });
  }

  private async sendListMessage(data: {
    to: string;
    language: Language;
    body: string;
    options: Array<{ label: string; value: string }>;
  }): Promise<WhatsAppSendPartResult> {
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

    return this.executeWhatsAppSend({
      partType: 'list',
      to: data.to,
      payload,
      timeoutMs: 15000,
    });
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
  }): Promise<WhatsAppSendPartResult> {
    const payload = {
      messaging_product: 'whatsapp',
      to: data.to,
      type: 'image',
      image: {
        link: data.imageUrl,
        ...(data.caption?.trim() ? { caption: data.caption.trim() } : {}),
      },
    };

    return this.executeWhatsAppSend({
      partType: 'image',
      to: data.to,
      payload,
      timeoutMs: 30000,
    });
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
  private extractProviderMessageId(responseData: any): string | null {
    return responseData?.messages?.[0]?.id ?? null;
  }

  private buildOverallSendStatus(
    parts: WhatsAppSendPartResult[],
  ): WhatsAppSendResult['overallStatus'] {
    if (!parts.length) {
      return 'failed';
    }

    const statuses = parts.map((part) => part.status);

    if (statuses.every((status) => status === 'sent' || status === 'skipped')) {
      return 'sent';
    }

    if (
      statuses.some((status) => status === 'failed') &&
      statuses.some(
        (status) => status === 'sent' || status === 'timeout_uncertain',
      )
    ) {
      return 'partial_failure';
    }

    if (
      statuses.every(
        (status) => status === 'timeout_uncertain' || status === 'skipped',
      )
    ) {
      return 'timeout_uncertain';
    }

    if (statuses.some((status) => status === 'failed')) {
      return 'failed';
    }

    return 'partial_failure';
  }

  private async executeWhatsAppSend(data: {
    partType: WhatsAppSendPartType;
    to: string;
    payload: Record<string, any>;
    timeoutMs?: number;
  }): Promise<WhatsAppSendPartResult> {
    const accessToken = this.configService.get<string>('WHATSAPP_ACCESS_TOKEN');
    const phoneNumberId = this.configService.get<string>(
      'WHATSAPP_PHONE_NUMBER_ID',
    );
    const apiVersion =
      this.configService.get<string>('WHATSAPP_API_VERSION') ?? 'v25.0';

    if (!accessToken || !phoneNumberId) {
      this.logger.warn(
        `WhatsApp access token or phone number ID is missing. Skipping ${data.partType} send.`,
      );

      return {
        partType: data.partType,
        status: 'failed',
        providerMessageId: null,
        errorMessage: 'Missing WhatsApp access token or phone number ID',
      };
    }

    const url = `https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`;

    try {
      const response = await firstValueFrom(
        this.httpService.post(url, data.payload, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          timeout: data.timeoutMs ?? 15000,
        }),
      );

      const providerMessageId = this.extractProviderMessageId(response.data);

      this.logger.log(
        `Sent WhatsApp ${data.partType} message to ${data.to}${
          providerMessageId
            ? ` with provider message ID ${providerMessageId}`
            : ''
        }`,
      );

      return {
        partType: data.partType,
        status: 'sent',
        providerMessageId,
        errorMessage: null,
      };
    } catch (error: any) {
      const errorMessage = error?.message ?? 'Unknown error';

      if (errorMessage.includes('timeout')) {
        this.logger.warn(
          `WhatsApp ${data.partType} request timed out for ${data.to}. Meta may still have accepted and delivered it.`,
        );

        return {
          partType: data.partType,
          status: 'timeout_uncertain',
          providerMessageId: null,
          errorMessage,
        };
      }

      this.logger.error(
        `Failed to send WhatsApp ${data.partType} message to ${data.to}: ${errorMessage}`,
        error?.stack,
      );

      return {
        partType: data.partType,
        status: 'failed',
        providerMessageId: null,
        errorMessage,
      };
    }
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
