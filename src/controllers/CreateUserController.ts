import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import * as argon2 from "argon2";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, username } = req.body;

    const passwordOle = req.body.password;

    const password = await argon2.hash(passwordOle);

    const services = new CreateUserService();

    const result = await services.execute({
      name,
      username,
      password,
    });

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.status(200).json("Sign Up Success");
  }
}
