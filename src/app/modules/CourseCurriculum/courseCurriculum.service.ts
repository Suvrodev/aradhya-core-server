import AppError from "../../errors/AppError";
import { CourseModel } from "../Course/course.model";
import { TCurriculum } from "./courseCurriculum.interface";
import { CurriculumModel } from "./courseCurriculum.model";

// Create Curriculum
const createCurriculum = async (curriculumData: TCurriculum) => {
  const { courseId } = curriculumData;
  console.log("Course ref--: ", courseId);
  console.log("Curriculum data: ", curriculumData);
  const isCourseExists = await CourseModel.findOne({
    courseId: courseId,
  });
  // console.log("is Course exists:-- ", isCourseExists);
  if (!isCourseExists) {
    throw new AppError(404, "Reference Course is not Exists");
  }

  const result = await CurriculumModel.create(curriculumData);
  return result;
};

///Get Needed Curriculum according to course
const getAllCurriculumFromDB = async (courseRefId: string) => {
  const res = await CurriculumModel.find({ courseId: courseRefId }).sort({
    order: 1,
  });
  return res;
};

//delete curriculum
const deleteCurriculumFromDB = async (curriculumId: string) => {
  const result = await CurriculumModel.findByIdAndDelete({ _id: curriculumId });
  return result;
};

//Update curriculum
const updateCurriculumFromDB = async (
  curriculumId: string,
  payload: TCurriculum
) => {
  //   console.log("User Id in service: ", userId);
  //   console.log("payload in service", payload);

  const result = await CurriculumModel.findByIdAndUpdate(
    { _id: curriculumId },
    payload,
    {
      new: true,
    }
  );
  return result;
};

export const CurriculamServices = {
  createCurriculum,
  getAllCurriculumFromDB,
  deleteCurriculumFromDB,
  updateCurriculumFromDB,
};
