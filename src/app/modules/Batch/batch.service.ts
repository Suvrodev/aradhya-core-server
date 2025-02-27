import { SortOrder } from "mongoose";
import AppError from "../../errors/AppError";
import { TBatch } from "./batch.interface";
import { BatchModel } from "./batch.model";

//Insert Batch
const insertBatchIntoDB = async (batchData: TBatch) => {
  const result = await BatchModel.create(batchData);
  return result;
};

///Get batch
const getAllBatchFromDB = async () => {
  const res = await BatchModel.find();
  return res;
};

//delete btch
const deleteBatchFromDB = async (batchId: string) => {
  const result = await BatchModel.findByIdAndDelete({ _id: batchId });
  return result;
};

//Update batch
const updateBatchFromDB = async (batchId: string, payload: TBatch) => {
  const result = await BatchModel.findByIdAndUpdate({ _id: batchId }, payload, {
    new: true,
  });
  return result;
};

export const BatchService = {
  insertBatchIntoDB,
  getAllBatchFromDB,
  deleteBatchFromDB,
  updateBatchFromDB,
};
