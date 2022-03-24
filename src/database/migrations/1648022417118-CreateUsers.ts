import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1648022417118 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: "users",
                columns: [
                    {name: "id", type: "varchar", isPrimary: true},
                    {name: "name", type: "varchar"},
                    {name: "username", type: "varchar", isUnique: true},
                    {name: "password", type: "varchar"},
                    {name: "create_at", type: "timestamp", default: "CURRENT_TIMESTAMP"}

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
