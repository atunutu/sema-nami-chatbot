import { ResourceType } from '../../../common/enums/resource-type.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'referral_resources' })
export class ReferralResource {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'resource_type',
    type: 'enum',
    enum: ResourceType,
  })
  resourceType: ResourceType;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 255,
  })
  name: string;

  @Column({
    name: 'description_en',
    type: 'text',
    nullable: true,
  })
  descriptionEn: string | null;

  @Column({
    name: 'description_sw',
    type: 'text',
    nullable: true,
  })
  descriptionSw: string | null;

  @Column({
    name: 'contact_details',
    type: 'text',
    nullable: true,
  })
  contactDetails: string | null;

  @Column({
    name: 'location_name',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  locationName: string | null;

  @Column({
    name: 'region',
    type: 'varchar',
    length: 150,
    nullable: true,
  })
  region: string | null;

  @Column({
    name: 'district',
    type: 'varchar',
    length: 150,
    nullable: true,
  })
  district: string | null;

  @Column({
    name: 'is_active',
    type: 'boolean',
    default: true,
  })
  isActive: boolean;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
  })
  updatedAt: Date;
}
