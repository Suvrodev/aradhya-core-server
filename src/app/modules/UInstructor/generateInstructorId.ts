// import { instructorModel } from "./instructor.model";

// export const generateInstructorId = async () => {
//   const totalRegisteredUser = await instructorModel.countDocuments();
//   // If no users, start from 1
//   const newInstructorId = totalRegisteredUser + 1;
//   return newInstructorId;
// };

import { instructorModel } from "./instructor.model";

export const generateInstructorId = async () => {
  const lastInstructor = await instructorModel
    .findOne()
    .sort({ instructorId: -1 })
    .select("instructorId");

  const maxInstructorId = Number(lastInstructor?.instructorId) || 0;
  const newInstructorId = maxInstructorId + 1;

  return newInstructorId;
};
