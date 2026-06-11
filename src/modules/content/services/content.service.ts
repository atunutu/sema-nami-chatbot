import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AgeBand } from '../../../common/enums/age-band.enum';
import { Gender } from '../../../common/enums/gender.enum';
import { Repository } from 'typeorm';
import { TopicCategory } from '../entities/topic-category.entity';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(TopicCategory)
    private readonly topicCategoriesRepository: Repository<TopicCategory>,
  ) {}

  async createCategory(data: {
    code: string;
    titleEn: string;
    titleSw: string;
    descriptionEn?: string | null;
    descriptionSw?: string | null;
    audienceGender?: Gender | null;
    ageBandRule?: AgeBand | null;
    sortOrder?: number;
    isActive?: boolean;
  }): Promise<TopicCategory> {
    const category = this.topicCategoriesRepository.create({
      code: data.code,
      titleEn: data.titleEn,
      titleSw: data.titleSw,
      descriptionEn: data.descriptionEn ?? null,
      descriptionSw: data.descriptionSw ?? null,
      audienceGender: data.audienceGender ?? null,
      ageBandRule: data.ageBandRule ?? null,
      sortOrder: data.sortOrder ?? 0,
      isActive: data.isActive ?? true,
    });

    return this.topicCategoriesRepository.save(category);
  }

  async getActiveCategories(): Promise<TopicCategory[]> {
    return this.topicCategoriesRepository.find({
      where: { isActive: true },
      order: { sortOrder: 'ASC', createdAt: 'ASC' },
    });
  }

  async getVisibleCategories(filters?: {
    ageBand?: AgeBand | null;
    gender?: Gender | null;
  }): Promise<TopicCategory[]> {
    const categories = await this.getActiveCategories();

    return categories.filter((category) => {
      const genderMatches =
        !category.audienceGender || category.audienceGender === filters?.gender;

      const ageMatches =
        !category.ageBandRule || category.ageBandRule === filters?.ageBand;

      return genderMatches && ageMatches;
    });
  }

  async findCategoryByCode(code: string): Promise<TopicCategory | null> {
    return this.topicCategoriesRepository.findOne({
      where: { code },
    });
  }
}
