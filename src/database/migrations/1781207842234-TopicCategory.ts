import { MigrationInterface, QueryRunner } from "typeorm";

export class TopicCategory1781207842234 implements MigrationInterface {
    name = 'TopicCategory1781207842234'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."subtopics_audience_gender_enum" AS ENUM('female', 'male', 'prefer_not_to_say')`);
        await queryRunner.query(`CREATE TYPE "public"."subtopics_age_band_rule_enum" AS ENUM('15_17', '18_20', '21_24')`);
        await queryRunner.query(`CREATE TABLE "subtopics" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "topic_id" uuid NOT NULL, "code" character varying(100) NOT NULL, "title_en" character varying(255) NOT NULL, "title_sw" character varying(255) NOT NULL, "description_en" text, "description_sw" text, "audience_gender" "public"."subtopics_audience_gender_enum", "age_band_rule" "public"."subtopics_age_band_rule_enum", "sort_order" integer NOT NULL DEFAULT '0', "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_48f6883f7799e8260ad1a3ee000" UNIQUE ("code"), CONSTRAINT "PK_3fb7d7239d68be9bced2db5567a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "subtopics" ADD CONSTRAINT "FK_14e43cb8c5dbee90087dd8f91ca" FOREIGN KEY ("topic_id") REFERENCES "topics"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subtopics" DROP CONSTRAINT "FK_14e43cb8c5dbee90087dd8f91ca"`);
        await queryRunner.query(`DROP TABLE "subtopics"`);
        await queryRunner.query(`DROP TYPE "public"."subtopics_age_band_rule_enum"`);
        await queryRunner.query(`DROP TYPE "public"."subtopics_audience_gender_enum"`);
    }

}
