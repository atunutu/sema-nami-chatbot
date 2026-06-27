import {
  OnQueueActive,
  OnQueueCompleted,
  OnQueueFailed,
  Process,
  Processor,
} from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import type { Job } from 'bull';
import { Language } from '../../../common/enums/language.enum';
import { MessageType } from '../../../common/enums/message-type.enum';
import { ChatOrchestratorService } from '../../chat/services/chat-orchestrator.service';
import { MessagesService } from '../../messages/services/messages.service';
import { ProfileService } from '../../profile/services/profile.service';
import { SessionService } from '../../session/services/session.service';
import { UsersService } from '../../users/services/user.service';
import {
  WHATSAPP_INBOUND_JOB,
  WHATSAPP_INBOUND_QUEUE,
} from '../constants/whatsapp-queue.constants';
import { WhatsAppService } from '../services/whatsapp.service';
import { WhatsAppInboundJob } from '../types/whatsapp-inbound-job.type';

@Injectable()
@Processor(WHATSAPP_INBOUND_QUEUE)
export class WhatsAppInboundProcessor {
  private readonly logger = new Logger(WhatsAppInboundProcessor.name);

  constructor(
    private readonly messagesService: MessagesService,
    private readonly usersService: UsersService,
    private readonly profileService: ProfileService,
    private readonly sessionService: SessionService,
    private readonly chatOrchestratorService: ChatOrchestratorService,
    private readonly whatsAppService: WhatsAppService,
  ) {}

  @Process(WHATSAPP_INBOUND_JOB)
  async handle(job: Job<WhatsAppInboundJob>): Promise<void> {
    this.logger.log(
      `Processor picked up WhatsApp job ${job.id} with providerMessageId ${job.data.providerMessageId}`,
    );
    const alreadyProcessed =
      await this.messagesService.existsInboundByProviderMessageId(
        'whatsapp',
        job.data.providerMessageId,
      );

    if (alreadyProcessed) {
      this.logger.warn(
        `Skipping duplicate inbound WhatsApp message: ${job.data.providerMessageId}`,
      );
      return;
    }

    const user = await this.usersService.findOrCreateByWhatsAppPhoneNumber(
      job.data.whatsappPhoneNumber,
    );

    const profile = await this.profileService.findOrCreateByUserId(user.id);
    const session = await this.sessionService.getOrCreateActiveSession(user.id);

    try {
      await this.messagesService.logInboundMessage({
        sessionId: session.id,
        userId: user.id,
        messageType: job.data.text
          ? MessageType.TEXT
          : MessageType.INTERACTIVE_REPLY,
        messageText: job.data.text,
        interactiveValue: job.data.interactiveValue,
        triggeredSafeguarding: false,
        rawPayload: (job.data.rawPayload as Record<string, any>) ?? null,
        provider: 'whatsapp',
        providerMessageId: job.data.providerMessageId,
      });
    } catch (error) {
      if (this.messagesService.isUniqueConstraintViolation(error)) {
        this.logger.warn(
          `Duplicate inbound message blocked by DB constraint: ${job.data.providerMessageId}`,
        );
        return;
      }

      throw error;
    }

    try {
      await this.whatsAppService.sendTypingIndicator({
        to: job.data.whatsappPhoneNumber,
        messageId: job.data.providerMessageId,
      });
    } catch (error: any) {
      this.logger.warn(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        `Failed to send typing indicator for ${job.data.providerMessageId}: ${error.message}`,
      );
    }

    const response = await this.chatOrchestratorService.processIncomingMessage({
      whatsappPhoneNumber: job.data.whatsappPhoneNumber,
      text: job.data.text,
      interactiveValue: job.data.interactiveValue,
    });

    const sendResult = await this.whatsAppService.sendOrchestratorResponse({
      to: job.data.whatsappPhoneNumber,
      language: profile.preferredLanguage ?? Language.EN,
      response,
    });

    await this.messagesService.logOutboundMessage({
      sessionId: session.id,
      userId: user.id,
      messageType: MessageType.TEXT,
      messageText: response.message,
      interactiveValue: null,
      triggeredSafeguarding: false,
      rawPayload: {
        source: 'whatsapp-processor',
        options: response.options,
        currentState: response.currentState,
        mediaAssetKey: response.mediaAssetKey ?? null,
        sendResult,
      },
    });

    this.logger.log(
      `Processed inbound WhatsApp message: ${job.data.providerMessageId}`,
    );
  }

  @OnQueueActive()
  onActive(job: Job<WhatsAppInboundJob>) {
    this.logger.log(`Bull job active: ${job.id}`);
  }

  @OnQueueCompleted()
  onCompleted(job: Job<WhatsAppInboundJob>) {
    this.logger.log(`Bull job completed: ${job.id}`);
  }

  @OnQueueFailed()
  onFailed(job: Job<WhatsAppInboundJob>, error: Error) {
    this.logger.error(
      `Bull job failed: ${job?.id} - ${error.message}`,
      error.stack,
    );
  }
}
