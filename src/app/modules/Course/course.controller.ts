import { NextFunction, Request, RequestHandler, Response } from "express";
import { CourseServices } from "./course.service";

///Add Course
const addCourse: RequestHandler = async (req, res, next) => {
  try {
    const courseData = req.body;
    console.log("Course data come: ", courseData);
    const result = await CourseServices.createCourseIntoDB(courseData);

    res.status(201).json({
      success: true,
      message: "Course Added successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Get All Course
const getAllCourse: RequestHandler = async (req, res, next) => {
  try {
    const result = await CourseServices.getAllCourseFromDB();
    res.status(201).json({
      success: true,
      message: "Course Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Get Specific Course
const getSpecificCourse: RequestHandler = async (req, res, next) => {
  try {
    const courseId = req?.params?.courseId;
    console.log("Course id: ", courseId);
    const result = await CourseServices.getSpecificCourseFromDB(courseId);
    // console.log("Result: ", result);
    res.status(201).json({
      success: true,
      message: "Course Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Get Specific Course
const getSpecificServiceCourse: RequestHandler = async (req, res, next) => {
  try {
    const serviceId = req?.params?.serviceId;
    console.log("serviceId: ", serviceId);
    const result = await CourseServices.getSpecificServiceCourseFromDB(
      serviceId
    );
    // console.log("Result: ", result);
    res.status(201).json({
      success: true,
      message: "Course Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Delete Service
const deleteCourse: RequestHandler = async (req, res, next) => {
  try {
    const courseId = req?.params?.courseId;
    console.log("course id:=========== ", courseId);
    const result = await CourseServices.deleteCourseFromDB(courseId);
    console.log("Result: ", result);
    res.status(201).json({
      success: true,
      message: "Course Deleted successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Update Course
const updateCourse: RequestHandler = async (req, res, next) => {
  try {
    const serviceId = req.params.serviceId;
    const service = req.body;

    const result = await CourseServices.updateCourseFromDB(serviceId, service);

    //Send Response
    res.status(200).json({
      message: "Course updated successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const CourseController = {
  addCourse,
  getAllCourse,
  getSpecificCourse,
  getSpecificServiceCourse,
  deleteCourse,
  updateCourse,
};
