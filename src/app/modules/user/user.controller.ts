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
    const id = req?.params?.id;
    const result = await userServices.getSingleUserFromDB(id);
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
    const id = req?.params?.id;
    const result = await userServices.deleteUser(id);

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
    const id = req?.params?.id;
    const body = req?.body;
    console.log("Come id: ", id);
    console.log("Body ", body);

    const result = await userServices.updatUserIntoDB(id, body);
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
    const userId = req?.params?.userId;
    const userPassword = req.body;
    console.log("Logged user id : ", req?.user?._id);
    console.log("come user id: ", userId);
    // if (req?.user?._id !== userId) {
    //   throw new AppError(403, "You are not authorized");
    // }

    const result = await userServices.updatePasswordIntoDB(
      userId,
      userPassword
    );

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
