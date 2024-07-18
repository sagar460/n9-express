import { Router } from "express";
import { createEmployeeController, deleteEmployeeController, readEmployeeController, readSpecificEmployeeController, updateEmployeeController } from "../controllers/employeeController.js";

let employeeRouter=Router();
employeeRouter.route("/").post(createEmployeeController).get(readEmployeeController);


employeeRouter.route("/:id").get(readSpecificEmployeeController);
employeeRouter.route("/:id").patch(updateEmployeeController);
employeeRouter.route("/:id").delete(deleteEmployeeController);


export default employeeRouter;
