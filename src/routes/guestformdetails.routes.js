import { Router } from "express";
import GuestFormDetailsValidation from "../validation/guestformdetails.js";
import GuestFormDetailsController from "../controller/guestformdetails.controller.js";
import validation from "../middlewares/validation.js";
import Authentication from "../middlewares/Authentication.js";
const router = Router();
router.get("/abc", (req, res) => {
  res.send("login");
});
router.post('/addguest', Authentication,GuestFormDetailsValidation.createGuestFormDetails, validation, GuestFormDetailsController.createGuestFormDetails);
router.get('/getguest', Authentication, GuestFormDetailsController.getGuestFormDetails);
router.delete('/deleteguest/:id',Authentication, GuestFormDetailsController.deleteGuestFormDetails);
// router.post('/guestlogin', guestValidation.loginUser, validation, guestController.loginUser);
// router.get('/profile', Authentication, guestController.profilelogin);
export default router;