/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
import { WhatsAppFailureLogService } from '../services/whastapp-failure-log.service';
import { WhatsAppFailureStage } from '../enums/whatsapp-failure-stage.enum';

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
    private readonly whatsappFailureLogService: WhatsAppFailureLogService,
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
        `Failed to send typing indicator for ${job.data.providerMessageId}: ${error.message}`,
      );
      await this.whatsappFailureLogService.logFailure({
        sessionId: session.id,
        userId: user.id,
        jobId: String(job.id ?? ''),
        failureStage: WhatsAppFailureStage.TYPING_INDICATOR,
        phoneNumber: job.data.whatsappPhoneNumber,
        providerMessageId: job.data.providerMessageId,
        errorMessage: error.message ?? 'Unknown typing indicator error',
        errorStack: error.stack ?? null,
        payload: {
          jobData: job.data,
        },
      });
    }

    try {
      const response =
        await this.chatOrchestratorService.processIncomingMessage({
          whatsappPhoneNumber: job.data.whatsappPhoneNumber,
          text: job.data.text,
          interactiveValue: job.data.interactiveValue,
        });

      const sendResult = await this.whatsAppService.sendOrchestratorResponse({
        to: job.data.whatsappPhoneNumber,
        language: profile.preferredLanguage ?? Language.EN,
        response,
      });

      if (sendResult.overallStatus !== 'sent') {
        await this.whatsappFailureLogService.logFailure({
          sessionId: session.id,
          userId: user.id,
          jobId: String(job.id ?? ''),
          failureStage: WhatsAppFailureStage.OUTBOUND_SEND,
          phoneNumber: job.data.whatsappPhoneNumber,
          providerMessageId: job.data.providerMessageId,
          errorMessage: `Outbound send completed with status ${sendResult.overallStatus}`,
          payload: {
            jobData: job.data,
            response,
            sendResult,
          },
        });
      }

      if (this.shouldRetryOutboundSend(sendResult)) {
        throw new Error(
          `Outbound WhatsApp send failed with retryable status: ${sendResult.overallStatus}`,
        );
      }

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
    } catch (error: any) {
      await this.whatsappFailureLogService.logFailure({
        sessionId: session.id,
        userId: user.id,
        jobId: String(job.id ?? ''),
        failureStage: WhatsAppFailureStage.JOB_PROCESSING,
        phoneNumber: job.data.whatsappPhoneNumber,
        providerMessageId: job.data.providerMessageId,
        errorMessage: error.message ?? 'Unknown job processing error',
        errorStack: error.stack ?? null,
        payload: {
          jobData: job.data,
        },
      });

      throw error;
    }
  }

  private shouldRetryOutboundSend(sendResult: {
    overallStatus: 'sent' | 'timeout_uncertain' | 'failed' | 'partial_failure';
    parts: Array<{
      status: 'sent' | 'timeout_uncertain' | 'failed' | 'skipped';
    }>;
  }): boolean {
    if (sendResult.overallStatus === 'sent') {
      return false;
    }

    if (sendResult.overallStatus === 'timeout_uncertain') {
      return false;
    }

    if (sendResult.overallStatus === 'partial_failure') {
      return false;
    }

    const hasSentOrUncertainPart = sendResult.parts.some(
      (part) => part.status === 'sent' || part.status === 'timeout_uncertain',
    );

    if (hasSentOrUncertainPart) {
      return false;
    }

    return true;
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
  async onFailed(job: Job<WhatsAppInboundJob>, error: Error) {
    this.logger.error(
      `Bull job failed: ${job?.id} - ${error.message}`,
      error.stack,
    );
    await this.whatsappFailureLogService.logFailure({
      sessionId: null,
      userId: null,
      jobId: String(job?.id ?? ''),
      failureStage: WhatsAppFailureStage.JOB_PROCESSING,
      phoneNumber: job?.data?.whatsappPhoneNumber ?? null,
      providerMessageId: job?.data?.providerMessageId ?? null,
      errorMessage: error.message,
      errorStack: error.stack ?? null,
      payload: {
        jobData: job?.data ?? null,
      },
    });
  }
}
