import { NextFunction, Request, RequestHandler, Response } from "express";
import { instructorServices } from "./instructor.service";

///Register Instructor
const registerInstructor: RequestHandler = async (req, res, next) => {
  try {
    const instructorData = req.body;
    const result = await instructorServices.registerInstructorIntoDB(
      instructorData
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
      message: "Instrcutor registered successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Get All Instructor
const getAllInstructor: RequestHandler = async (req, res, next) => {
  try {
    const { search } = req.query;
    console.log("search: ", search);
    const result = await instructorServices.getAllInstructorFromDB(
      search as string
    );
    res.status(201).json({
      success: true,
      message: "Instructor Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Get Specific Instructor
const getSpecificInstructor: RequestHandler = async (req, res, next) => {
  try {
    const id = req?.params?.id;
    const result = await instructorServices.getSingleInstructorFromDB(id);
    res.status(201).json({
      success: true,
      message: "Instructor Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//delete  instructor
const deleteInstructor: RequestHandler = async (req, res, next) => {
  try {
    const id = req?.params?.id;
    const result = await instructorServices.deleteInstructor(id);

    res.status(201).json({
      success: true,
      message: "Instructor Deleted successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Update  Instructor
const updateInstructor: RequestHandler = async (
  req: Request,
  res: Response,
  next
) => {
  try {
    const id = req?.params?.id;
    const body = req?.body;
    console.log("Come id: ", id);
    console.log("Body ", body);

    const result = await instructorServices.updatInstructorIntoDB(id, body);
    res.status(201).json({
      success: true,
      message: "Instructor Updated successfully",
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
    const instructorId = req?.params?.instructorId;
    const userPassword = req.body;
    console.log("Logged user id : ", req?.user?._id);
    console.log("come user id: ", instructorId);
    // if (req?.user?._id !== userId) {
    //   throw new AppError(403, "You are not authorized");
    // }

    const result = await instructorServices.updatePasswordIntoDB(
      instructorId,
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

export const instructorControllers = {
  registerInstructor,
  getAllInstructor,
  getSpecificInstructor,
  deleteInstructor,
  updateInstructor,
  updatePassword,
};
