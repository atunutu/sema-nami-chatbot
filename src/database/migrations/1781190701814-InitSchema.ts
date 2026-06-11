import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1781190701814 implements MigrationInterface {
    name = 'InitSchema1781190701814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "whatsapp_phone_number" character varying(30) NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "last_interaction_at" TIMESTAMP WITH TIME ZONE, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_USERS_WHATSAPP_PHONE_NUMBER" ON "users" ("whatsapp_phone_number") `);
        await queryRunner.query(`CREATE TYPE "public"."user_profiles_preferred_language_enum" AS ENUM('en', 'sw')`);
        await queryRunner.query(`CREATE TYPE "public"."user_profiles_age_band_enum" AS ENUM('15_17', '18_20', '21_24')`);
        await queryRunner.query(`CREATE TYPE "public"."user_profiles_gender_enum" AS ENUM('female', 'male', 'prefer_not_to_say')`);
        await queryRunner.query(`CREATE TABLE "user_profiles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "preferred_language" "public"."user_profiles_preferred_language_enum", "age_band" "public"."user_profiles_age_band_enum", "gender" "public"."user_profiles_gender_enum", "completed_onboarding" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_6ca9503d77ae39b4b5a6cc3ba88" UNIQUE ("user_id"), CONSTRAINT "REL_6ca9503d77ae39b4b5a6cc3ba8" UNIQUE ("user_id"), CONSTRAINT "PK_1ec6662219f4605723f1e41b6cb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_profiles" ADD CONSTRAINT "FK_6ca9503d77ae39b4b5a6cc3ba88" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_profiles" DROP CONSTRAINT "FK_6ca9503d77ae39b4b5a6cc3ba88"`);
        await queryRunner.query(`DROP TABLE "user_profiles"`);
        await queryRunner.query(`DROP TYPE "public"."user_profiles_gender_enum"`);
        await queryRunner.query(`DROP TYPE "public"."user_profiles_age_band_enum"`);
        await queryRunner.query(`DROP TYPE "public"."user_profiles_preferred_language_enum"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_USERS_WHATSAPP_PHONE_NUMBER"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
