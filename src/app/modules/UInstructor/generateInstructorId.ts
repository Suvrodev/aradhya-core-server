import { instructorModel } from "./instructor.model";

export const generateInstructorId = async () => {
  const totalRegisteredUser = await instructorModel.countDocuments();
  // If no users, start from 1
  const newInstructorId = totalRegisteredUser + 1;
  return newInstructorId;
};
