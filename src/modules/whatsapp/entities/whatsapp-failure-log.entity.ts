import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WhatsAppFailureStage } from '../enums/whatsapp-failure-stage.enum';

@Entity({ name: 'whatsapp_failure_logs' })
export class WhatsAppFailureLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'session_id', type: 'uuid', nullable: true })
  sessionId: string | null;

  @Column({ name: 'user_id', type: 'uuid', nullable: true })
  userId: string | null;

  @Column({ name: 'job_id', type: 'varchar', length: 255, nullable: true })
  jobId: string | null;

  @Column({
    name: 'failure_stage',
    type: 'enum',
    enum: WhatsAppFailureStage,
  })
  failureStage: WhatsAppFailureStage;

  @Column({ name: 'phone_number', type: 'varchar', length: 30, nullable: true })
  phoneNumber: string | null;

  @Column({
    name: 'provider_message_id',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  providerMessageId: string | null;

  @Column({ name: 'error_message', type: 'text' })
  errorMessage: string;

  @Column({ name: 'error_stack', type: 'text', nullable: true })
  errorStack: string | null;

  @Column({ name: 'payload', type: 'jsonb', nullable: true })
  payload: Record<string, any> | null;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
  })
  createdAt: Date;
}
