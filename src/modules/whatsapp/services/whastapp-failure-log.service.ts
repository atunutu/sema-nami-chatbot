import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WhatsAppFailureLog } from '../entities/whatsapp-failure-log.entity';
import { WhatsAppFailureStage } from '../enums/whatsapp-failure-stage.enum';

@Injectable()
export class WhatsAppFailureLogService {
  constructor(
    @InjectRepository(WhatsAppFailureLog)
    private readonly whatsappFailureLogRepository: Repository<WhatsAppFailureLog>,
  ) {}

  async logFailure(data: {
    sessionId?: string | null;
    userId?: string | null;
    jobId?: string | null;
    failureStage: WhatsAppFailureStage;
    phoneNumber?: string | null;
    providerMessageId?: string | null;
    errorMessage: string;
    errorStack?: string | null;
    payload?: Record<string, any> | null;
  }): Promise<WhatsAppFailureLog> {
    const log = this.whatsappFailureLogRepository.create({
      sessionId: data.sessionId ?? null,
      userId: data.userId ?? null,
      jobId: data.jobId ?? null,
      failureStage: data.failureStage,
      phoneNumber: data.phoneNumber ?? null,
      providerMessageId: data.providerMessageId ?? null,
      errorMessage: data.errorMessage,
      errorStack: data.errorStack ?? null,
      payload: data.payload ?? null,
    });

    return this.whatsappFailureLogRepository.save(log);
  }
}
