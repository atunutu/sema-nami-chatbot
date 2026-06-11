import { Module } from '@nestjs/common';
import { SessionService } from './services/session.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatSession } from './entities/chat-session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatSession])],
  providers: [SessionService],
  exports: [SessionService],
})
export class SessionModule {}
