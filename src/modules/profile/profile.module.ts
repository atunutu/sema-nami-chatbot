import { Module } from '@nestjs/common';
import { ProfileService } from './services/profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfile } from './entities/user-profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserProfile])],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
