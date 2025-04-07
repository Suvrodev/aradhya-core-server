import { RequestHandler } from "express";
import { AuthInstructorServices } from "./authInstructor.service";

//Login Instructor
const loginInstructor: RequestHandler = async (req, res, next) => {
  try {
    // console.log("Come Data to Login: ", req.body);
    const result = await AuthInstructorServices.loginInstructor(req.body);

    res.status(200).json({
      success: true,
      message: "Login successful",
      statusCode: 200,
      data: {
        token: result?.accessToken,
      },
    });
  } catch (error: any) {
    next(error);
    // throw new AppError(401, error);
  }
};

export const AuthInstructorControllers = {
  loginInstructor,
};
