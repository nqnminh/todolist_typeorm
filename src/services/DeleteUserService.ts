import { getRepository } from "typeorm";
import { User } from "../entities/User";

export class DeleteUserService {
    async execute(id : string){
        const repo = getRepository(User);
        if(!(await repo.findOne(id))) return new Error("Post not exists")

        return repo.delete(id);

    }
}