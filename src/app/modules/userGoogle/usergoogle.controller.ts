import { NextFunction, Request, RequestHandler, Response } from "express";
import { userGoogleServices } from "./usergoogle.service";

///Register User By Google
const registerUserByGoogle: RequestHandler = async (req, res, next) => {
  try {
    const userData = req.body;
    const result = await userGoogleServices.registerUserIntoDBByGoogle(
      userData
    );

    if (!result) {
      res.status(400).json({
        success: true,
        message: "Unscuccessfull Register",
        statusCode: 400,
        data: result,
      });
    }
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      statusCode: 201,
      data: result?.accessToken,
    });
  } catch (error: any) {
    next(error);
  }
};

export const userGoogleControllers = {
  registerUserByGoogle,
};
