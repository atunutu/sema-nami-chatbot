import { Language } from '../../../common/enums/language.enum';
import { TriggerCategory } from '../../../common/enums/trigger-category.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'safeguarding_responses' })
@Index(
  'UQ_SAFEGUARDING_RESPONSES_CATEGORY_LANGUAGE',
  ['triggerCategory', 'language'],
  {
    unique: true,
  },
)
export class SafeguardingResponse {
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
    name: 'response_text',
    type: 'text',
  })
  responseText: string;

  @Column({
    name: 'show_referrals',
    type: 'boolean',
    default: true,
  })
  showReferrals: boolean;

  @Column({
    name: 'allow_return_to_menu',
    type: 'boolean',
    default: true,
  })
  allowReturnToMenu: boolean;

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
