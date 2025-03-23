import express, { NextFunction, Request, Response } from "express";
import { ForgetPasswordController } from "./forgetPassword.controller";

const router = express.Router();

router.post("/", ForgetPasswordController.addForgetPassword);

export const ForgetPasswordRoute = router;
