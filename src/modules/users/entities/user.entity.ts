import { UserProfile } from 'src/modules/profile/entities/user-profile.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index('IDX_USERS_WHATSAPP_PHONE_NUMBER', { unique: true })
  @Column({ name: 'whatsapp_phone_number', type: 'varchar', length: 30 })
  whatsappPhoneNumber: string;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @Column({
    name: 'last_interaction_at',
    type: 'timestamptz',
    nullable: true,
  })
  lastInteractionAt: Date | null;

  @OneToOne(() => UserProfile, (profile) => profile.user)
  profile?: UserProfile;

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
