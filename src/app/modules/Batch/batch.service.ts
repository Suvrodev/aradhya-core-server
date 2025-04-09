import { SortOrder } from "mongoose";
import AppError from "../../errors/AppError";
import { TBatch } from "./batch.interface";
import { BatchModel } from "./batch.model";

//Insert Batch
const insertBatchIntoDB = async (batchData: TBatch) => {
  //Batch id Exist or not
  const isBatchIdExists = await BatchModel.findOne({
    batchId: batchData?.batchId,
  });
  if (isBatchIdExists) {
    throw new AppError(400, "Batch id already exists");
  }

  //Same course batch upcoming exist or not
  const isSameCourseIdUpcomingExist = await BatchModel.findOne({
    underCourse: batchData?.underCourse,
    batchStatus: "upComing",
  });
  if (isSameCourseIdUpcomingExist) {
    throw new AppError(
      400,
      `UpComing Batch already exist in course ${batchData?.underCourse} `
    );
  }

  const result = await BatchModel.create(batchData);
  return result;
};

///Get batch (Admin jodi Student k assign korte chay tahole eta lage)  (UnUsed)
const getAllBatchFromDB = async () => {
  const res = await BatchModel.find();
  return res;
};

///Get specific batch  (Not used)
const getSpecificBatchFromDB = async (batchId: string) => {
  const res = await BatchModel.findOne({
    batchId: batchId,
    batchStatus: "upComing",
  });
  return res;
};

///Get just 1 batch based on batch id (Not matter status for update)
const getJustOneBatchFromDB = async (batchId: string) => {
  console.log("(Just) batch id", batchId);
  const res = await BatchModel.findOne({
    batchId: batchId,
  });
  return res;
};

///Get Specific 1 batch under course upComing
const getUpComingBatchUnderCourseFromDB = async (courseId: string) => {
  console.log("Check Course id: ", courseId);
  const res = await BatchModel.findOne({
    underCourse: courseId,
    batchStatus: "upComing",
  });
  return res;
};
///Get Specific all batch under course (course Drop down e batch khoja)
const getSpecificBatchUnderCourseFromDB = async (courseId: string) => {
  console.log("Check Course id: ", courseId);
  const res = await BatchModel.find({
    underCourse: courseId,
  });
  return res;
};

// Instructor detail e click korle dekhte parbe se kon kon batch e assign
const getBatchForInstructorAssignation = async (instructorId: number) => {
  console.log("Instructor id: ", instructorId);
  const res = await BatchModel.find({
    instructorId: instructorId,
  });
  return res;
};

//delete btch
const deleteBatchFromDB = async (batchId: string) => {
  const result = await BatchModel.deleteOne({ batchId: batchId });
  return result;
};

//Update batch
const updateBatchFromDB = async (batchId: string, payload: TBatch) => {
  console.log("Update Batch");
  console.log("Batch id: ", batchId);
  console.log("Payload: ", payload);
  const result = await BatchModel.updateOne({ batchId: batchId }, payload, {
    new: true,
  });
  return result;
};

//Update batch Notice
const updateBatchNoticeFromDB = async (batchId: string, payload: string) => {
  console.log("Update Batch Notice Service--------------");
  console.log("Batch id: ", batchId);
  console.log("Payload: ", payload);
  const result = await BatchModel.updateOne(
    { batchId: batchId },
    { batchNotice: payload },
    {
      new: true,
    }
  );
  console.log("Result: ", result);
  return result;
};

export const BatchService = {
  insertBatchIntoDB,
  getAllBatchFromDB,
  getSpecificBatchFromDB,
  getJustOneBatchFromDB,
  getUpComingBatchUnderCourseFromDB,
  getSpecificBatchUnderCourseFromDB,
  getBatchForInstructorAssignation,
  deleteBatchFromDB,
  updateBatchFromDB,
  updateBatchNoticeFromDB,
};
