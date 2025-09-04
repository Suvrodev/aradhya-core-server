import { NextFunction, Request, RequestHandler, Response } from "express";
import { userNewServices } from "./user.newservice";

///Register User
const newRegisterUser: RequestHandler = async (req, res, next) => {
  try {
    const userData = req.body;
    console.log("User Data: ", userData);
    const result = await userNewServices.newRegisterUserIntoDB(userData);

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
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const userNewControllers = {
  newRegisterUser,
};
