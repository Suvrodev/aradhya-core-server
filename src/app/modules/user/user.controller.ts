import { NextFunction, Request, RequestHandler, Response } from "express";
import { userServices } from "./user.service";
import AppError from "../../errors/AppError";

///Register User
const registerUser: RequestHandler = async (req, res, next) => {
  try {
    const userData = req.body;
    const result = await userServices.registerUserIntoDB(userData);

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

//Get All User
const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const { search } = req.query;
    console.log("search: ", search);
    const result = await userServices.getAllUser(search as string);
    res.status(201).json({
      success: true,
      message: "Users Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Get Specific User
const getSpecificUsers: RequestHandler = async (req, res, next) => {
  try {
    const email = req?.params?.email;

    const result = await userServices.getSingleUserFromDB(email);
    res.status(201).json({
      success: true,
      message: "Users Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//delete  User
const deleteUser: RequestHandler = async (req, res, next) => {
  try {
    const email = req?.params?.email;
    const result = await userServices.deleteUser(email);

    res.status(201).json({
      success: true,
      message: "Users Deleted successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Update  User
const updateUser: RequestHandler = async (
  req: Request,
  res: Response,
  next
) => {
  try {
    const email = req?.params?.email;
    const body = req?.body;

    console.log("Come email: ", email);
    console.log("Body ", body);

    const result = await userServices.updatUserIntoDB(email, body);
    res.status(201).json({
      success: true,
      message: "Users Updated successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

///Update Password
const updatePassword: RequestHandler = async (req, res, next) => {
  try {
    const email = req?.params?.email;
    const userPassword = req.body;
    // console.log("Logged user email : ", req?.user?._id);
    console.log("come user email: ", email);
    // if (req?.user?._id !== userId) {
    //   throw new AppError(403, "You are not authorized");
    // }

    const result = await userServices.updatePasswordIntoDB(email, userPassword);

    res.status(201).json({
      success: true,
      message: "Password Updated Successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const userControllers = {
  registerUser,
  getAllUsers,
  deleteUser,
  updatePassword,
  updateUser,
  getSpecificUsers,
};
