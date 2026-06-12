import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Subtopic } from './subtopic.entity';

@Entity({ name: 'subtopic_related_links' })
@Index('IDX_SUBTOPIC_RELATED_LINKS_FROM_SUBTOPIC_ID', ['fromSubtopicId'])
@Index('IDX_SUBTOPIC_RELATED_LINKS_TO_SUBTOPIC_ID', ['toSubtopicId'])
export class SubtopicRelatedLink {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'from_subtopic_id', type: 'uuid' })
  fromSubtopicId: string;

  @ManyToOne(() => Subtopic, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'from_subtopic_id' })
  fromSubtopic: Subtopic;

  @Column({ name: 'to_subtopic_id', type: 'uuid' })
  toSubtopicId: string;

  @ManyToOne(() => Subtopic, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'to_subtopic_id' })
  toSubtopic: Subtopic;

  @Column({
    name: 'sort_order',
    type: 'integer',
    default: 0,
  })
  sortOrder: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
  })
  createdAt: Date;
}
