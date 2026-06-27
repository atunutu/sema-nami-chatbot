import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { WHATSAPP_INBOUND_QUEUE } from './constants/whatsapp-queue.constants';
import { WhatsAppController } from './controllers/whatsapp.controller';
import { WhatsAppService } from './services/whatsapp.service';
import { WhatsAppFailureLogService } from './services/whastapp-failure-log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WhatsAppFailureLog } from './entities/whatsapp-failure-log.entity';

@Module({
  imports: [
    HttpModule,
    BullModule.registerQueue({
      name: WHATSAPP_INBOUND_QUEUE,
    }),
    TypeOrmModule.forFeature([WhatsAppFailureLog]),
  ],
  controllers: [WhatsAppController],
  providers: [WhatsAppService, WhatsAppFailureLogService],
  exports: [WhatsAppService],
})
export class WhatsAppWebModule {}
