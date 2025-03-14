import { TAssignStudent } from "./assignStudent.interface";
import { AssignStudentModel } from "./assignStudent.model";

//Insert AssignStudent
const createAssignStudentIntoDB = async (assignStudent: TAssignStudent) => {
  console.log("Assign Student: ", assignStudent);
  const result = await AssignStudentModel.create(assignStudent);
  return result;
};

// // Get all Assign Student
// const getAllAssignSudentFromDB = async () => {
//   const result = await AssignStudentModel.find();
//   return result;
// };
// Get all Assign Student
// Get all Assign Students with search
// Get all Assign Students with search (status field removed)
const getAllAssignSudentFromDB = async (search?: string) => {
  const filter: any = {};

  if (search) {
    filter.$or = [
      { studentId: { $regex: search, $options: "i" } },
      { studentName: { $regex: search, $options: "i" } },
      { studentEmail: { $regex: search, $options: "i" } },
      { studentPhone: { $regex: search, $options: "i" } },
      { batchId: { $regex: search, $options: "i" } },
      { promoCode: { $regex: search, $options: "i" } },
      { transactionId: { $regex: search, $options: "i" } },
      { transactionMobileNumber: { $regex: search, $options: "i" } },
      { paymentGateWay: { $regex: search, $options: "i" } },
    ];

    // যদি সংখ্যা হয়, তাহলে `coursePrice`, `finalPrice` ইত্যাদিতে খুঁজবো
    if (!isNaN(Number(search))) {
      filter.$or.push(
        { coursePrice: Number(search) },
        { courseDiscount: Number(search) },
        { promoPercent: Number(search) },
        { finalPrice: Number(search) }
      );
    }
  }

  const result = await AssignStudentModel.find(filter);
  return result;
};

// Get specific Assign Student
const getSpecificAssignStudentFromDB = async (assignId: string) => {
  const result = await AssignStudentModel.findOne({ _id: assignId });
  return result;
};

//delete AssignStudent
const deleteAssignStudentFromDB = async (assignId: string) => {
  //main work
  const result = await AssignStudentModel.findByIdAndDelete({ _id: assignId });
  return result;
};

//update Course
const updateAssignStudetFromDB = async (
  assignId: string,
  payload: TAssignStudent
) => {
  const result = await AssignStudentModel.findByIdAndUpdate(
    { _id: assignId },
    payload,
    {
      new: true,
    }
  );
  return result;
};

export const AssignStudentServices = {
  createAssignStudentIntoDB,
  getAllAssignSudentFromDB,
  getSpecificAssignStudentFromDB,
  deleteAssignStudentFromDB,
  updateAssignStudetFromDB,
};
