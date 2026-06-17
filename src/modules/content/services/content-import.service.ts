/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { ContentService } from '../services/content.service';
import { TopicCategory } from '../entities/topic-category.entity';
import { Topic } from '../entities/topic.entity';
import { Subtopic } from '../entities/subtopic.entity';
import { ContentNode } from '../entities/content-node.entity';

type SeedCategory = {
  code: string;
  titleEn: string;
  titleSw: string;
  descriptionEn: string | null;
  descriptionSw: string | null;
  audienceGender: any;
  ageBandRule: any;
  sortOrder: number;
  isActive: boolean;
};

type SeedTopic = {
  code: string;
  titleEn: string;
  titleSw: string;
  descriptionEn: string | null;
  descriptionSw: string | null;
  audienceGender: any;
  ageBandRule: any;
  sortOrder: number;
  isActive: boolean;
};

type SeedSubtopic = {
  code: string;
  titleEn: string;
  titleSw: string;
  descriptionEn: string | null;
  descriptionSw: string | null;
  audienceGender: any;
  ageBandRule: any;
  sortOrder: number;
  isActive: boolean;
};

type SeedContentNode = {
  subtopicCode: string;
  nodeKey: string;
  nodeType: any;
  language: any;
  messageText: string;
  inputType: any;
  mediaAssetKey: string | null;
  isStartNode: boolean;
  isEndNode: boolean;
  sortOrder: number;
  isActive: boolean;
};

type SeedContentNodeOption = {
  nodeKey: string;
  optionValue: string;
  labelEn: string;
  labelSw: string;
  nextNodeKey: string;
  sortOrder: number;
  isActive: boolean;
};

type SectionSeed = {
  category: SeedCategory;
  topic: SeedTopic;
  subtopics: SeedSubtopic[];
  contentNodes: SeedContentNode[];
  contentNodeOptions: SeedContentNodeOption[];
};

@Injectable()
export class ContentImportService {
  constructor(private readonly contentService: ContentService) {}

  async importSection(seed: SectionSeed): Promise<void> {
    const category = await this.upsertCategory(seed.category);
    const topic = await this.upsertTopic(seed.topic, category.id);

    const subtopicMap = new Map<string, Subtopic>();

    for (const subtopicSeed of seed.subtopics) {
      const subtopic = await this.upsertSubtopic(subtopicSeed, topic.id);
      subtopicMap.set(subtopic.code, subtopic);
    }

    for (const nodeSeed of seed.contentNodes) {
      const subtopic = subtopicMap.get(nodeSeed.subtopicCode);

      if (!subtopic) {
        throw new Error(
          `Subtopic with code ${nodeSeed.subtopicCode} was not found during content node import.`,
        );
      }

      await this.upsertContentNode({
        ...nodeSeed,
        categoryId: category.id,
        topicId: topic.id,
        subtopicId: subtopic.id,
      });
    }

    for (const optionSeed of seed.contentNodeOptions) {
      await this.upsertContentNodeOption(optionSeed);
    }
  }

  private async upsertCategory(seed: SeedCategory): Promise<TopicCategory> {
    const existing = await this.contentService.findCategoryByCode(seed.code);

    if (existing) {
      return this.contentService.updateCategory(existing.id, {
        titleEn: seed.titleEn,
        titleSw: seed.titleSw,
        descriptionEn: seed.descriptionEn,
        descriptionSw: seed.descriptionSw,
        audienceGender: seed.audienceGender,
        ageBandRule: seed.ageBandRule,
        sortOrder: seed.sortOrder,
        isActive: seed.isActive,
      });
    }

    return this.contentService.createCategory(seed);
  }

  private async upsertTopic(
    seed: SeedTopic,
    categoryId: string,
  ): Promise<Topic> {
    const existing = await this.contentService.findTopicByCode(seed.code);

    if (existing) {
      return this.contentService.updateTopic(existing.id, {
        categoryId,
        titleEn: seed.titleEn,
        titleSw: seed.titleSw,
        descriptionEn: seed.descriptionEn,
        descriptionSw: seed.descriptionSw,
        audienceGender: seed.audienceGender,
        ageBandRule: seed.ageBandRule,
        sortOrder: seed.sortOrder,
        isActive: seed.isActive,
      });
    }

    return this.contentService.createTopic({
      categoryId,
      code: seed.code,
      titleEn: seed.titleEn,
      titleSw: seed.titleSw,
      descriptionEn: seed.descriptionEn,
      descriptionSw: seed.descriptionSw,
      audienceGender: seed.audienceGender,
      ageBandRule: seed.ageBandRule,
      sortOrder: seed.sortOrder,
      isActive: seed.isActive,
    });
  }

  private async upsertSubtopic(
    seed: SeedSubtopic,
    topicId: string,
  ): Promise<Subtopic> {
    const existing = await this.contentService.findSubtopicByCode(seed.code);

    if (existing) {
      return this.contentService.updateSubtopic(existing.id, {
        topicId,
        titleEn: seed.titleEn,
        titleSw: seed.titleSw,
        descriptionEn: seed.descriptionEn,
        descriptionSw: seed.descriptionSw,
        audienceGender: seed.audienceGender,
        ageBandRule: seed.ageBandRule,
        sortOrder: seed.sortOrder,
        isActive: seed.isActive,
      });
    }

    return this.contentService.createSubtopic({
      topicId,
      code: seed.code,
      titleEn: seed.titleEn,
      titleSw: seed.titleSw,
      descriptionEn: seed.descriptionEn,
      descriptionSw: seed.descriptionSw,
      audienceGender: seed.audienceGender,
      ageBandRule: seed.ageBandRule,
      sortOrder: seed.sortOrder,
      isActive: seed.isActive,
    });
  }

  private async upsertContentNode(data: {
    categoryId: string;
    topicId: string;
    subtopicId: string;
    nodeKey: string;
    nodeType: any;
    language: any;
    messageText: string;
    inputType: any;
    mediaAssetKey: string | null;
    isStartNode: boolean;
    isEndNode: boolean;
    sortOrder: number;
    isActive: boolean;
  }): Promise<ContentNode> {
    const existing = await this.contentService.findContentNodeByKeyAndLanguage(
      data.nodeKey,
      data.language,
    );

    if (existing) {
      return this.contentService.updateContentNode(existing.id, {
        categoryId: data.categoryId,
        topicId: data.topicId,
        subtopicId: data.subtopicId,
        nodeType: data.nodeType,
        messageText: data.messageText,
        inputType: data.inputType,
        mediaAssetKey: data.mediaAssetKey,
        isStartNode: data.isStartNode,
        isEndNode: data.isEndNode,
        sortOrder: data.sortOrder,
        isActive: data.isActive,
      });
    }

    return this.contentService.createContentNode({
      categoryId: data.categoryId,
      topicId: data.topicId,
      subtopicId: data.subtopicId,
      nodeKey: data.nodeKey,
      nodeType: data.nodeType,
      language: data.language,
      messageText: data.messageText,
      inputType: data.inputType,
      mediaAssetKey: data.mediaAssetKey,
      isStartNode: data.isStartNode,
      isEndNode: data.isEndNode,
      sortOrder: data.sortOrder,
      isActive: data.isActive,
    });
  }

  private async upsertContentNodeOption(
    seed: SeedContentNodeOption,
  ): Promise<void> {
    const nodes = await this.contentService.findAllContentNodesByKey(
      seed.nodeKey,
    );

    if (!nodes.length) {
      throw new Error(
        `No content nodes found for nodeKey ${seed.nodeKey} while importing options.`,
      );
    }

    for (const node of nodes) {
      const existingOptions =
        await this.contentService.getActiveOptionsByContentNodeId(node.id);

      const existing = existingOptions.find(
        (option) => option.optionValue === seed.optionValue,
      );

      if (existing) {
        await this.contentService.updateContentNodeOption(existing.id, {
          labelEn: seed.labelEn,
          labelSw: seed.labelSw,
          nextNodeKey: seed.nextNodeKey,
          sortOrder: seed.sortOrder,
          isActive: seed.isActive,
        });
        continue;
      }

      await this.contentService.createContentNodeOption({
        contentNodeId: node.id,
        labelEn: seed.labelEn,
        labelSw: seed.labelSw,
        optionValue: seed.optionValue,
        nextNodeKey: seed.nextNodeKey,
        sortOrder: seed.sortOrder,
        isActive: seed.isActive,
      });
    }
  }
}
