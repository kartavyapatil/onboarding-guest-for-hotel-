import { Router } from "express";
import guestValidation from "../validation/guest.validation.js";
import guestController from "../controller/guest.controller.js";
import validation from "../middlewares/validation.js";
import Authentication from "../middlewares/Authentication.js";
const router = Router();
router.get("/abc", (req, res) => {
  res.send("login");
});
router.post('/guestregister', guestValidation.RegisterUser, validation, guestController.RegisterUser);
router.post('/guestlogin', guestValidation.loginUser, validation, guestController.loginUser);
// router.get('/profile', Authentication, guestController.profilelogin);
export default router;