import express, { NextFunction, Request, Response } from "express";
import validateRequest from "../../middleware/validateRequest";
import auth from "../../middleware/auth";
import { instructorControllers } from "./instructor.controller";
const router = express.Router();

router.post("/register", instructorControllers.registerInstructor);
//Get All User
// router.get("/allusers", auth("admin"), userControllers.getAllUsers);
router.get("/allusers", instructorControllers.getAllInstructor);

//Get Single User
router.get("/allusers/:id", instructorControllers.getSpecificInstructor);
//delete user
router.delete("/allusers/:id", instructorControllers.deleteInstructor);
//update user
router.patch("/allusers/:id", instructorControllers.updateInstructor);
//change password
router.patch(
  "/updatepassword/:instructorId",
  instructorControllers.updatePassword
);
// router.patch(
//   "/updatepassword/:userId",
//   auth("user"),
//   userControllers.updatePassword
// );
// router.get("/register", userControllers.getAllUsers);

export const instructorRoutes = router;
