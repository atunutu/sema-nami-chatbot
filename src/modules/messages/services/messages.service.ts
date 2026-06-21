import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDirection } from '../../../common/enums/message-direction.enum';
import { MessageType } from '../../../common/enums/message-type.enum';
import { Repository } from 'typeorm';
import { Message } from '../entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messagesRepository: Repository<Message>,
  ) {}

  async logInboundMessage(data: {
    sessionId: string;
    userId: string;
    messageType: MessageType;
    messageText?: string | null;
    interactiveValue?: string | null;
    triggeredSafeguarding?: boolean;
    rawPayload?: Record<string, any> | null;
    provider?: string | null;
    providerMessageId?: string | null;
  }): Promise<Message> {
    const message = this.messagesRepository.create({
      sessionId: data.sessionId,
      userId: data.userId,
      direction: MessageDirection.INBOUND,
      messageType: data.messageType,
      messageText: data.messageText ?? null,
      interactiveValue: data.interactiveValue ?? null,
      triggeredSafeguarding: data.triggeredSafeguarding ?? false,
      rawPayload: data.rawPayload ?? null,
      provider: data.provider ?? null,
      providerMessageId: data.providerMessageId ?? null,
    });

    return this.messagesRepository.save(message);
  }

  async logOutboundMessage(data: {
    sessionId: string;
    userId: string;
    messageType: MessageType;
    messageText?: string | null;
    interactiveValue?: string | null;
    triggeredSafeguarding?: boolean;
    rawPayload?: Record<string, any> | null;
  }): Promise<Message> {
    const message = this.messagesRepository.create({
      sessionId: data.sessionId,
      userId: data.userId,
      direction: MessageDirection.OUTBOUND,
      messageType: data.messageType,
      messageText: data.messageText ?? null,
      interactiveValue: data.interactiveValue ?? null,
      triggeredSafeguarding: data.triggeredSafeguarding ?? false,
      rawPayload: data.rawPayload ?? null,
    });

    return this.messagesRepository.save(message);
  }

  async findInboundByProviderMessageId(
    provider: string,
    providerMessageId: string,
  ): Promise<Message | null> {
    return this.messagesRepository.findOne({
      where: {
        provider,
        providerMessageId,
        direction: MessageDirection.INBOUND,
      },
    });
  }

  async existsInboundByProviderMessageId(
    provider: string,
    providerMessageId: string,
  ): Promise<boolean> {
    const existing = await this.findInboundByProviderMessageId(
      provider,
      providerMessageId,
    );

    return !!existing;
  }

  async getRecentMessagesBySessionId(
    sessionId: string,
    limit = 20,
  ): Promise<Message[]> {
    return this.messagesRepository.find({
      where: { sessionId },
      order: { createdAt: 'DESC' },
      take: limit,
    });
  }

  async markMessageAsSafeguardingTriggered(
    messageId: string,
  ): Promise<Message> {
    await this.messagesRepository.update(messageId, {
      triggeredSafeguarding: true,
    });

    const updatedMessage = await this.messagesRepository.findOne({
      where: { id: messageId },
    });

    if (!updatedMessage) {
      throw new Error(
        `Message with ID ${messageId} was not found after update.`,
      );
    }

    return updatedMessage;
  }

  isUniqueConstraintViolation(error: unknown): boolean {
    return (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as { code?: string }).code === '23505'
    );
  }
}
