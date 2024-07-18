import { Router } from "express";
import { createTraineeController, deleteTraineeController, readSpecificTraineeController, readTraineeController, updateTraineeController } from "../controllers/traineeController.js";

let traineeRouter=Router();
traineeRouter.route("/").post(createTraineeController).get(readTraineeController);


traineeRouter.route("/:id").get(readSpecificTraineeController);
traineeRouter.route("/:id").patch(updateTraineeController);
traineeRouter.route("/:id").delete(deleteTraineeController);


export default traineeRouter;