import { getRepository } from "typeorm";
import { Post } from "../entities/Post";
import { User } from "../entities/User";

export class GetAllPostByUserService {
    async execute(user_id: string) {
        const repo = getRepository(Post);

        const userRepo = getRepository(User);

        if(!(await userRepo.findOne(user_id))) return new Error("Users not exists")

        const post = await repo.find({user_id});
        
        return post;
    }
}