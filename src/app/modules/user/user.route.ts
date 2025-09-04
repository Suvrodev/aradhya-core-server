import express, { NextFunction, Request, Response } from "express";
import { userControllers } from "./user.controller";
import { AnyZodObject } from "zod";
import { userValidations } from "./userValidation";
import validateRequest from "../../middleware/validateRequest";
import auth from "../../middleware/auth";
import { userNewControllers } from "./registrationPro/user.newcontroller";
const router = express.Router();

//Register
router.post("/register", userControllers.registerUser);
//New Register with toke
router.post("/register-new", userNewControllers.newRegisterUser);
//Get All User
// router.get("/allusers", auth("admin"), userControllers.getAllUsers);
router.get("/allusers", userControllers.getAllUsers);

//Get Single User
router.get("/allusers/:email", userControllers.getSpecificUsers);
//delete user
router.delete("/allusers/:email", userControllers.deleteUser);
//update user
router.patch("/allusers/:email", userControllers.updateUser);
//change password
router.patch("/updatepassword/:email", userControllers.updatePassword);
// router.patch(
//   "/updatepassword/:userId",
//   auth("user"),
//   userControllers.updatePassword
// );
// router.get("/register", userControllers.getAllUsers);

export const userRoutes = router;
