import { MigrationInterface, QueryRunner } from 'typeorm'

export class AlterTableUser1712462681337 implements MigrationInterface {
  name = 'AlterTableUser1712462681337'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE "users"
(
    "email"    character varying NOT NULL,
    "password" character varying NOT NULL,
    CONSTRAINT "PK_97672ac88f789774dd47f7c8be3" PRIMARY KEY ("email")
)

    `)
    await queryRunner.query(`
    CREATE TABLE "profiles"
(
    "id"        SERIAL NOT NULL,
    "firstName" character varying,
    "lastName"  character varying,
    "address"   character varying,
    CONSTRAINT "PK_8e520eb4da7dc01d0e190447c8e" PRIMARY KEY ("id")
)
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "profiles"`)
    await queryRunner.query(`DROP TABLE "users"`)
  }
}
