import 'dotenv/config';
import { UserProfile } from '../modules/profile/entities/user-profile.entity';
import { User } from '../modules/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { ChatSession } from '../modules/session/entities/chat-session.entity';
import { Message } from '../modules/messages/entities/message.entity';
import { TopicCategory } from '../modules/content/entities/topic-category.entity';
import { Topic } from '../modules/content/entities/topic.entity';
import { Subtopic } from '../modules/content/entities/subtopic.entity';
import { ContentNode } from '../modules/content/entities/content-node.entity';
import { ContentNodeOption } from '../modules/content/entities/content-node-option.entity';
import { SubtopicRelatedLink } from '../modules/content/entities/subtopic-related-link.entity';
import { SafeguardingTrigger } from '../modules/safeguarding/entities/safeguarding-trigger.entity';
import { SafeguardingResponse } from '../modules/safeguarding/entities/safeguarding-response.entity';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    User,
    UserProfile,
    ChatSession,
    Message,
    TopicCategory,
    Topic,
    Subtopic,
    ContentNode,
    ContentNodeOption,
    SubtopicRelatedLink,
    SafeguardingTrigger,
    SafeguardingResponse,
  ],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});
