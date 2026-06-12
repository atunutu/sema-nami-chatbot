import { MigrationInterface, QueryRunner } from "typeorm";

export class ContentNodeOption1781261856847 implements MigrationInterface {
    name = 'ContentNodeOption1781261856847'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."safeguarding_triggers_trigger_category_enum" AS ENUM('abuse', 'sexual_exploitation', 'self_harm', 'suicidal_thoughts', 'urgent_medical', 'violence')`);
        await queryRunner.query(`CREATE TYPE "public"."safeguarding_triggers_language_enum" AS ENUM('en', 'sw')`);
        await queryRunner.query(`CREATE TABLE "safeguarding_triggers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "trigger_category" "public"."safeguarding_triggers_trigger_category_enum" NOT NULL, "language" "public"."safeguarding_triggers_language_enum" NOT NULL, "phrase" character varying(255) NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_0dcd9ca170f1c6e55aa81d4217e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_SAFEGUARDING_TRIGGERS_LANGUAGE" ON "safeguarding_triggers" ("language") `);
        await queryRunner.query(`CREATE INDEX "IDX_SAFEGUARDING_TRIGGERS_CATEGORY" ON "safeguarding_triggers" ("trigger_category") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_SAFEGUARDING_TRIGGERS_CATEGORY"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_SAFEGUARDING_TRIGGERS_LANGUAGE"`);
        await queryRunner.query(`DROP TABLE "safeguarding_triggers"`);
        await queryRunner.query(`DROP TYPE "public"."safeguarding_triggers_language_enum"`);
        await queryRunner.query(`DROP TYPE "public"."safeguarding_triggers_trigger_category_enum"`);
    }

}
