import { SortOrder } from "mongoose";
import AppError from "../../errors/AppError";
import { TBatch } from "./batch.interface";
import { BatchModel } from "./batch.model";

//Insert Batch
const insertBatchIntoDB = async (batchData: TBatch) => {
  const isBatchIdExists = await BatchModel.findOne({
    batchId: batchData?.batchId,
  });
  if (isBatchIdExists) {
    throw new AppError(400, "Batch id already exists");
  }

  const result = await BatchModel.create(batchData);
  return result;
};

///Get batch
const getAllBatchFromDB = async () => {
  const res = await BatchModel.find();
  return res;
};

///Get specific batch
const getSpecificBatchFromDB = async (batchId: string) => {
  const res = await BatchModel.findOne({ batchId: batchId });
  return res;
};

///Get Specific batch under course
const getSpecificBatchUnderCourseFromDB = async (courseId: string) => {
  console.log("Check Course id: ", courseId);
  const res = await BatchModel.findOne({
    underCourse: courseId,
    batchStatus: "onGoing",
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

export const BatchService = {
  insertBatchIntoDB,
  getAllBatchFromDB,
  getSpecificBatchFromDB,
  getSpecificBatchUnderCourseFromDB,
  deleteBatchFromDB,
  updateBatchFromDB,
};
