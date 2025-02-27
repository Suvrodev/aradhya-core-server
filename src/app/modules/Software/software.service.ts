import { SortOrder } from "mongoose";
import AppError from "../../errors/AppError";
import { TSoftware } from "./software.interface";
import { CourseModel } from "../Course/course.model";
import { SoftwareModel } from "./software.model";

//Insert Software
const InsertSoftwareIntoDB = async (softwareData: TSoftware) => {
  const { courseRef } = softwareData;
  console.log("Course ref: ", courseRef);
  const isCourseExists = await CourseModel.findOne({ _id: courseRef });
  console.log("is Course exists: ", isCourseExists);
  if (!isCourseExists) {
    throw new AppError(404, "Reference Course is not Exists");
  }
  const result = await SoftwareModel.create(softwareData);
  return result;
};

///Get Needed Software according to course
const getAllSoftwareFromDB = async (courseRefId: string) => {
  const res = await SoftwareModel.find({ courseRef: courseRefId });
  return res;
};

//delete Software
const deleteSoftwareFromDB = async (softwareId: string) => {
  const result = await SoftwareModel.findByIdAndDelete({ _id: softwareId });
  return result;
};

//Update Software
const updateSoftwareFromDB = async (productId: string, payload: TSoftware) => {
  const result = await SoftwareModel.findByIdAndUpdate(
    { _id: productId },
    payload,
    {
      new: true,
    }
  );
  return result;
};

export const SoftwareService = {
  InsertSoftwareIntoDB,
  getAllSoftwareFromDB,
  deleteSoftwareFromDB,
  updateSoftwareFromDB,
};
