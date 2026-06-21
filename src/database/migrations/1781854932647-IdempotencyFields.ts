import { MigrationInterface, QueryRunner } from "typeorm";

export class IdempotencyFields1781854932647 implements MigrationInterface {
    name = 'IdempotencyFields1781854932647'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "messages" ADD "provider" character varying(50)`);
        await queryRunner.query(`ALTER TABLE "messages" ADD "provider_message_id" character varying(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "messages" DROP COLUMN "provider_message_id"`);
        await queryRunner.query(`ALTER TABLE "messages" DROP COLUMN "provider"`);
    }

}
