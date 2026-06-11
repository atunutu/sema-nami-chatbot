import { Module } from '@nestjs/common';
import { ContentService } from './services/content.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicCategory } from './entities/topic-category.entity';
import { Topic } from './entities/topic.entity';
import { Subtopic } from './entities/subtopic.entity';
import { ContentNode } from './entities/content-node.entity';
import { ContentNodeOption } from './entities/content-node-option.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TopicCategory,
      Topic,
      Subtopic,
      ContentNode,
      ContentNodeOption,
    ]),
  ],
  providers: [ContentService],
  exports: [ContentService],
})
export class ContentModule {}
