import { MigrationInterface, QueryRunner } from "typeorm";

export class TopicCategory1781209790108 implements MigrationInterface {
    name = 'TopicCategory1781209790108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."content_nodes_node_type_enum" AS ENUM('welcome', 'onboarding', 'menu', 'intro', 'content', 'question', 'reflection', 'related_topics', 'fallback', 'safeguarding', 'closing', 'navigation')`);
        await queryRunner.query(`CREATE TYPE "public"."content_nodes_language_enum" AS ENUM('en', 'sw')`);
        await queryRunner.query(`CREATE TYPE "public"."content_nodes_input_type_enum" AS ENUM('none', 'button', 'list')`);
        await queryRunner.query(`CREATE TABLE "content_nodes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "category_id" uuid, "topic_id" uuid, "subtopic_id" uuid, "node_key" character varying(150) NOT NULL, "node_type" "public"."content_nodes_node_type_enum" NOT NULL, "language" "public"."content_nodes_language_enum" NOT NULL, "message_text" text NOT NULL, "input_type" "public"."content_nodes_input_type_enum" NOT NULL DEFAULT 'none', "media_asset_key" character varying(150), "is_start_node" boolean NOT NULL DEFAULT false, "is_end_node" boolean NOT NULL DEFAULT false, "sort_order" integer NOT NULL DEFAULT '0', "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_cc6d794a1b6de2ba36ce0e72427" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "UQ_CONTENT_NODES_NODE_KEY_LANGUAGE" ON "content_nodes" ("node_key", "language") `);
        await queryRunner.query(`ALTER TABLE "content_nodes" ADD CONSTRAINT "FK_5d4c1c91955cb61d29bf690835c" FOREIGN KEY ("category_id") REFERENCES "topic_categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "content_nodes" ADD CONSTRAINT "FK_18a08e4ae239ac5886a32858d7b" FOREIGN KEY ("topic_id") REFERENCES "topics"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "content_nodes" ADD CONSTRAINT "FK_3b2fab25b613a660fcd82e6aee2" FOREIGN KEY ("subtopic_id") REFERENCES "subtopics"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content_nodes" DROP CONSTRAINT "FK_3b2fab25b613a660fcd82e6aee2"`);
        await queryRunner.query(`ALTER TABLE "content_nodes" DROP CONSTRAINT "FK_18a08e4ae239ac5886a32858d7b"`);
        await queryRunner.query(`ALTER TABLE "content_nodes" DROP CONSTRAINT "FK_5d4c1c91955cb61d29bf690835c"`);
        await queryRunner.query(`DROP INDEX "public"."UQ_CONTENT_NODES_NODE_KEY_LANGUAGE"`);
        await queryRunner.query(`DROP TABLE "content_nodes"`);
        await queryRunner.query(`DROP TYPE "public"."content_nodes_input_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."content_nodes_language_enum"`);
        await queryRunner.query(`DROP TYPE "public"."content_nodes_node_type_enum"`);
    }

}
