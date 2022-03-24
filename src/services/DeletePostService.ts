import { getRepository } from "typeorm";
import { Post } from "../entities/Post";

export class DeletePostService {
    async execute(id : string){
        const repo = getRepository(Post);
        if(!(await repo.findOne(id))) return new Error("Post not exists")

        return repo.delete(id);

    }
}