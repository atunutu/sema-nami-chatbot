import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCategoryIntroChatState1782601946957 implements MigrationInterface {
  name = 'AddCategoryIntroChatState1782601946957';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TYPE "public"."chat_sessions_current_state_enum" ADD VALUE IF NOT EXISTS 'category_intro'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE "chat_sessions" SET "current_state" = 'topic_menu' WHERE "current_state" = 'category_intro'`,
    );
    await queryRunner.query(
      `ALTER TYPE "public"."chat_sessions_current_state_enum" RENAME TO "chat_sessions_current_state_enum_old"`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."chat_sessions_current_state_enum" AS ENUM('welcome', 'ask_language', 'ask_age_band', 'ask_gender', 'ask_topic_category', 'returning_home', 'category_menu', 'topic_menu', 'subtopic_menu', 'content_node', 'fallback', 'safeguarding_interrupt', 'completed')`,
    );
    await queryRunner.query(
      `ALTER TABLE "chat_sessions" ALTER COLUMN "current_state" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "chat_sessions" ALTER COLUMN "current_state" TYPE "public"."chat_sessions_current_state_enum" USING "current_state"::text::"public"."chat_sessions_current_state_enum"`,
    );
    await queryRunner.query(
      `ALTER TABLE "chat_sessions" ALTER COLUMN "current_state" SET DEFAULT 'welcome'`,
    );
    await queryRunner.query(
      `DROP TYPE "public"."chat_sessions_current_state_enum_old"`,
    );
  }
}
