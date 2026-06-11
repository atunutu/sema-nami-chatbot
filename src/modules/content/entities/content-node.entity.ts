import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Subtopic } from './subtopic.entity';
import { Topic } from './topic.entity';
import { TopicCategory } from './topic-category.entity';
import { InputType } from '../../../common/enums/input-type.enum';
import { Language } from '../../../common/enums/language.enum';
import { NodeType } from '../../../common/enums/node-type.enum';
import { ContentNodeOption } from './content-node-option.entity';

@Entity({ name: 'content_nodes' })
@Index('UQ_CONTENT_NODES_NODE_KEY_LANGUAGE', ['nodeKey', 'language'], {
  unique: true,
})
export class ContentNode {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'category_id', type: 'uuid', nullable: true })
  categoryId: string | null;

  @ManyToOne(() => TopicCategory, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'category_id' })
  category: TopicCategory | null;

  @Column({ name: 'topic_id', type: 'uuid', nullable: true })
  topicId: string | null;

  @ManyToOne(() => Topic, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'topic_id' })
  topic: Topic | null;

  @Column({ name: 'subtopic_id', type: 'uuid', nullable: true })
  subtopicId: string | null;

  @ManyToOne(() => Subtopic, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'subtopic_id' })
  subtopic: Subtopic | null;

  @Column({ name: 'node_key', type: 'varchar', length: 150 })
  nodeKey: string;

  @Column({
    name: 'node_type',
    type: 'enum',
    enum: NodeType,
  })
  nodeType: NodeType;

  @Column({
    name: 'language',
    type: 'enum',
    enum: Language,
  })
  language: Language;

  @Column({
    name: 'message_text',
    type: 'text',
  })
  messageText: string;

  @Column({
    name: 'input_type',
    type: 'enum',
    enum: InputType,
    default: InputType.NONE,
  })
  inputType: InputType;

  @Column({
    name: 'media_asset_key',
    type: 'varchar',
    length: 150,
    nullable: true,
  })
  mediaAssetKey: string | null;

  @Column({
    name: 'is_start_node',
    type: 'boolean',
    default: false,
  })
  isStartNode: boolean;

  @Column({
    name: 'is_end_node',
    type: 'boolean',
    default: false,
  })
  isEndNode: boolean;

  @Column({
    name: 'sort_order',
    type: 'integer',
    default: 0,
  })
  sortOrder: number;

  @Column({
    name: 'is_active',
    type: 'boolean',
    default: true,
  })
  isActive: boolean;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
  })
  updatedAt: Date;

  @OneToMany(() => ContentNodeOption, (option) => option.contentNode)
  options?: ContentNodeOption[];
}
