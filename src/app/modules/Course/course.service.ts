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
  const result = await CourseModel.find().select(
    "_id courseId courseTitle courseImage courseClassNumber courseProjectNumber"
  );
  return result;
};

// Get specific Course
const getSpecificCourseFromDB = async (courseId: string) => {
  const result = await CourseModel.findOne({ courseId: courseId });
  return result;
};
// Get specific Servcie Course
const getSpecificServiceCourseFromDB = async (serviceId: string) => {
  const result = await CourseModel.find({ refService: serviceId }).select(
    "courseTitle courseImage"
  );
  return result;
};

//delete Course
const deleteCourseFromDB = async (courseId: string) => {
  //main work
  console.log("course id******", courseId);
  const result = await CourseModel.deleteOne({ courseId: courseId });
  return result;
};

//update Course
const updateCourseFromDB = async (courseId: string, payload: TCourse) => {
  console.log("Course id::::::", courseId);
  console.log("Update Course Body: ", payload);
  const result = await CourseModel.findOneAndUpdate(
    { courseId: courseId },
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
  getSpecificServiceCourseFromDB,
  deleteCourseFromDB,
  updateCourseFromDB,
};
