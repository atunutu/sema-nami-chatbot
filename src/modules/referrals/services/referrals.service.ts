import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReferralResource } from '../entities/referral-resource.entity';
import { ResourceType } from 'src/common/enums/resource-type.enum';

@Injectable()
export class ReferralsService {
  constructor(
    @InjectRepository(ReferralResource)
    private readonly referralResourcesRepository: Repository<ReferralResource>,
  ) {}

  async createReferralResource(data: {
    resourceType: ResourceType;
    name: string;
    descriptionEn?: string | null;
    descriptionSw?: string | null;
    contactDetails?: string | null;
    locationName?: string | null;
    region?: string | null;
    district?: string | null;
    isActive?: boolean;
  }): Promise<ReferralResource> {
    const resource = this.referralResourcesRepository.create({
      resourceType: data.resourceType,
      name: data.name,
      descriptionEn: data.descriptionEn ?? null,
      descriptionSw: data.descriptionSw ?? null,
      contactDetails: data.contactDetails ?? null,
      locationName: data.locationName ?? null,
      region: data.region ?? null,
      district: data.district ?? null,
      isActive: data.isActive ?? true,
    });

    return this.referralResourcesRepository.save(resource);
  }

  async getActiveReferralResources(): Promise<ReferralResource[]> {
    return this.referralResourcesRepository.find({
      where: { isActive: true },
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async getActiveReferralResourcesByType(
    resourceType: ResourceType,
  ): Promise<ReferralResource[]> {
    return this.referralResourcesRepository.find({
      where: {
        resourceType,
        isActive: true,
      },
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async findReferralResourceByName(
    name: string,
  ): Promise<ReferralResource | null> {
    return this.referralResourcesRepository.findOne({
      where: { name },
    });
  }
}
