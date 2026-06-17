import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AgeBand } from '../../../common/enums/age-band.enum';
import { Gender } from '../../../common/enums/gender.enum';
import { Repository } from 'typeorm';
import { TopicCategory } from '../entities/topic-category.entity';
import { Topic } from '../entities/topic.entity';
import { Subtopic } from '../entities/subtopic.entity';
import { ContentNode } from '../entities/content-node.entity';
import { InputType } from 'src/common/enums/input-type.enum';
import { Language } from 'src/common/enums/language.enum';
import { NodeType } from 'src/common/enums/node-type.enum';
import { ContentNodeOption } from '../entities/content-node-option.entity';
import { SubtopicRelatedLink } from '../entities/subtopic-related-link.entity';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(TopicCategory)
    private readonly topicCategoriesRepository: Repository<TopicCategory>,

    @InjectRepository(Topic)
    private readonly topicsRepository: Repository<Topic>,

    @InjectRepository(Subtopic)
    private readonly subtopicsRepository: Repository<Subtopic>,

    @InjectRepository(ContentNode)
    private readonly contentNodesRepository: Repository<ContentNode>,

    @InjectRepository(ContentNodeOption)
    private readonly contentNodeOptionsRepository: Repository<ContentNodeOption>,

    @InjectRepository(SubtopicRelatedLink)
    private readonly subtopicRelatedLinksRepository: Repository<SubtopicRelatedLink>,
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

  async createTopic(data: {
    categoryId: string;
    code: string;
    titleEn: string;
    titleSw: string;
    descriptionEn?: string | null;
    descriptionSw?: string | null;
    audienceGender?: Gender | null;
    ageBandRule?: AgeBand | null;
    sortOrder?: number;
    isActive?: boolean;
  }): Promise<Topic> {
    const topic = this.topicsRepository.create({
      categoryId: data.categoryId,
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

    return this.topicsRepository.save(topic);
  }

  async getActiveTopicsByCategoryId(categoryId: string): Promise<Topic[]> {
    return this.topicsRepository.find({
      where: {
        categoryId,
        isActive: true,
      },
      order: {
        sortOrder: 'ASC',
        createdAt: 'ASC',
      },
    });
  }

  async getVisibleTopicsByCategoryId(
    categoryId: string,
    filters?: {
      ageBand?: AgeBand | null;
      gender?: Gender | null;
    },
  ): Promise<Topic[]> {
    const topics = await this.getActiveTopicsByCategoryId(categoryId);

    return topics.filter((topic) => {
      const genderMatches =
        !topic.audienceGender || topic.audienceGender === filters?.gender;

      const ageMatches =
        !topic.ageBandRule || topic.ageBandRule === filters?.ageBand;

      return genderMatches && ageMatches;
    });
  }

  async findTopicByCode(code: string): Promise<Topic | null> {
    return this.topicsRepository.findOne({
      where: { code },
    });
  }

  async createSubtopic(data: {
    topicId: string;
    code: string;
    titleEn: string;
    titleSw: string;
    descriptionEn?: string | null;
    descriptionSw?: string | null;
    audienceGender?: Gender | null;
    ageBandRule?: AgeBand | null;
    sortOrder?: number;
    isActive?: boolean;
  }): Promise<Subtopic> {
    const subtopic = this.subtopicsRepository.create({
      topicId: data.topicId,
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

    return this.subtopicsRepository.save(subtopic);
  }

  async getActiveSubtopicsByTopicId(topicId: string): Promise<Subtopic[]> {
    return this.subtopicsRepository.find({
      where: {
        topicId,
        isActive: true,
      },
      order: {
        sortOrder: 'ASC',
        createdAt: 'ASC',
      },
    });
  }

  async getVisibleSubtopicsByTopicId(
    topicId: string,
    filters?: {
      ageBand?: AgeBand | null;
      gender?: Gender | null;
    },
  ): Promise<Subtopic[]> {
    const subtopics = await this.getActiveSubtopicsByTopicId(topicId);

    return subtopics.filter((subtopic) => {
      const genderMatches =
        !subtopic.audienceGender || subtopic.audienceGender === filters?.gender;

      const ageMatches =
        !subtopic.ageBandRule || subtopic.ageBandRule === filters?.ageBand;

      return genderMatches && ageMatches;
    });
  }

  async findSubtopicByCode(code: string): Promise<Subtopic | null> {
    return this.subtopicsRepository.findOne({
      where: { code },
    });
  }
  async createContentNode(data: {
    categoryId?: string | null;
    topicId?: string | null;
    subtopicId?: string | null;
    nodeKey: string;
    nodeType: NodeType;
    language: Language;
    messageText: string;
    inputType?: InputType;
    mediaAssetKey?: string | null;
    isStartNode?: boolean;
    isEndNode?: boolean;
    sortOrder?: number;
    isActive?: boolean;
  }): Promise<ContentNode> {
    const contentNode = this.contentNodesRepository.create({
      categoryId: data.categoryId ?? null,
      topicId: data.topicId ?? null,
      subtopicId: data.subtopicId ?? null,
      nodeKey: data.nodeKey,
      nodeType: data.nodeType,
      language: data.language,
      messageText: data.messageText,
      inputType: data.inputType ?? InputType.NONE,
      mediaAssetKey: data.mediaAssetKey ?? null,
      isStartNode: data.isStartNode ?? false,
      isEndNode: data.isEndNode ?? false,
      sortOrder: data.sortOrder ?? 0,
      isActive: data.isActive ?? true,
    });

    return this.contentNodesRepository.save(contentNode);
  }

  async findContentNodeByKeyAndLanguage(
    nodeKey: string,
    language: Language,
  ): Promise<ContentNode | null> {
    return this.contentNodesRepository.findOne({
      where: {
        nodeKey,
        language,
      },
    });
  }

  async getActiveContentNodesBySubtopicId(
    subtopicId: string,
    language: Language,
  ): Promise<ContentNode[]> {
    return this.contentNodesRepository.find({
      where: {
        subtopicId,
        language,
        isActive: true,
      },
      order: {
        sortOrder: 'ASC',
        createdAt: 'ASC',
      },
    });
  }

  async getStartContentNodeBySubtopicId(
    subtopicId: string,
    language: Language,
  ): Promise<ContentNode | null> {
    return this.contentNodesRepository.findOne({
      where: {
        subtopicId,
        language,
        isStartNode: true,
        isActive: true,
      },
      order: {
        sortOrder: 'ASC',
        createdAt: 'ASC',
      },
    });
  }
  async createContentNodeOption(data: {
    contentNodeId: string;
    labelEn: string;
    labelSw: string;
    optionValue: string;
    nextNodeKey: string;
    sortOrder?: number;
    isActive?: boolean;
  }): Promise<ContentNodeOption> {
    const option = this.contentNodeOptionsRepository.create({
      contentNodeId: data.contentNodeId,
      labelEn: data.labelEn,
      labelSw: data.labelSw,
      optionValue: data.optionValue,
      nextNodeKey: data.nextNodeKey,
      sortOrder: data.sortOrder ?? 0,
      isActive: data.isActive ?? true,
    });

    return this.contentNodeOptionsRepository.save(option);
  }

  async getActiveOptionsByContentNodeId(
    contentNodeId: string,
  ): Promise<ContentNodeOption[]> {
    return this.contentNodeOptionsRepository.find({
      where: {
        contentNodeId,
        isActive: true,
      },
      order: {
        sortOrder: 'ASC',
        createdAt: 'ASC',
      },
    });
  }

  async createSubtopicRelatedLink(data: {
    fromSubtopicId: string;
    toSubtopicId: string;
    sortOrder?: number;
  }): Promise<SubtopicRelatedLink> {
    const relatedLink = this.subtopicRelatedLinksRepository.create({
      fromSubtopicId: data.fromSubtopicId,
      toSubtopicId: data.toSubtopicId,
      sortOrder: data.sortOrder ?? 0,
    });

    return this.subtopicRelatedLinksRepository.save(relatedLink);
  }

  async getRelatedLinksBySubtopicId(
    fromSubtopicId: string,
  ): Promise<SubtopicRelatedLink[]> {
    return this.subtopicRelatedLinksRepository.find({
      where: { fromSubtopicId },
      order: {
        sortOrder: 'ASC',
        createdAt: 'ASC',
      },
    });
  }

  async getRelatedSubtopicsBySubtopicId(
    fromSubtopicId: string,
  ): Promise<Subtopic[]> {
    const relatedLinks = await this.subtopicRelatedLinksRepository.find({
      where: { fromSubtopicId },
      relations: {
        toSubtopic: true,
      },
      order: {
        sortOrder: 'ASC',
        createdAt: 'ASC',
      },
    });

    return relatedLinks
      .map((link) => link.toSubtopic)
      .filter(
        (subtopic): subtopic is Subtopic => !!subtopic && subtopic.isActive,
      );
  }

  async getOptionsByNodeKeyAndLanguage(
    nodeKey: string,
    language: Language,
  ): Promise<ContentNodeOption[]> {
    const node = await this.findContentNodeByKeyAndLanguage(nodeKey, language);

    if (!node) {
      return [];
    }

    return this.getActiveOptionsByContentNodeId(node.id);
  }

  async resolveNextNodeByOption(data: {
    contentNodeId: string;
    optionValue: string;
    language: Language;
  }): Promise<ContentNode | null> {
    const options = await this.getActiveOptionsByContentNodeId(
      data.contentNodeId,
    );

    const matchedOption = options.find(
      (option) => option.optionValue === data.optionValue,
    );

    if (!matchedOption) {
      return null;
    }

    return this.findContentNodeByKeyAndLanguage(
      matchedOption.nextNodeKey,
      data.language,
    );
  }
  async findAllContentNodesByKey(nodeKey: string): Promise<ContentNode[]> {
    return this.contentNodesRepository.find({
      where: { nodeKey },
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async updateCategory(
    categoryId: string,
    data: Partial<TopicCategory>,
  ): Promise<TopicCategory> {
    await this.topicCategoriesRepository.update(categoryId, data);

    const updated = await this.topicCategoriesRepository.findOne({
      where: { id: categoryId },
    });

    if (!updated) {
      throw new Error(
        `TopicCategory with ID ${categoryId} was not found after update.`,
      );
    }

    return updated;
  }

  async updateTopic(topicId: string, data: Partial<Topic>): Promise<Topic> {
    await this.topicsRepository.update(topicId, data);

    const updated = await this.topicsRepository.findOne({
      where: { id: topicId },
    });

    if (!updated) {
      throw new Error(`Topic with ID ${topicId} was not found after update.`);
    }

    return updated;
  }

  async updateSubtopic(
    subtopicId: string,
    data: Partial<Subtopic>,
  ): Promise<Subtopic> {
    await this.subtopicsRepository.update(subtopicId, data);

    const updated = await this.subtopicsRepository.findOne({
      where: { id: subtopicId },
    });

    if (!updated) {
      throw new Error(
        `Subtopic with ID ${subtopicId} was not found after update.`,
      );
    }

    return updated;
  }

  async updateContentNode(
    contentNodeId: string,
    data: Partial<ContentNode>,
  ): Promise<ContentNode> {
    await this.contentNodesRepository.update(contentNodeId, data);

    const updated = await this.contentNodesRepository.findOne({
      where: { id: contentNodeId },
    });

    if (!updated) {
      throw new Error(
        `ContentNode with ID ${contentNodeId} was not found after update.`,
      );
    }

    return updated;
  }

  async updateContentNodeOption(
    optionId: string,
    data: Partial<ContentNodeOption>,
  ): Promise<ContentNodeOption> {
    await this.contentNodeOptionsRepository.update(optionId, data);

    const updated = await this.contentNodeOptionsRepository.findOne({
      where: { id: optionId },
    });

    if (!updated) {
      throw new Error(
        `ContentNodeOption with ID ${optionId} was not found after update.`,
      );
    }

    return updated;
  }
}
