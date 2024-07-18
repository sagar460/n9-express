import { Router } from "express";
import { createReviewController, deleteReviewController } from "../controllers/reviewController.js";
import { readReviewController } from "../controllers/reviewController.js";
import { readSpecificReviewController } from "../controllers/reviewController.js";
import { updateReviewController } from "../controllers/reviewController.js";



let reviewRouter=Router();
reviewRouter.route("/").post(createReviewController).get(readReviewController);


reviewRouter.route("/:id").get(readSpecificReviewController);
reviewRouter.route("/:id").patch(updateReviewController);
reviewRouter.route("/:id").delete(deleteReviewController);


export default reviewRouter;