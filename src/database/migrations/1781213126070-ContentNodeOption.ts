import { MigrationInterface, QueryRunner } from "typeorm";

export class ContentNodeOption1781213126070 implements MigrationInterface {
    name = 'ContentNodeOption1781213126070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subtopic_related_links" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "from_subtopic_id" uuid NOT NULL, "to_subtopic_id" uuid NOT NULL, "sort_order" integer NOT NULL DEFAULT '0', "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_29edb0148a82a58c3eff2e0b09e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_SUBTOPIC_RELATED_LINKS_TO_SUBTOPIC_ID" ON "subtopic_related_links" ("to_subtopic_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_SUBTOPIC_RELATED_LINKS_FROM_SUBTOPIC_ID" ON "subtopic_related_links" ("from_subtopic_id") `);
        await queryRunner.query(`ALTER TABLE "subtopic_related_links" ADD CONSTRAINT "FK_e1b0fc4bb2741bf1b9dee2c40f2" FOREIGN KEY ("from_subtopic_id") REFERENCES "subtopics"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subtopic_related_links" ADD CONSTRAINT "FK_6de6919ff97de8323d0b82c08c7" FOREIGN KEY ("to_subtopic_id") REFERENCES "subtopics"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subtopic_related_links" DROP CONSTRAINT "FK_6de6919ff97de8323d0b82c08c7"`);
        await queryRunner.query(`ALTER TABLE "subtopic_related_links" DROP CONSTRAINT "FK_e1b0fc4bb2741bf1b9dee2c40f2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_SUBTOPIC_RELATED_LINKS_FROM_SUBTOPIC_ID"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_SUBTOPIC_RELATED_LINKS_TO_SUBTOPIC_ID"`);
        await queryRunner.query(`DROP TABLE "subtopic_related_links"`);
    }

}
