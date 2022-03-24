import { Router  } from "express";
import { CreatePostController } from "../controllers/CreatePostController";
import { CreateUserController } from "../controllers/CreateUserController";
import { DeletePostController } from "../controllers/DeletePostController";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { GetAllPostByUserController } from "../controllers/GetAllPostByUserController";
import { GetAllUserController } from "../controllers/GetAllUserController";
import { GetOneUserController } from "../controllers/GetOneUserController";
import { UpdatePostController } from "../controllers/UpdatePostController";
import { UpdateUserController } from "../controllers/UpdateUserController";

const routes = Router();

routes.route("/user")
        .get( new GetAllUserController().handle)
        .post( new CreateUserController().handle)

routes.route("/user/:id")
        .get( new GetOneUserController().handle)
        .patch( new UpdateUserController().handle)
        .delete( new DeleteUserController().handle)

routes.route("/posts/:user_id")
        .get(new GetAllPostByUserController().handle)
        .post(new CreatePostController().handle)

routes.route("/post/:id")
        .patch(new UpdatePostController().handle)
        .delete(new DeletePostController().handle)
        
export {routes};