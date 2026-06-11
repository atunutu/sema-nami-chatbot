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
      entities: [User, UserProfile, ChatSession, Message, TopicCategory],
    }),
    UsersModule,
    ProfileModule,
    SessionModule,
    MessagesModule,
    ContentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
