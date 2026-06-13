import { Module } from '@nestjs/common';
import { ContentModule } from '../content/content.module';
import { ProfileModule } from '../profile/profile.module';
import { SessionModule } from '../session/session.module';
import { UsersModule } from '../users/users.module';
import { ChatOrchestratorService } from './services/chat-orchestrator.service';

@Module({
  imports: [UsersModule, ProfileModule, SessionModule, ContentModule],
  providers: [ChatOrchestratorService],
  exports: [ChatOrchestratorService],
})
export class ChatModule {}
