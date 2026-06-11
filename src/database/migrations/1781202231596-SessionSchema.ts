import { MigrationInterface, QueryRunner } from "typeorm";

export class SessionSchema1781202231596 implements MigrationInterface {
    name = 'SessionSchema1781202231596'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."messages_direction_enum" AS ENUM('inbound', 'outbound')`);
        await queryRunner.query(`CREATE TYPE "public"."messages_message_type_enum" AS ENUM('text', 'interactive_reply', 'image', 'audio', 'video', 'system')`);
        await queryRunner.query(`CREATE TABLE "messages" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "session_id" uuid NOT NULL, "user_id" uuid NOT NULL, "direction" "public"."messages_direction_enum" NOT NULL, "message_type" "public"."messages_message_type_enum" NOT NULL, "message_text" text, "interactive_value" character varying(255), "triggered_safeguarding" boolean NOT NULL DEFAULT false, "raw_payload" jsonb, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_18325f38ae6de43878487eff986" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_ff71b7760071ed9caba7f02beb4" FOREIGN KEY ("session_id") REFERENCES "chat_sessions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_830a3c1d92614d1495418c46736" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_830a3c1d92614d1495418c46736"`);
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_ff71b7760071ed9caba7f02beb4"`);
        await queryRunner.query(`DROP TABLE "messages"`);
        await queryRunner.query(`DROP TYPE "public"."messages_message_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."messages_direction_enum"`);
    }

}
