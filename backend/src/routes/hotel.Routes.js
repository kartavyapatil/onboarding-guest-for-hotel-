import { Router } from "express";
import multer from "multer";
// import FormValidation from "../validation/Form.validation.js"; // Placeholder for validation
import hotelcontroller from "../controller/hotel.controller.js";
import validation from "../middlewares/validation.js"; // Placeholder if validations are middleware-based
import Authentication from "../middlewares/Authentication.js"; // Placeholder if authentication is required
import hotelvalidation from "../validation/hotel.validation.js";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  "/addhotel",
  Authentication, // Add if authentication is required
  upload.single("image"), // Add if validation middleware exists
  validation, // Add if general validations are middleware-based
  hotelcontroller.addhotel
);

router.get(
  "/gethotel",
  Authentication, 
  hotelcontroller.gethotel
);
router.delete(
  "/deleteorder/:id",
  Authentication, 
  hotelvalidation.Params_id,
  validation,
  hotelcontroller.deleteorder
);

export default router;
