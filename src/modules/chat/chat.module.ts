import { Module } from '@nestjs/common';
import { ContentModule } from '../content/content.module';
import { ProfileModule } from '../profile/profile.module';
import { SessionModule } from '../session/session.module';
import { UsersModule } from '../users/users.module';
import { ChatOrchestratorService } from './services/chat-orchestrator.service';
import { SafeguardingModule } from '../safeguarding/safeguarding.module';
import { ReferralsModule } from '../referrals/referrals.module';
import { MessagesModule } from '../messages/messages.module';

@Module({
  imports: [
    UsersModule,
    ProfileModule,
    SessionModule,
    ContentModule,
    ChatModule,
    MessagesModule,
    SafeguardingModule,
    ReferralsModule,
  ],
  providers: [ChatOrchestratorService],
  exports: [ChatOrchestratorService],
})
export class ChatModule {}
