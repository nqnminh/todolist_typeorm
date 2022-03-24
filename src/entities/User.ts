import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity("users")
export class User {
    @PrimaryColumn()
    id!: string;

    @Column()
    name!: string;

    @Column()
    username!: string;

    @Column()
    password!: string;

    @CreateDateColumn()
    create_at!: Date;

    constructor(){
        if(!this.id) this.id = uuidv4();
    }
}