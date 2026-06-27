import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ChatModule } from '../chat/chat.module';
import { MessagesModule } from '../messages/messages.module';
import { ProfileModule } from '../profile/profile.module';
import { SessionModule } from '../session/session.module';
import { UsersModule } from '../users/users.module';
import { WHATSAPP_INBOUND_QUEUE } from './constants/whatsapp-queue.constants';
import { WhatsAppController } from './controllers/whatsapp.controller';
import { WhatsAppInboundProcessor } from './processors/whatsapp-inbound.processor';
import { WhatsAppService } from './services/whatsapp.service';
import { WhatsAppFailureLogService } from './services/whastapp-failure-log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WhatsAppFailureLog } from './entities/whatsapp-failure-log.entity';

@Module({
  imports: [
    HttpModule,
    UsersModule,
    ProfileModule,
    SessionModule,
    MessagesModule,
    ChatModule,
    BullModule.registerQueue({
      name: WHATSAPP_INBOUND_QUEUE,
    }),
    TypeOrmModule.forFeature([WhatsAppFailureLog]),
  ],
  controllers: [WhatsAppController],
  providers: [
    WhatsAppService,
    WhatsAppInboundProcessor,
    WhatsAppFailureLogService,
  ],
  exports: [WhatsAppService],
})
export class WhatsAppAllInOneModule {}
