import { MigrationInterface, QueryRunner } from "typeorm";

export class ContentNodeOption1781262542663 implements MigrationInterface {
    name = 'ContentNodeOption1781262542663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."safeguarding_responses_trigger_category_enum" AS ENUM('abuse', 'sexual_exploitation', 'self_harm', 'suicidal_thoughts', 'urgent_medical', 'violence')`);
        await queryRunner.query(`CREATE TYPE "public"."safeguarding_responses_language_enum" AS ENUM('en', 'sw')`);
        await queryRunner.query(`CREATE TABLE "safeguarding_responses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "trigger_category" "public"."safeguarding_responses_trigger_category_enum" NOT NULL, "language" "public"."safeguarding_responses_language_enum" NOT NULL, "response_text" text NOT NULL, "show_referrals" boolean NOT NULL DEFAULT true, "allow_return_to_menu" boolean NOT NULL DEFAULT true, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_bada6444ead57affc7b64dc3ac1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "UQ_SAFEGUARDING_RESPONSES_CATEGORY_LANGUAGE" ON "safeguarding_responses" ("trigger_category", "language") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."UQ_SAFEGUARDING_RESPONSES_CATEGORY_LANGUAGE"`);
        await queryRunner.query(`DROP TABLE "safeguarding_responses"`);
        await queryRunner.query(`DROP TYPE "public"."safeguarding_responses_language_enum"`);
        await queryRunner.query(`DROP TYPE "public"."safeguarding_responses_trigger_category_enum"`);
    }

}
