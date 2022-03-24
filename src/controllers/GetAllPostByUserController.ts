import { Request, Response } from "express";
import { GetAllPostByUserService } from "../services/GetAllPostByUserService";

export class GetAllPostByUserController {
    async handle (req: Request, res: Response){
        
        const {user_id} = req.params;
        const service = new GetAllPostByUserService();

        const result = await service.execute(user_id);

        return res.json(result);
    } 
}