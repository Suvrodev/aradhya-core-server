import { SortOrder } from "mongoose";
import AppError from "../../errors/AppError";

import { CourseModel } from "../Course/course.model";
import { TSchedule } from "./schedule.interface";
import { ScheduleModel } from "./schedule.model";

//Insert Schedule
const InsertScheduleIntoDB = async (scheduleData: TSchedule) => {
  const { courseRef } = scheduleData;
  console.log("Course ref: ", courseRef);
  const isCourseExists = await CourseModel.findOne({ _id: courseRef });
  console.log("is Course exists: ", isCourseExists);
  if (!isCourseExists) {
    throw new AppError(404, "Reference Course is not Exists");
  }
  const result = await ScheduleModel.create(scheduleData);
  return result;
};

///Get Needed Schedule according to course
const getAllScheduleFromDB = async (courseRefId: string) => {
  const res = await ScheduleModel.find({ courseRef: courseRefId });
  return res;
};

//delete Schedule
const deleteScheduleFromDB = async (scheduleId: string) => {
  const result = await ScheduleModel.findByIdAndDelete({ _id: scheduleId });
  return result;
};

//Update Schedule
const updateScheduleFromDB = async (scheduleId: string, payload: TSchedule) => {
  const result = await ScheduleModel.findByIdAndUpdate(
    { _id: scheduleId },
    payload,
    {
      new: true,
    }
  );
  return result;
};

export const ScheduleService = {
  InsertScheduleIntoDB,
  getAllScheduleFromDB,
  deleteScheduleFromDB,
  updateScheduleFromDB,
};
