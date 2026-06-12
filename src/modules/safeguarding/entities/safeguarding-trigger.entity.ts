import { Language } from '../../../common/enums/language.enum';
import { TriggerCategory } from '../../../common/enums/trigger-category.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'safeguarding_triggers' })
@Index('IDX_SAFEGUARDING_TRIGGERS_CATEGORY', ['triggerCategory'])
@Index('IDX_SAFEGUARDING_TRIGGERS_LANGUAGE', ['language'])
export class SafeguardingTrigger {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'trigger_category',
    type: 'enum',
    enum: TriggerCategory,
  })
  triggerCategory: TriggerCategory;

  @Column({
    name: 'language',
    type: 'enum',
    enum: Language,
  })
  language: Language;

  @Column({
    name: 'phrase',
    type: 'varchar',
    length: 255,
  })
  phrase: string;

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
}
