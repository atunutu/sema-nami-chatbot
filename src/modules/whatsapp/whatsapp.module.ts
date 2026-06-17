import { Module } from '@nestjs/common';
import { WhatsAppController } from './controllers/whatsapp.controller';
import { WhatsAppService } from './services/whatsapp.service';
import { ChatModule } from '../chat/chat.module';
import { HttpModule } from '@nestjs/axios';
import { UsersModule } from '../users/users.module';
import { ProfileModule } from '../profile/profile.module';

@Module({
  imports: [ChatModule, HttpModule, UsersModule, ProfileModule],
  controllers: [WhatsAppController],
  providers: [WhatsAppService],
  exports: [WhatsAppService],
})
export class WhatsAppModule {}
