import { Request, Response } from "express";
import { GetAllUserService } from "../services/GetAllUserService";

export class GetAllUserController {
    async handle (req: Request, res: Response){
        const service = new GetAllUserService();

        const result = await service.execute();

        return res.json(result);
    } 
}