import { MigrationInterface, QueryRunner } from "typeorm";

export class ContentNodeOption1781267754984 implements MigrationInterface {
    name = 'ContentNodeOption1781267754984'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."referral_resources_resource_type_enum" AS ENUM('clinic', 'hotline', 'social_welfare', 'gbv_support', 'mental_health', 'general_support')`);
        await queryRunner.query(`CREATE TABLE "referral_resources" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "resource_type" "public"."referral_resources_resource_type_enum" NOT NULL, "name" character varying(255) NOT NULL, "description_en" text, "description_sw" text, "contact_details" text, "location_name" character varying(255), "region" character varying(150), "district" character varying(150), "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_c02173595e0ca7b086b26ce4a77" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "referral_resources"`);
        await queryRunner.query(`DROP TYPE "public"."referral_resources_resource_type_enum"`);
    }

}
