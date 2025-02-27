import AppError from "../../errors/AppError";
import { TCourse } from "./course.interface";
import { CourseModel } from "./course.model";

//Insert Course
const createCourseIntoDB = async (courseData: TCourse) => {
  console.log("Course Data: ", courseData);
  const result = await CourseModel.create(courseData);
  return result;
};

// Get all Course
const getAllCourseFromDB = async () => {
  const result = await CourseModel.find();
  return result;
};

// Get specific Course
const getSpecificCourseFromDB = async (courseId: string) => {
  const result = await CourseModel.findOne({ _id: courseId });
  return result;
};

//delete Course
const deleteCourseFromDB = async (courseId: string) => {
  //main work
  const result = await CourseModel.findByIdAndDelete({ _id: courseId });
  return result;
};

//update Course
const updateCourseFromDB = async (courseId: string, payload: TCourse) => {
  const result = await CourseModel.findByIdAndUpdate(
    { _id: courseId },
    payload,
    {
      new: true,
    }
  );
  return result;
};

export const CourseServices = {
  createCourseIntoDB,
  getAllCourseFromDB,
  getSpecificCourseFromDB,
  deleteCourseFromDB,
  updateCourseFromDB,
};
