import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUniqueInboundProviderMessageConstraint1750000000000 implements MigrationInterface {
  name = 'AddUniqueInboundProviderMessageConstraint1750000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS "uq_messages_provider_message_direction"
      ON "messages" ("provider", "provider_message_id", "direction")
      WHERE "provider_message_id" IS NOT NULL
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP INDEX IF EXISTS "uq_messages_provider_message_direction"
    `);
  }
}
