import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";

export class DeleteUserController {
    async handle(req: Request, res: Response){
        const {id} =req.params;

        const user = new DeleteUserService();
        
        const result = await user.execute(id);
    
        if (result instanceof Error) return res.status(400).json(result.message);
        
        return res.status(204).end();
    }
}