import { Module } from '@nestjs/common';
import { ReferralsService } from './services/referrals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReferralResource } from './entities/referral-resource.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReferralResource])],
  providers: [ReferralsService],
  exports: [ReferralsService],
})
export class ReferralsModule {}
