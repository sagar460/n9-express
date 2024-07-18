import { Router } from "express";
import { createProductController, deleteProductController, readProductController, readSpecificProductController, updateProductController } from "../controllers/productController.js";

let productRouter= Router();
productRouter.route("/").post(createProductController).get(readProductController);


productRouter.route("/:id").get(readSpecificProductController);
productRouter.route("/:id").patch(updateProductController);
productRouter.route("/:id").delete(deleteProductController);


export default productRouter;