import { Message } from '../../../modules/messages/entities/message.entity';
import { ChatState } from '../../../common/enums/chat-state.enum';
import { SessionStatus } from '../../../common/enums/session-status.enum';
import { User } from '../../../modules/users/entities/user.entity';
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
@Entity({ name: 'chat_sessions' })
export class ChatSession {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({
    name: 'status',
    type: 'enum',
    enum: SessionStatus,
    default: SessionStatus.ACTIVE,
  })
  status: SessionStatus;

  @Column({
    name: 'current_state',
    type: 'enum',
    enum: ChatState,
    default: ChatState.WELCOME,
  })
  currentState: ChatState;

  @Column({
    name: 'current_category_code',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  currentCategoryCode: string | null;

  @Column({
    name: 'current_topic_code',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  currentTopicCode: string | null;

  @Column({
    name: 'current_subtopic_code',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  currentSubtopicCode: string | null;

  @Column({
    name: 'current_node_key',
    type: 'varchar',
    length: 150,
    nullable: true,
  })
  currentNodeKey: string | null;

  @Column({
    name: 'previous_node_key',
    type: 'varchar',
    length: 150,
    nullable: true,
  })
  previousNodeKey: string | null;

  @Column({
    name: 'started_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  startedAt: Date;

  @Column({
    name: 'ended_at',
    type: 'timestamptz',
    nullable: true,
  })
  endedAt: Date | null;

  @Column({
    name: 'last_message_at',
    type: 'timestamptz',
    nullable: true,
  })
  lastMessageAt: Date | null;

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

  @OneToMany(() => Message, (message) => message.session)
  messages?: Message[];
}
