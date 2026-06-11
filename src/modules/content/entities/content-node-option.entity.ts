import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ContentNode } from './content-node.entity';

@Entity({ name: 'content_node_options' })
@Index('IDX_CONTENT_NODE_OPTIONS_CONTENT_NODE_ID', ['contentNodeId'])
export class ContentNodeOption {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'content_node_id', type: 'uuid' })
  contentNodeId: string;

  @ManyToOne(() => ContentNode, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'content_node_id' })
  contentNode: ContentNode;

  @Column({ name: 'label_en', type: 'varchar', length: 255 })
  labelEn: string;

  @Column({ name: 'label_sw', type: 'varchar', length: 255 })
  labelSw: string;

  @Column({ name: 'option_value', type: 'varchar', length: 150 })
  optionValue: string;

  @Column({ name: 'next_node_key', type: 'varchar', length: 150 })
  nextNodeKey: string;

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
}
