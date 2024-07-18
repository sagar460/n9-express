import { Router } from "express";
import {
  createWebUserController,
  deleteSpecificWebUserController,
  forgotPassword,
  myProfileController,
  readAllWebUserController,
  readSpecificWebUserController,
  resetPassword,
  updatePassword,
  updateProfile,
  updateSpecificWebUserController,
  verifyEmailController,
  webUserLoginController,
} from "../controllers/webUserController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { isAuthorization } from "../middleware/isAuthorization.js";



let webUserRouter = Router();
webUserRouter.route("/").post(createWebUserController);
webUserRouter.route("/verify-email").post(verifyEmailController);
webUserRouter.route("/login").post(webUserLoginController);
webUserRouter.route("/my-Profile").get(isAuthenticated,myProfileController);
webUserRouter.route("/").get(isAuthenticated,isAuthorization(["admin","superAdmin"]),readAllWebUserController);

webUserRouter.route("/update-profile").patch(isAuthenticated,updateProfile)
webUserRouter.route("/update-password").patch(isAuthenticated,updatePassword);
webUserRouter.route("/forgot-password").post(forgotPassword)
webUserRouter.route("/reset-password").patch(isAuthenticated,resetPassword)


// Dynamic Router


webUserRouter.route("/:id").get(isAuthenticated,isAuthorization(["admin","superAdmin"]),readSpecificWebUserController)

webUserRouter.route("/:id").patch(isAuthenticated,isAuthorization(["superAdmin"]),updateSpecificWebUserController)

webUserRouter.route("/:id").delete(isAuthenticated,isAuthorization(["superAdmin"]),deleteSpecificWebUserController)









export default webUserRouter;


