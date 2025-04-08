import { NextFunction, Request, RequestHandler, Response } from "express";
import AppError from "../../errors/AppError";
import { BatchService } from "./batch.service";

//Insert Batch
const insertBatch: RequestHandler = async (req, res, next) => {
  try {
    const batch = req.body;
    console.log("Come Batch: ", batch);
    const result = await BatchService.insertBatchIntoDB(batch);

    //Send Response
    res.status(201).json({
      message: "batch inserted successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Get All batch (Admin jodi Student k assign korte chay tahole eta lage)  (UnUsed)
const getAllBatch: RequestHandler = async (req, res, next) => {
  try {
    const result = await BatchService.getAllBatchFromDB();
    res.status(200).json({
      message: "Batch Retrive successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Get specific batch
const getSpecificBatch: RequestHandler = async (req, res, next) => {
  try {
    const batchId = req?.params?.batchId;
    const result = await BatchService.getSpecificBatchFromDB(batchId);
    res.status(200).json({
      message: "Batch Retrive successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Get Just one batch (Not matter status for update)
const getJustOneBatch: RequestHandler = async (req, res, next) => {
  try {
    const batchId = req?.params?.batchId;
    const result = await BatchService.getJustOneBatchFromDB(batchId);
    res.status(200).json({
      message: "Batch Retrive successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//get Upcoming batch under Course
const getUpComingBatchUnderCourse: RequestHandler = async (req, res, next) => {
  try {
    const courseId = req.params.courseId;
    console.log("Course id-----------------: ", courseId);
    const result = await BatchService.getUpComingBatchUnderCourseFromDB(
      courseId
    );
    res.status(200).json({
      message: "Batch Retrive successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//getBatch Under Course Batch
const getSpecificBatchUnderCourse: RequestHandler = async (req, res, next) => {
  try {
    const courseId = req.params.courseId;
    console.log("Course id-----------------: ", courseId);
    const result = await BatchService.getSpecificBatchUnderCourseFromDB(
      courseId
    );
    res.status(200).json({
      message: "Batch Retrive successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//getBatch Under Instructor
const getBatchForInstructorAssignation: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const instructorId = req.params.instructorid;
    console.log("instructorId-----------------: ", instructorId);
    const result = await BatchService.getBatchForInstructorAssignation(
      Number(instructorId)
    );
    res.status(200).json({
      message: "Batch Retrive successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Delete Batch
const deleteBatch: RequestHandler = async (req, res, next) => {
  try {
    const batchId = req.params.batchId;
    console.log("Batch id-----------------: ", batchId);
    const result = await BatchService.deleteBatchFromDB(batchId);
    //Send Response
    res.status(200).json({
      message: "Batch deleted successfully",
      status: true,
      data: {},
    });
  } catch (error: any) {
    next(error);
  }
};

//Update Batch
const updateBatch: RequestHandler = async (req, res, next) => {
  try {
    const batchId = req.params.batchId;
    const updateBatchData = req.body;

    const result = await BatchService.updateBatchFromDB(
      batchId,
      updateBatchData
    );

    //Send Response
    res.status(200).json({
      message: "Batch updated successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const BatchController = {
  insertBatch,
  getAllBatch,
  getSpecificBatch,
  getJustOneBatch,
  getUpComingBatchUnderCourse,
  getSpecificBatchUnderCourse,
  getBatchForInstructorAssignation,
  deleteBatch,
  updateBatch,
};
