import { MigrationInterface, QueryRunner } from "typeorm";

export class SessionSchema1781200493692 implements MigrationInterface {
    name = 'SessionSchema1781200493692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."chat_sessions_status_enum" AS ENUM('active', 'completed', 'interrupted', 'abandoned')`);
        await queryRunner.query(`CREATE TYPE "public"."chat_sessions_current_state_enum" AS ENUM('welcome', 'ask_language', 'ask_age_band', 'ask_gender', 'ask_topic_category', 'returning_home', 'category_menu', 'topic_menu', 'subtopic_menu', 'content_node', 'fallback', 'safeguarding_interrupt', 'completed')`);
        await queryRunner.query(`CREATE TABLE "chat_sessions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "status" "public"."chat_sessions_status_enum" NOT NULL DEFAULT 'active', "current_state" "public"."chat_sessions_current_state_enum" NOT NULL DEFAULT 'welcome', "current_category_code" character varying(100), "current_topic_code" character varying(100), "current_subtopic_code" character varying(100), "current_node_key" character varying(150), "previous_node_key" character varying(150), "started_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "ended_at" TIMESTAMP WITH TIME ZONE, "last_message_at" TIMESTAMP WITH TIME ZONE, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_efc151a4aafa9a28b73dedc485f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "chat_sessions" ADD CONSTRAINT "FK_1fa209cf48ae975a109366542a5" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chat_sessions" DROP CONSTRAINT "FK_1fa209cf48ae975a109366542a5"`);
        await queryRunner.query(`DROP TABLE "chat_sessions"`);
        await queryRunner.query(`DROP TYPE "public"."chat_sessions_current_state_enum"`);
        await queryRunner.query(`DROP TYPE "public"."chat_sessions_status_enum"`);
    }

}
