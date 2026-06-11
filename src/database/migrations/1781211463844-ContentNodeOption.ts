import { MigrationInterface, QueryRunner } from "typeorm";

export class ContentNodeOption1781211463844 implements MigrationInterface {
    name = 'ContentNodeOption1781211463844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "content_node_options" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "content_node_id" uuid NOT NULL, "label_en" character varying(255) NOT NULL, "label_sw" character varying(255) NOT NULL, "option_value" character varying(150) NOT NULL, "next_node_key" character varying(150) NOT NULL, "sort_order" integer NOT NULL DEFAULT '0', "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_be1526957c533a73a4dc894242c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_CONTENT_NODE_OPTIONS_CONTENT_NODE_ID" ON "content_node_options" ("content_node_id") `);
        await queryRunner.query(`ALTER TABLE "content_node_options" ADD CONSTRAINT "FK_9af07c8be82d3e3f1c811a2653e" FOREIGN KEY ("content_node_id") REFERENCES "content_nodes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content_node_options" DROP CONSTRAINT "FK_9af07c8be82d3e3f1c811a2653e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_CONTENT_NODE_OPTIONS_CONTENT_NODE_ID"`);
        await queryRunner.query(`DROP TABLE "content_node_options"`);
    }

}
