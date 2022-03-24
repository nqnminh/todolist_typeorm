import { Request, Response } from "express";
import { DeletePostService } from "../services/DeletePostService";

export class DeletePostController {
    async handle(req: Request, res: Response){
        const {id} =req.params;

        const user = new DeletePostService();

        const result = await user.execute(id);
    
        if (result instanceof Error) return res.status(400).json(result.message);
        
        return res.status(204).end();
    }
}