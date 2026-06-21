import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './modules/profile/profile.module';
import { User } from './modules/users/entities/user.entity';
import { UserProfile } from './modules/profile/entities/user-profile.entity';
import { SessionModule } from './modules/session/session.module';
import { ChatSession } from './modules/session/entities/chat-session.entity';
import { MessagesModule } from './modules/messages/messages.module';
import { Message } from './modules/messages/entities/message.entity';
import { ContentModule } from './modules/content/content.module';
import { TopicCategory } from './modules/content/entities/topic-category.entity';
import { Topic } from './modules/content/entities/topic.entity';
import { Subtopic } from './modules/content/entities/subtopic.entity';
import { ContentNode } from './modules/content/entities/content-node.entity';
import { ContentNodeOption } from './modules/content/entities/content-node-option.entity';
import { SubtopicRelatedLink } from './modules/content/entities/subtopic-related-link.entity';
import { SafeguardingModule } from './modules/safeguarding/safeguarding.module';
import { SafeguardingTrigger } from './modules/safeguarding/entities/safeguarding-trigger.entity';
import { ReferralsModule } from './modules/referrals/referrals.module';
import { ReferralResource } from './modules/referrals/entities/referral-resource.entity';
import { ChatModule } from './modules/chat/chat.module';
import { WhatsAppModule } from './modules/whatsapp/whatsapp.module';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'sema-nami-chatbot',
      synchronize: false,
      autoLoadEntities: true,
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
        ReferralResource,
      ],
    }),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST ?? '127.0.0.1',
        port: Number(process.env.REDIS_PORT ?? 6379),
        password: process.env.REDIS_PASSWORD || undefined,
        maxRetriesPerRequest: null,
        enableReadyCheck: false,
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore({
          socket: {
            host: process.env.REDIS_HOST ?? '127.0.0.1',
            port: Number(process.env.REDIS_PORT ?? 6379),
          },
          password: process.env.REDIS_PASSWORD || undefined,
          ttl: 60,
        }),
      }),
    }),
    UsersModule,
    ProfileModule,
    SessionModule,
    MessagesModule,
    ContentModule,
    SafeguardingModule,
    ReferralsModule,
    ChatModule,
    WhatsAppModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
