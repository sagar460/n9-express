import { Router } from "express";
import { createStudentController, deleteStudentController, readSpecificStudentController, readStudentController, updateStudentController } from "../controllers/studentController.js";

let studentRouter=Router();
studentRouter.route("/").post(createStudentController).get(readStudentController);


studentRouter.route("/:id").get(readSpecificStudentController);
studentRouter.route("/:id").patch(updateStudentController);
studentRouter.route("/:id").delete(deleteStudentController);


export default studentRouter;