import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCategoryIntroFields1782601946956
  implements MigrationInterface
{
  name = 'AddCategoryIntroFields1782601946956';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "topic_categories" ADD "intro_message_en" text`,
    );
    await queryRunner.query(
      `ALTER TABLE "topic_categories" ADD "intro_message_sw" text`,
    );
    await queryRunner.query(
      `ALTER TABLE "topic_categories" ADD "intro_media_asset_key" character varying(255)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "topic_categories" DROP COLUMN "intro_media_asset_key"`,
    );
    await queryRunner.query(
      `ALTER TABLE "topic_categories" DROP COLUMN "intro_message_sw"`,
    );
    await queryRunner.query(
      `ALTER TABLE "topic_categories" DROP COLUMN "intro_message_en"`,
    );
  }
}
