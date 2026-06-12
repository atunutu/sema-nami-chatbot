import { Module } from '@nestjs/common';
import { SafeguardingService } from './services/safeguarding.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SafeguardingTrigger } from './entities/safeguarding-trigger.entity';
import { SafeguardingResponse } from './entities/safeguarding-response.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SafeguardingTrigger, SafeguardingResponse]),
  ],
  providers: [SafeguardingService],
  exports: [SafeguardingService],
})
export class SafeguardingModule {}
