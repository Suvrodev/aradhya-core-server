import express, { NextFunction, Request, Response } from "express";
import { userGoogleControllers } from "./usergoogle.controller";

const router = express.Router();

//Register
router.post("/register", userGoogleControllers.registerUserByGoogle);

export const userGoogleRoutes = router;
