import { MigrationInterface, QueryRunner } from "typeorm";

export class UniqueIndex1782601946955 implements MigrationInterface {
    name = 'UniqueIndex1782601946955'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."whatsapp_failure_logs_failure_stage_enum" AS ENUM('typing_indicator', 'response_build', 'outbound_send', 'job_processing')`);
        await queryRunner.query(`CREATE TABLE "whatsapp_failure_logs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "session_id" uuid, "user_id" uuid, "job_id" character varying(255), "failure_stage" "public"."whatsapp_failure_logs_failure_stage_enum" NOT NULL, "phone_number" character varying(30), "provider_message_id" character varying(255), "error_message" text NOT NULL, "error_stack" text, "payload" jsonb, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_5a786797299503a109d0a771a72" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "whatsapp_failure_logs"`);
        await queryRunner.query(`DROP TYPE "public"."whatsapp_failure_logs_failure_stage_enum"`);
    }

}
