import { Request, Response } from "express";
import { UpdatePostService } from "../services/UpdatePostService";

export class UpdatePostController {
    async handle(req: Request, res: Response){
        const {id} =req.params;
        const {title, text} = req.body;

        const service = new UpdatePostService();

        const result = await service.execute({id, title, text});
    
        if (result instanceof Error) return res.status(400).json(result.message);
        
        return res.status(200).json(result);
    }
}