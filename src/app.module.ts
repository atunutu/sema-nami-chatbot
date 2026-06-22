import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './modules/profile/profile.module';
import { SessionModule } from './modules/session/session.module';
import { MessagesModule } from './modules/messages/messages.module';
import { ContentModule } from './modules/content/content.module';
import { SafeguardingModule } from './modules/safeguarding/safeguarding.module';
import { ReferralsModule } from './modules/referrals/referrals.module';
import { ChatModule } from './modules/chat/chat.module';
import { WhatsAppWebModule } from './modules/whatsapp/whatsapp-web.module';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { CacheModule } from '@nestjs/cache-manager';
import KeyvRedis from '@keyv/redis';
import { WhatsAppWorkerModule } from './modules/whatsapp/whatsapp-worker.module';
import { HealthModule } from './health/health.module';
import { WhatsAppAllInOneModule } from './modules/whatsapp/whatsapp-all-in-one.module';

const appMode = process.env.APP_MODE ?? 'web';

const databaseUrl = process.env.DATABASE_URL?.trim();
const redisHost = process.env.REDIS_HOST?.trim() || '127.0.0.1';
const redisPort = Number(process.env.REDIS_PORT || 6379);
const redisPassword = process.env.REDIS_PASSWORD?.trim();
const redisUrl =
  process.env.REDIS_URL?.trim() ||
  (redisPassword
    ? `redis://:${redisPassword}@${redisHost}:${redisPort}`
    : `redis://${redisHost}:${redisPort}`);

const parsedRedisUrl = redisUrl ? new URL(redisUrl) : null;
console.log({
  APP_MODE: process.env.APP_MODE,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
  REDIS_URL: process.env.REDIS_URL,
  REDIS_PASSWORD_SET: !!process.env.REDIS_PASSWORD,
});
@Module({
  imports: [
    TypeOrmModule.forRoot(
      databaseUrl
        ? {
            type: 'postgres',
            url: databaseUrl,
            synchronize: false,
            autoLoadEntities: true,
            ssl:
              process.env.DB_SSL === 'true'
                ? { rejectUnauthorized: false }
                : false,
          }
        : {
            type: 'postgres',
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
            username: process.env.DB_USERNAME || 'postgres',
            password: process.env.DB_PASSWORD || 'password',
            database: process.env.DB_NAME || 'sema-nami-chatbot',
            synchronize: false,
            autoLoadEntities: true,
            ssl:
              process.env.DB_SSL === 'true'
                ? { rejectUnauthorized: false }
                : false,
          },
    ),
    BullModule.forRoot(
      parsedRedisUrl
        ? {
            redis: {
              host: parsedRedisUrl.hostname,
              port: Number(parsedRedisUrl.port || 6379),
              username: parsedRedisUrl.username || undefined,
              password: parsedRedisUrl.password || undefined,
              tls: parsedRedisUrl.protocol === 'rediss:' ? {} : undefined,
              maxRetriesPerRequest: null,
              enableReadyCheck: false,
            },
          }
        : {
            redis: {
              host: process.env.REDIS_HOST?.trim() || '127.0.0.1',
              port: Number(process.env.REDIS_PORT || 6379),
              password: process.env.REDIS_PASSWORD?.trim() || undefined,
              maxRetriesPerRequest: null,
              enableReadyCheck: false,
            },
          },
    ),
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: () => ({
        stores: [new KeyvRedis(redisUrl)],
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
    WhatsAppWebModule,
    HealthModule,
    ...(appMode === 'worker'
      ? [WhatsAppWorkerModule]
      : appMode === 'all'
        ? [WhatsAppAllInOneModule]
        : [WhatsAppWebModule]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
