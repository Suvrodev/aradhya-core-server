import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { AuthInstructorValidation } from "./authInstructor.validation";
import { AuthInstructorControllers } from "./authInstructor.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(AuthInstructorValidation.loginValidationSchema),
  AuthInstructorControllers.loginInstructor
);

export const AuthInstructorRoutes = router;
