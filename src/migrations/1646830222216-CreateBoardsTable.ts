import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBoardsTable1646830222216 implements MigrationInterface {
  name = 'CreateBoardsTable1646830222216';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`board\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(20) NOT NULL, \`description\` text NOT NULL, \`filename\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`board\``);
  }
}
