import { NextFunction, Request, RequestHandler, Response } from "express";
import { ForgetPasswordInstructorService } from "./forgetPasswordInstructor.service";

///Add Send otp
const sendOTP: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;

    const result = await ForgetPasswordInstructorService.SendOTP(email);
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

//Update Password
const updatePasswordAfterOTP: RequestHandler = async (req, res, next) => {
  try {
    const { email, otp, password } = req.body;
    const result =
      await ForgetPasswordInstructorService.updatPasswordAfterOTPIntoDB(
        email,
        otp,
        password
      );
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
  sendOTP,
  updatePasswordAfterOTP,
};
