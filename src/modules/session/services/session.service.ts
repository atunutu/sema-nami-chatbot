import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatState } from 'src/common/enums/chat-state.enum';
import { SessionStatus } from 'src/common/enums/session-status.enum';
import { Repository } from 'typeorm';
import { ChatSession } from '../entities/chat-session.entity';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(ChatSession)
    private readonly chatSessionsRepository: Repository<ChatSession>,
  ) {}

  async getActiveSessionByUserId(userId: string): Promise<ChatSession | null> {
    return this.chatSessionsRepository.findOne({
      where: {
        userId,
        status: SessionStatus.ACTIVE,
      },
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async createSession(userId: string): Promise<ChatSession> {
    const session = this.chatSessionsRepository.create({
      userId,
      status: SessionStatus.ACTIVE,
      currentState: ChatState.WELCOME,
      currentCategoryCode: null,
      currentTopicCode: null,
      currentSubtopicCode: null,
      currentNodeKey: null,
      previousNodeKey: null,
      startedAt: new Date(),
      endedAt: null,
      lastMessageAt: new Date(),
    });

    return this.chatSessionsRepository.save(session);
  }

  async getOrCreateActiveSession(userId: string): Promise<ChatSession> {
    const existingSession = await this.getActiveSessionByUserId(userId);

    if (existingSession) {
      return existingSession;
    }

    return this.createSession(userId);
  }

  async updateCurrentState(
    sessionId: string,
    currentState: ChatState,
  ): Promise<ChatSession> {
    await this.chatSessionsRepository.update(sessionId, { currentState });
    return this.getSessionOrFail(sessionId);
  }

  async updateCurrentLocation(
    sessionId: string,
    data: {
      currentCategoryCode?: string | null;
      currentTopicCode?: string | null;
      currentSubtopicCode?: string | null;
      currentNodeKey?: string | null;
      previousNodeKey?: string | null;
    },
  ): Promise<ChatSession> {
    await this.chatSessionsRepository.update(sessionId, data);
    return this.getSessionOrFail(sessionId);
  }

  async touchLastMessageAt(sessionId: string): Promise<ChatSession> {
    await this.chatSessionsRepository.update(sessionId, {
      lastMessageAt: new Date(),
    });

    return this.getSessionOrFail(sessionId);
  }

  async completeSession(sessionId: string): Promise<ChatSession> {
    await this.chatSessionsRepository.update(sessionId, {
      status: SessionStatus.COMPLETED,
      currentState: ChatState.COMPLETED,
      endedAt: new Date(),
    });

    return this.getSessionOrFail(sessionId);
  }

  async interruptSession(sessionId: string): Promise<ChatSession> {
    await this.chatSessionsRepository.update(sessionId, {
      status: SessionStatus.INTERRUPTED,
      endedAt: new Date(),
    });

    return this.getSessionOrFail(sessionId);
  }

  private async getSessionOrFail(sessionId: string): Promise<ChatSession> {
    const session = await this.chatSessionsRepository.findOne({
      where: { id: sessionId },
    });

    if (!session) {
      throw new Error(
        `ChatSession with ID ${sessionId} was not found after update.`,
      );
    }

    return session;
  }
}
