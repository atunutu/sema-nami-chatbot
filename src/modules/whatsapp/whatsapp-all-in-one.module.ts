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
  ],
  controllers: [WhatsAppController],
  providers: [WhatsAppService, WhatsAppInboundProcessor],
  exports: [WhatsAppService],
})
export class WhatsAppAllInOneModule {}
