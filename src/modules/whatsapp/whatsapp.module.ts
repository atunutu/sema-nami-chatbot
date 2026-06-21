import { Module } from '@nestjs/common';
import { WhatsAppController } from './controllers/whatsapp.controller';
import { WhatsAppService } from './services/whatsapp.service';
import { ChatModule } from '../chat/chat.module';
import { HttpModule } from '@nestjs/axios';
import { UsersModule } from '../users/users.module';
import { ProfileModule } from '../profile/profile.module';
import { BullModule } from '@nestjs/bull';
import { WHATSAPP_INBOUND_QUEUE } from './constants/whatsapp-queue.constants';
import { SessionModule } from '../session/session.module';
import { MessagesModule } from '../messages/messages.module';
import { WhatsAppInboundProcessor } from './processors/whatsapp-inbound.processor';

@Module({
  imports: [
    ChatModule,
    HttpModule,
    UsersModule,
    ProfileModule,
    SessionModule,
    MessagesModule,
    BullModule.registerQueue({
      name: WHATSAPP_INBOUND_QUEUE,
    }),
  ],
  controllers: [WhatsAppController],
  providers: [WhatsAppService, WhatsAppInboundProcessor],
  exports: [WhatsAppService],
})
export class WhatsAppModule {}
