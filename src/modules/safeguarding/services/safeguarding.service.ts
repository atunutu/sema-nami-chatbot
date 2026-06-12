import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Language } from 'src/common/enums/language.enum';
import { TriggerCategory } from 'src/common/enums/trigger-category.enum';
import { Repository } from 'typeorm';
import { SafeguardingTrigger } from '../entities/safeguarding-trigger.entity';
import { SafeguardingResponse } from '../entities/safeguarding-response.entity';

@Injectable()
export class SafeguardingService {
  constructor(
    @InjectRepository(SafeguardingTrigger)
    private readonly safeguardingTriggersRepository: Repository<SafeguardingTrigger>,

    @InjectRepository(SafeguardingResponse)
    private readonly safeguardingResponsesRepository: Repository<SafeguardingResponse>,
  ) {}

  async createTrigger(data: {
    triggerCategory: TriggerCategory;
    language: Language;
    phrase: string;
    isActive?: boolean;
  }): Promise<SafeguardingTrigger> {
    const trigger = this.safeguardingTriggersRepository.create({
      triggerCategory: data.triggerCategory,
      language: data.language,
      phrase: data.phrase.trim().toLowerCase(),
      isActive: data.isActive ?? true,
    });

    return this.safeguardingTriggersRepository.save(trigger);
  }

  async getActiveTriggers(): Promise<SafeguardingTrigger[]> {
    return this.safeguardingTriggersRepository.find({
      where: { isActive: true },
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async getActiveTriggersByLanguage(
    language: Language,
  ): Promise<SafeguardingTrigger[]> {
    return this.safeguardingTriggersRepository.find({
      where: {
        language,
        isActive: true,
      },
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async detectTrigger(
    messageText: string,
    language: Language,
  ): Promise<SafeguardingTrigger | null> {
    const normalizedText = messageText.trim().toLowerCase();

    if (!normalizedText) {
      return null;
    }

    const triggers = await this.getActiveTriggersByLanguage(language);

    return (
      triggers.find((trigger) => normalizedText.includes(trigger.phrase)) ??
      null
    );
  }

  async createResponse(data: {
    triggerCategory: TriggerCategory;
    language: Language;
    responseText: string;
    showReferrals?: boolean;
    allowReturnToMenu?: boolean;
    isActive?: boolean;
  }): Promise<SafeguardingResponse> {
    const response = this.safeguardingResponsesRepository.create({
      triggerCategory: data.triggerCategory,
      language: data.language,
      responseText: data.responseText.trim(),
      showReferrals: data.showReferrals ?? true,
      allowReturnToMenu: data.allowReturnToMenu ?? true,
      isActive: data.isActive ?? true,
    });

    return this.safeguardingResponsesRepository.save(response);
  }

  async getActiveResponseByCategoryAndLanguage(
    triggerCategory: TriggerCategory,
    language: Language,
  ): Promise<SafeguardingResponse | null> {
    return this.safeguardingResponsesRepository.findOne({
      where: {
        triggerCategory,
        language,
        isActive: true,
      },
    });
  }

  async buildSafeguardingReply(
    messageText: string,
    language: Language,
  ): Promise<{
    trigger: SafeguardingTrigger;
    response: SafeguardingResponse | null;
  } | null> {
    const trigger = await this.detectTrigger(messageText, language);

    if (!trigger) {
      return null;
    }

    const response = await this.getActiveResponseByCategoryAndLanguage(
      trigger.triggerCategory,
      language,
    );

    return {
      trigger,
      response,
    };
  }
}
