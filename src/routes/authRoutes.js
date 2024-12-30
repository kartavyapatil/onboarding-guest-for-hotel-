import { Router } from "express";
import AuthValidation from "../validation/Auth.validation.js";
import AuthController from "../controller/Auth.controller.js";
import validation from "../middlewares/validation.js";
import Authentication from "../middlewares/Authentication.js";
const router = Router();
router.get("/abc", (req, res) => {
  res.send("login");
});
router.post('/adminregister', AuthValidation.RegisterUser, validation, AuthController.RegisterUser);
router.post('/adminlogin', AuthValidation.loginUser, validation, AuthController.loginUser);
router.get('/profile', Authentication, AuthController.profilelogin);
export default router;