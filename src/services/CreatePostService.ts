import { getRepository } from "typeorm";
import { Post } from "../entities/Post";

type PostRequest = {
    title: string,
    text: string,
    user_id: string
}

export class CreatePostService {
    async execute({title, text, user_id} : PostRequest) : Promise<Post | Error> {
        const repo = getRepository(Post);

        const post = repo.create({
            title,
            text,
            user_id,
        });

        await repo.save(post);

        return post
    }
}