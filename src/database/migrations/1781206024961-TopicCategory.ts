import { MigrationInterface, QueryRunner } from "typeorm";

export class TopicCategory1781206024961 implements MigrationInterface {
    name = 'TopicCategory1781206024961'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."topics_audience_gender_enum" AS ENUM('female', 'male', 'prefer_not_to_say')`);
        await queryRunner.query(`CREATE TYPE "public"."topics_age_band_rule_enum" AS ENUM('15_17', '18_20', '21_24')`);
        await queryRunner.query(`CREATE TABLE "topics" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "category_id" uuid NOT NULL, "code" character varying(100) NOT NULL, "title_en" character varying(255) NOT NULL, "title_sw" character varying(255) NOT NULL, "description_en" text, "description_sw" text, "audience_gender" "public"."topics_audience_gender_enum", "age_band_rule" "public"."topics_age_band_rule_enum", "sort_order" integer NOT NULL DEFAULT '0', "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_928bc2d3805e0e6a7519f57ba00" UNIQUE ("code"), CONSTRAINT "PK_e4aa99a3fa60ec3a37d1fc4e853" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "topics" ADD CONSTRAINT "FK_55f03ccaeee22a418c4b00b83a2" FOREIGN KEY ("category_id") REFERENCES "topic_categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "topics" DROP CONSTRAINT "FK_55f03ccaeee22a418c4b00b83a2"`);
        await queryRunner.query(`DROP TABLE "topics"`);
        await queryRunner.query(`DROP TYPE "public"."topics_age_band_rule_enum"`);
        await queryRunner.query(`DROP TYPE "public"."topics_audience_gender_enum"`);
    }

}
