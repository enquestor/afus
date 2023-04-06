import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateShort1680773132400 implements MigrationInterface {
  name = 'CreateShort1680773132400';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "short" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "code" character varying NOT NULL, "url" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_87ec3401b7e78c5703f3ebd6ce6" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "short"`);
  }
}
