import { getRepository } from "typeorm"
import { User } from "../entities/User"

type UserRequest = {
    id: string,
    name: string,
}

export class UpdateUserService {
    async execute({id, name}: UserRequest) {
        const repo = getRepository(User);

        const user = await repo.findOne(id);

        if (!user) return new Error("User does not exists!");

        user.name = name ? name : user.name;
        await repo.save(user);

        return user;
    }
}