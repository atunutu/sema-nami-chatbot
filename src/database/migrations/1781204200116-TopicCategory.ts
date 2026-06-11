import { MigrationInterface, QueryRunner } from "typeorm";

export class TopicCategory1781204200116 implements MigrationInterface {
    name = 'TopicCategory1781204200116'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."topic_categories_audience_gender_enum" AS ENUM('female', 'male', 'prefer_not_to_say')`);
        await queryRunner.query(`CREATE TYPE "public"."topic_categories_age_band_rule_enum" AS ENUM('15_17', '18_20', '21_24')`);
        await queryRunner.query(`CREATE TABLE "topic_categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "code" character varying(100) NOT NULL, "title_en" character varying(255) NOT NULL, "title_sw" character varying(255) NOT NULL, "description_en" text, "description_sw" text, "audience_gender" "public"."topic_categories_audience_gender_enum", "age_band_rule" "public"."topic_categories_age_band_rule_enum", "sort_order" integer NOT NULL DEFAULT '0', "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_d74ef79c9c5d99bc56934a8ede4" UNIQUE ("code"), CONSTRAINT "PK_c850b752c56087513419259b284" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "topic_categories"`);
        await queryRunner.query(`DROP TYPE "public"."topic_categories_age_band_rule_enum"`);
        await queryRunner.query(`DROP TYPE "public"."topic_categories_audience_gender_enum"`);
    }

}
