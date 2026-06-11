import { AgeBand } from '../../../common/enums/age-band.enum';
import { Gender } from '../../../common/enums/gender.enum';
import { Language } from '../../..//common/enums/language.enum';
import { User } from '../../users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user_profiles' })
export class UserProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', type: 'uuid', unique: true })
  userId: string;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({
    name: 'preferred_language',
    type: 'enum',
    enum: Language,
    nullable: true,
  })
  preferredLanguage: Language | null;

  @Column({
    name: 'age_band',
    type: 'enum',
    enum: AgeBand,
    nullable: true,
  })
  ageBand: AgeBand | null;

  @Column({
    name: 'gender',
    type: 'enum',
    enum: Gender,
    nullable: true,
  })
  gender: Gender | null;

  @Column({
    name: 'completed_onboarding',
    type: 'boolean',
    default: false,
  })
  completedOnboarding: boolean;

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
