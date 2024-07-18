import { Router } from "express";  //from package
import { createUserController, deleteUserController, readSpecificUserController, readUserController, updateUserController } from "../controllers/userController.js";  //file import

// userRouter.route("/").post((req,res,next)=>{})
let userRouter = Router();
userRouter.route("/:id")
.post(createUserController)
.get(readUserController)
.get(readSpecificUserController)
.patch(updateUserController)
.delete(deleteUserController);


export default userRouter;
