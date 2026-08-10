/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Injectable, Logger } from '@nestjs/common';
import { DataSource, In } from 'typeorm';
import { ContentService } from '../services/content.service';
import { TopicCategory } from '../entities/topic-category.entity';
import { Topic } from '../entities/topic.entity';
import { Subtopic } from '../entities/subtopic.entity';
import { ContentNode } from '../entities/content-node.entity';
import { ContentNodeOption } from '../entities/content-node-option.entity';

type SeedCategory = {
  code: string;
  titleEn: string;
  titleSw: string;
  descriptionEn: string | null;
  descriptionSw: string | null;
  introMessageEn?: string | null;
  introMessageSw?: string | null;
  introMediaAssetKey?: string | null;
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
  private readonly logger = new Logger(ContentImportService.name);
  constructor(
    private readonly dataSource: DataSource,
    private readonly contentService: ContentService,
  ) {}

  async importSection(seed: SectionSeed): Promise<void> {
    // await this.contentService.clearAllContentCache();

    const sectionLabel = `${seed.category.code} / ${seed.topic.code}`;
    this.logger.log(`Starting import for section: ${sectionLabel}`);

    console.time(`${sectionLabel}::total`);

    try {
      await this.dataSource.transaction(async (manager) => {
        const categoryRepo = manager.getRepository(TopicCategory);
        const topicRepo = manager.getRepository(Topic);
        const subtopicRepo = manager.getRepository(Subtopic);
        const contentNodeRepo = manager.getRepository(ContentNode);
        const contentNodeOptionRepo = manager.getRepository(ContentNodeOption);

        // 1. Category
        console.time(`${sectionLabel}::category`);
        this.logger.log(`Importing category: ${seed.category.code}`);

        let category = await categoryRepo.findOne({
          where: { code: seed.category.code },
        });

        if (!category) {
          category = categoryRepo.create({
            ...seed.category,
          });
        } else {
          Object.assign(category, {
            titleEn: seed.category.titleEn,
            titleSw: seed.category.titleSw,
            descriptionEn: seed.category.descriptionEn,
            descriptionSw: seed.category.descriptionSw,
            introMessageEn: seed.category.introMessageEn ?? null,
            introMessageSw: seed.category.introMessageSw ?? null,
            introMediaAssetKey: seed.category.introMediaAssetKey ?? null,
            audienceGender: seed.category.audienceGender,
            ageBandRule: seed.category.ageBandRule,
            sortOrder: seed.category.sortOrder,
            isActive: seed.category.isActive,
          });
        }

        category = await categoryRepo.save(category);

        console.timeEnd(`${sectionLabel}::category`);

        // 2. Topic
        console.time(`${sectionLabel}::topic`);
        this.logger.log(`Importing topic: ${seed.topic.code}`);

        let topic = await topicRepo.findOne({
          where: { code: seed.topic.code },
        });

        if (!topic) {
          topic = topicRepo.create({
            ...seed.topic,
            categoryId: category.id,
          });
        } else {
          Object.assign(topic, {
            categoryId: category.id,
            titleEn: seed.topic.titleEn,
            titleSw: seed.topic.titleSw,
            descriptionEn: seed.topic.descriptionEn,
            descriptionSw: seed.topic.descriptionSw,
            audienceGender: seed.topic.audienceGender,
            ageBandRule: seed.topic.ageBandRule,
            sortOrder: seed.topic.sortOrder,
            isActive: seed.topic.isActive,
          });
        }

        topic = await topicRepo.save(topic);

        console.timeEnd(`${sectionLabel}::topic`);

        // 3. Subtopics
        console.time(`${sectionLabel}::subtopics`);
        this.logger.log(`Importing ${seed.subtopics.length} subtopics`);

        const subtopicCodes = seed.subtopics.map((item) => item.code);

        const existingSubtopics = subtopicCodes.length
          ? await subtopicRepo.find({
              where: {
                code: In(subtopicCodes),
              },
            })
          : [];

        const existingSubtopicMap = new Map(
          existingSubtopics.map((item) => [item.code, item]),
        );

        const subtopicsToSave = seed.subtopics.map((subtopicSeed) => {
          const existing = existingSubtopicMap.get(subtopicSeed.code);

          if (!existing) {
            return subtopicRepo.create({
              ...subtopicSeed,
              topicId: topic.id,
            });
          }

          Object.assign(existing, {
            topicId: topic.id,
            titleEn: subtopicSeed.titleEn,
            titleSw: subtopicSeed.titleSw,
            descriptionEn: subtopicSeed.descriptionEn,
            descriptionSw: subtopicSeed.descriptionSw,
            audienceGender: subtopicSeed.audienceGender,
            ageBandRule: subtopicSeed.ageBandRule,
            sortOrder: subtopicSeed.sortOrder,
            isActive: subtopicSeed.isActive,
          });

          return existing;
        });

        const savedSubtopics = await subtopicRepo.save(subtopicsToSave, {
          chunk: 200,
        });

        const subtopicMap = new Map<string, Subtopic>(
          savedSubtopics.map((item) => [item.code, item]),
        );

        console.timeEnd(`${sectionLabel}::subtopics`);

        // 4. Content nodes
        console.time(`${sectionLabel}::contentNodes`);
        this.logger.log(`Importing ${seed.contentNodes.length} content nodes`);

        const nodeKeys = [
          ...new Set(seed.contentNodes.map((item) => item.nodeKey)),
        ];

        const existingNodes = nodeKeys.length
          ? await contentNodeRepo.find({
              where: {
                nodeKey: In(nodeKeys),
              },
            })
          : [];

        const existingNodeMap = new Map<string, ContentNode>();

        for (const node of existingNodes) {
          existingNodeMap.set(
            this.buildNodeCompositeKey(node.nodeKey, node.language),
            node,
          );
        }

        const nodesToSave: ContentNode[] = [];

        for (const nodeSeed of seed.contentNodes) {
          const subtopic = subtopicMap.get(nodeSeed.subtopicCode);

          if (!subtopic) {
            throw new Error(
              `Subtopic with code ${nodeSeed.subtopicCode} was not found during content node import.`,
            );
          }

          const compositeKey = this.buildNodeCompositeKey(
            nodeSeed.nodeKey,
            nodeSeed.language,
          );

          const existing = existingNodeMap.get(compositeKey);

          if (!existing) {
            nodesToSave.push(
              contentNodeRepo.create({
                categoryId: category.id,
                topicId: topic.id,
                subtopicId: subtopic.id,
                nodeKey: nodeSeed.nodeKey,
                nodeType: nodeSeed.nodeType,
                language: nodeSeed.language,
                messageText: nodeSeed.messageText,
                inputType: nodeSeed.inputType,
                mediaAssetKey: nodeSeed.mediaAssetKey,
                isStartNode: nodeSeed.isStartNode,
                isEndNode: nodeSeed.isEndNode,
                sortOrder: nodeSeed.sortOrder,
                isActive: nodeSeed.isActive,
              }),
            );
          } else {
            Object.assign(existing, {
              categoryId: category.id,
              topicId: topic.id,
              subtopicId: subtopic.id,
              nodeType: nodeSeed.nodeType,
              messageText: nodeSeed.messageText,
              inputType: nodeSeed.inputType,
              mediaAssetKey: nodeSeed.mediaAssetKey,
              isStartNode: nodeSeed.isStartNode,
              isEndNode: nodeSeed.isEndNode,
              sortOrder: nodeSeed.sortOrder,
              isActive: nodeSeed.isActive,
            });

            nodesToSave.push(existing);
          }
        }

        const savedNodes = await contentNodeRepo.save(nodesToSave, {
          chunk: 200,
        });

        const nodesByKey = new Map<string, ContentNode[]>();

        for (const node of savedNodes) {
          const group = nodesByKey.get(node.nodeKey) ?? [];
          group.push(node);
          nodesByKey.set(node.nodeKey, group);
        }

        console.timeEnd(`${sectionLabel}::contentNodes`);

        // 5. Options
        console.time(`${sectionLabel}::contentNodeOptions`);
        this.logger.log(
          `Importing ${seed.contentNodeOptions.length} content node options`,
        );

        const allNodeIds = savedNodes.map((node) => node.id);

        const existingOptions = allNodeIds.length
          ? await contentNodeOptionRepo.find({
              where: {
                contentNodeId: In(allNodeIds),
              },
            })
          : [];

        const existingOptionMap = new Map<string, ContentNodeOption>();

        for (const option of existingOptions) {
          existingOptionMap.set(
            this.buildOptionCompositeKey(
              option.contentNodeId,
              option.optionValue,
            ),
            option,
          );
        }

        const optionsToSave: ContentNodeOption[] = [];

        for (const optionSeed of seed.contentNodeOptions) {
          const nodes = nodesByKey.get(optionSeed.nodeKey);

          if (!nodes?.length) {
            throw new Error(
              `No content nodes found for nodeKey ${optionSeed.nodeKey} while importing options.`,
            );
          }

          for (const node of nodes) {
            const compositeKey = this.buildOptionCompositeKey(
              node.id,
              optionSeed.optionValue,
            );

            const existing = existingOptionMap.get(compositeKey);

            if (!existing) {
              optionsToSave.push(
                contentNodeOptionRepo.create({
                  contentNodeId: node.id,
                  labelEn: optionSeed.labelEn,
                  labelSw: optionSeed.labelSw,
                  optionValue: optionSeed.optionValue,
                  nextNodeKey: optionSeed.nextNodeKey,
                  sortOrder: optionSeed.sortOrder,
                  isActive: optionSeed.isActive,
                }),
              );
            } else {
              Object.assign(existing, {
                labelEn: optionSeed.labelEn,
                labelSw: optionSeed.labelSw,
                nextNodeKey: optionSeed.nextNodeKey,
                sortOrder: optionSeed.sortOrder,
                isActive: optionSeed.isActive,
              });

              optionsToSave.push(existing);
            }
          }
        }

        if (optionsToSave.length) {
          await contentNodeOptionRepo.save(optionsToSave, {
            chunk: 300,
          });
        }

        console.timeEnd(`${sectionLabel}::contentNodeOptions`);
      });

      this.logger.log(`Finished import for section: ${sectionLabel}`);
    } finally {
      //   await this.contentService.clearAllContentCache();
      console.timeEnd(`${sectionLabel}::total`);
    }
  }
  private buildNodeCompositeKey(nodeKey: string, language: string): string {
    return `${nodeKey}::${language}`;
  }

  private buildOptionCompositeKey(
    contentNodeId: string,
    optionValue: string,
  ): string {
    return `${contentNodeId}::${optionValue}`;
  }
}
