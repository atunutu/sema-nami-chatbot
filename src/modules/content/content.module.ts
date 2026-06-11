import { Module } from '@nestjs/common';
import { ContentService } from './services/content.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicCategory } from './entities/topic-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TopicCategory])],
  providers: [ContentService],
  exports: [ContentService],
})
export class ContentModule {}
