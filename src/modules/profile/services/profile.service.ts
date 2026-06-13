import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AgeBand } from 'src/common/enums/age-band.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { Language } from 'src/common/enums/language.enum';
import { Repository } from 'typeorm';
import { UserProfile } from '../entities/user-profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(UserProfile)
    private readonly userProfilesRepository: Repository<UserProfile>,
  ) {}

  async findByUserId(userId: string): Promise<UserProfile | null> {
    return this.userProfilesRepository.findOne({
      where: { userId },
    });
  }

  async findOrCreateByUserId(userId: string): Promise<UserProfile> {
    const existingProfile = await this.findByUserId(userId);

    if (existingProfile) {
      return existingProfile;
    }

    const profile = this.userProfilesRepository.create({
      userId,
      preferredLanguage: null,
      ageBand: null,
      gender: null,
      completedOnboarding: false,
    });

    return this.userProfilesRepository.save(profile);
  }

  async updateLanguage(
    userId: string,
    preferredLanguage: Language,
  ): Promise<UserProfile> {
    const profile = await this.findOrCreateByUserId(userId);

    await this.userProfilesRepository.update(profile.id, {
      preferredLanguage,
    });

    return this.getProfileOrFail(profile.id);
  }

  async updateAgeBand(userId: string, ageBand: AgeBand): Promise<UserProfile> {
    const profile = await this.findOrCreateByUserId(userId);

    await this.userProfilesRepository.update(profile.id, {
      ageBand,
    });

    return this.getProfileOrFail(profile.id);
  }

  async updateGender(userId: string, gender: Gender): Promise<UserProfile> {
    const profile = await this.findOrCreateByUserId(userId);

    await this.userProfilesRepository.update(profile.id, {
      gender,
    });

    return this.getProfileOrFail(profile.id);
  }

  async completeOnboarding(userId: string): Promise<UserProfile> {
    const profile = await this.findOrCreateByUserId(userId);

    await this.userProfilesRepository.update(profile.id, {
      completedOnboarding: true,
    });

    return this.getProfileOrFail(profile.id);
  }

  async resetOnboarding(userId: string): Promise<UserProfile> {
    const profile = await this.findOrCreateByUserId(userId);

    await this.userProfilesRepository.update(profile.id, {
      completedOnboarding: false,
    });

    return this.getProfileOrFail(profile.id);
  }

  async updateProfile(
    userId: string,
    data: {
      preferredLanguage?: Language;
      ageBand?: AgeBand;
      gender?: Gender;
      completedOnboarding?: boolean;
    },
  ): Promise<UserProfile> {
    const profile = await this.findOrCreateByUserId(userId);

    await this.userProfilesRepository.update(profile.id, data);

    return this.getProfileOrFail(profile.id);
  }

  private async getProfileOrFail(profileId: string): Promise<UserProfile> {
    const profile = await this.userProfilesRepository.findOne({
      where: { id: profileId },
    });

    if (!profile) {
      throw new Error(
        `UserProfile with ID ${profileId} was not found after update.`,
      );
    }

    return profile;
  }
  async isOnboardingComplete(userId: string): Promise<boolean> {
    const profile = await this.findByUserId(userId);
    return !!profile?.completedOnboarding;
  }
}
