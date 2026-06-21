import { MessageDirection } from '../../../common/enums/message-direction.enum';
import { MessageType } from '../../../common/enums/message-type.enum';
import { ChatSession } from '../../../modules/session/entities/chat-session.entity';
import { User } from '../../../modules/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'messages' })
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'session_id', type: 'uuid' })
  sessionId: string;

  @ManyToOne(() => ChatSession, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'session_id' })
  session: ChatSession;

  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({
    name: 'direction',
    type: 'enum',
    enum: MessageDirection,
  })
  direction: MessageDirection;

  @Column({
    name: 'message_type',
    type: 'enum',
    enum: MessageType,
  })
  messageType: MessageType;

  @Column({
    name: 'message_text',
    type: 'text',
    nullable: true,
  })
  messageText: string | null;

  @Column({
    name: 'interactive_value',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  interactiveValue: string | null;

  @Column({
    name: 'triggered_safeguarding',
    type: 'boolean',
    default: false,
  })
  triggeredSafeguarding: boolean;

  @Column({
    name: 'raw_payload',
    type: 'jsonb',
    nullable: true,
  })
  rawPayload: Record<string, any> | null;

  @Column({
    name: 'provider',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  provider: string | null;

  @Column({
    name: 'provider_message_id',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  providerMessageId: string | null;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
  })
  createdAt: Date;
}
