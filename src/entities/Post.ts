import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import {v4 as uuidv4} from 'uuid'

@Entity("posts")
export class Post {
    @PrimaryGeneratedColumn('increment')
    id!: string;

    @Column()
    title!: string;

    @Column()
    text!: string;

    @Column()
    user_id!: string;

    @ManyToOne(()=>User)
    @JoinColumn({name: "user_id"})
    user!: string;

    @CreateDateColumn()
    created_at!: Date

    constructor(){
        if(!this.id) this.id = uuidv4()
    }

}