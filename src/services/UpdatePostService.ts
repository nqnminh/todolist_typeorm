import { getRepository } from "typeorm"
import { Post } from "../entities/Post"

type PostRequest = {
    id: string
    title: string
    text: string
}

export class UpdatePostService {
    async execute({id,title, text}: PostRequest) {
        const repo = getRepository(Post);
        
        const post =await repo.findOne(id);
             
        if(!post) return new Error("Post does not exists");

        post.title = title ? title : post.title;
        post.text = text ? text : post.text;

        await repo.save(post);

        return post;
    }
}