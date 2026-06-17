/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { ChatOrchestratorService } from '../../chat/services/chat-orchestrator.service';
import { Language } from 'src/common/enums/language.enum';
import { ProfileService } from 'src/modules/profile/services/profile.service';
import { UsersService } from 'src/modules/users/services/user.service';

type VerifyWebhookInput = {
  mode?: string;
  verifyToken?: string;
  challenge?: string;
};

type NormalizedWhatsAppMessage = {
  whatsappPhoneNumber: string;
  text?: string | null;
  interactiveValue?: string | null;
};

type WhatsAppWebhookPayload = {
  entry?: Array<{
    changes?: Array<{
      value?: {
        messages?: Array<{
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
    private readonly chatOrchestratorService: ChatOrchestratorService,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    private readonly usersService: UsersService,
    private readonly profileService: ProfileService,
  ) {}

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

  async handleWebhook(payload: WhatsAppWebhookPayload): Promise<void> {
    if (this.isStatusOnlyWebhook(payload)) {
      this.logger.log(
        'Received WhatsApp status webhook; no inbound message to process.',
      );
      return;
    }

    const normalizedMessage = this.extractNormalizedMessage(payload);

    if (!normalizedMessage) {
      this.logger.log(
        'No supported inbound WhatsApp message found in webhook payload.',
      );
      return;
    }

    const orchestratorResponse =
      await this.chatOrchestratorService.processIncomingMessage(
        normalizedMessage,
      );

    this.logger.log(
      `WhatsApp inbound normalized: ${JSON.stringify(normalizedMessage)}`,
    );
    this.logger.log(
      `Orchestrator response: ${JSON.stringify(orchestratorResponse)}`,
    );

    const user = await this.usersService.findOrCreateByWhatsAppPhoneNumber(
      normalizedMessage.whatsappPhoneNumber,
    );
    const profile = await this.profileService.findOrCreateByUserId(user.id);

    await this.sendOrchestratorResponse({
      to: normalizedMessage.whatsappPhoneNumber,
      language: profile.preferredLanguage ?? Language.EN,
      response: orchestratorResponse,
    });
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

    if (!message?.from) {
      return null;
    }

    if (message.type === 'text') {
      return {
        whatsappPhoneNumber: message.from,
        text: message.text?.body ?? null,
        interactiveValue: null,
      };
    }

    if (message.type === 'interactive') {
      const buttonReplyId = message.interactive?.button_reply?.id;
      const listReplyId = message.interactive?.list_reply?.id;

      return {
        whatsappPhoneNumber: message.from,
        text: null,
        interactiveValue: buttonReplyId ?? listReplyId ?? null,
      };
    }

    return {
      whatsappPhoneNumber: message.from,
      text: null,
      interactiveValue: null,
    };
  }

  private async sendOrchestratorResponse(data: {
    to: string;
    language: Language;
    response: {
      message: string;
      options: Array<{ label: string; value: string }>;
    };
  }): Promise<void> {
    const sanitizedOptions = this.sanitizeOptions(data.response.options);
    const optionCount = sanitizedOptions.length;
    const body = data.response.message.trim();

    if (optionCount === 0) {
      await this.sendTextMessage({
        to: data.to,
        body,
      });
      return;
    }

    if (this.shouldSplitInteractiveMessage(body)) {
      await this.sendTextMessage({
        to: data.to,
        body,
      });

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
        body,
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
      body,
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
      this.logger.log(`Has token: ${!!accessToken}`);
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
      console.log(payload);

      await firstValueFrom(
        this.httpService.post(url, payload, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }),
      );

      this.logger.log(`Sent WhatsApp text message to ${data.to}`);
    } catch (error: any) {
      this.logger.error(
        `Failed to send WhatsApp text message to ${data.to}: ${error.message}`,
      );
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

    await firstValueFrom(
      this.httpService.post(url, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        timeout: 5000,
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

    await firstValueFrom(
      this.httpService.post(url, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        timeout: 5000,
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
