import { MigrationInterface, QueryRunner } from 'typeorm'

export class UserProfile1712309472986 implements MigrationInterface {
  name = 'UserProfile1712309472986'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users"
(
    "id"       SERIAL            NOT NULL,
    "email"    character varying NOT NULL,
    "password" character varying NOT NULL,
    CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
)
`
    )
    await queryRunner.query(
      `CREATE TABLE "profiles"
(
    "id"        SERIAL NOT NULL,
    "firstName" character varying,
    "lastName"  character varying,
    "address"   character varying,
    CONSTRAINT "PK_8e520eb4da7dc01d0e190447c8e" PRIMARY KEY ("id")
)`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "profiles"`)
    await queryRunner.query(`DROP TABLE "users"`)
  }
}
