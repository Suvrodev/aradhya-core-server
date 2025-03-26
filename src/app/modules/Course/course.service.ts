import AppError from "../../errors/AppError";
import { TCourse } from "./course.interface";
import { CourseModel } from "./course.model";

//Insert Course
const createCourseIntoDB = async (courseData: TCourse) => {
  console.log("Course Data: ", courseData);

  const isExistId = await CourseModel.findOne({
    courseId: courseData?.courseId,
  });
  if (isExistId) {
    throw new AppError(400, "This Course id already exists");
  }

  const result = await CourseModel.create(courseData);
  return result;
};

// Get all Course
const getAllCourseFromDB = async () => {
  const result = await CourseModel.find({ courseExists: "yes" }).select(
    "_id courseId courseTitle courseImage courseClassNumber courseProjectNumber courseDuration courseExists"
  );
  return result;
};

// Get all Course By Admin
const getAllCourseByAdminFromDB = async () => {
  const result = await CourseModel.find().select(
    "_id courseId courseTitle courseImage courseClassNumber courseProjectNumber courseExists"
  );
  return result;
};

// Get specific Course
const getSpecificCourseFromDB = async (courseId: string) => {
  const result = await CourseModel.findOne({ courseId: courseId });
  return result;
};

/**
 * Home page
 */
// Get specific Servcie Course
const getSpecificServiceCourseFromDB = async (serviceId: string) => {
  let result;
  if (serviceId == "0") {
    result = await CourseModel.find({ courseExists: "yes" }).select(
      "courseTitle courseImage courseId courseClassNumber courseProjectNumber courseDuration courseDiscount"
    );
  } else {
    result = await CourseModel.find({
      refServiceId: serviceId,
      courseExists: "yes",
    }).select(
      "courseTitle courseImage courseClassNumber courseProjectNumber courseDuration courseDiscount"
    );
  }
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
  getAllCourseByAdminFromDB,
  getSpecificCourseFromDB,
  getSpecificServiceCourseFromDB,
  deleteCourseFromDB,
  updateCourseFromDB,
};
