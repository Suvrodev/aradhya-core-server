import { NextFunction, Request, RequestHandler, Response } from "express";
import { ForgetPasswordService } from "./forgetPassword.service";

///Add Forget Password
const addForgetPassword: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;

    const result = await ForgetPasswordService.addForgetPassword(email);

    res.status(201).json({
      success: true,
      message: "Reseting Password",
      statusCode: 201,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const ForgetPasswordController = {
  addForgetPassword,
};
