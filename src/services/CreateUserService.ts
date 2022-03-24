import { getRepository} from "typeorm";
import {User} from '../entities/User'

type UserRequest = {
    name: string,
    username: string,
    password: string,
}

export class CreateUserService {
    async execute({name, username, password} : UserRequest): Promise<User | Error> {
        const repo = getRepository(User); //get resitory

        if ((await repo.findOne({username}))) return new Error("Username already exists"); //check user = username 

        const user = repo.create({name, username, password});  
    
        await repo.save(user);

        return user;

    }
}