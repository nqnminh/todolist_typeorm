import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePosts1648022551612 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "posts",
                columns: [
                    {name: "id", type: "varchar", isPrimary: true},
                    {name: "title", type: "varchar"},
                    {name: "text", type: "varchar"},
                    {name: "user_id", type: "varchar"},
                    {name: "created_at", type:"timestamp", default: "CURRENT_TIMESTAMP"},
                ],
                foreignKeys: [
                    {
                        name: "fk_posts_users",
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("posts");
    }

}
