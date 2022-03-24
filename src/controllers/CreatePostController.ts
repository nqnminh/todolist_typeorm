import { Request, Response } from "express";
import { CreatePostService } from "../services/CreatePostService";

export class CreatePostController {
  async handle(req: Request, res: Response) {
    try {
      const { title, text } = req.body;
      const {user_id} = req.params;
  
      const services = new CreatePostService();
  
      const result = await services.execute({
          title,
          text,
          user_id,
      });
  
      if (result instanceof Error) return res.status(400).json(result.message);
  
      return res.status(200).json("Post success");
    } catch (error) {
      res.status(400).json("Error")   
    }
  }
}
