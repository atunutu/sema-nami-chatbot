import 'dotenv/config';
import { UserProfile } from '../modules/profile/entities/user-profile.entity';
import { User } from '../modules/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { ChatSession } from '../modules/session/entities/chat-session.entity';
import { Message } from '../modules/messages/entities/message.entity';
import { TopicCategory } from '../modules/content/entities/topic-category.entity';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, UserProfile, ChatSession, Message, TopicCategory],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});
