import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TopicCategory } from './topic-category.entity';
import { AgeBand } from '../../../common/enums/age-band.enum';
import { Gender } from '../../../common/enums/gender.enum';
import { Subtopic } from './subtopic.entity';

@Entity({ name: 'topics' })
export class Topic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'category_id', type: 'uuid' })
  categoryId: string;

  @ManyToOne(() => TopicCategory, (category) => category.topics, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category: TopicCategory;

  @Column({ name: 'code', type: 'varchar', length: 100, unique: true })
  code: string;

  @Column({ name: 'title_en', type: 'varchar', length: 255 })
  titleEn: string;

  @Column({ name: 'title_sw', type: 'varchar', length: 255 })
  titleSw: string;

  @Column({
    name: 'description_en',
    type: 'text',
    nullable: true,
  })
  descriptionEn: string | null;

  @Column({
    name: 'description_sw',
    type: 'text',
    nullable: true,
  })
  descriptionSw: string | null;

  @Column({
    name: 'audience_gender',
    type: 'enum',
    enum: Gender,
    nullable: true,
  })
  audienceGender: Gender | null;

  @Column({
    name: 'age_band_rule',
    type: 'enum',
    enum: AgeBand,
    nullable: true,
  })
  ageBandRule: AgeBand | null;

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

  @OneToMany(() => Subtopic, (subtopic) => subtopic.topic)
  subtopics?: Subtopic[];
}
