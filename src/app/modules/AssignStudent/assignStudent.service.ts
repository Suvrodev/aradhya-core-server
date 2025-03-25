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

// Get all Assign Student with search & filter (paymentGateWay + status) and sort
const getAllAssignSudentFromDB = async (
  search?: string,
  paymentGateWay?: string,
  status?: string,
  sort?: string
) => {
  const filter: any = {};

  // Search condition (status বাদ)
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

    // If search is a number, search in coursePrice, finalPrice etc.
    if (!isNaN(Number(search))) {
      filter.$or.push(
        { coursePrice: Number(search) },
        { courseDiscount: Number(search) },
        { promoPercent: Number(search) },
        { finalPrice: Number(search) }
      );
    }
  }

  // PaymentGateway filter
  if (paymentGateWay) {
    filter.paymentGateWay = paymentGateWay;
  }

  // Status filter
  if (status) {
    filter.status = status === "true"; // "true" means true, else false
  }

  // Sorting by createdAt
  let sortCriteria = {};
  if (sort) {
    sortCriteria = { createdAt: sort === "asc" ? 1 : -1 }; // ASC or DESC
  } else {
    sortCriteria = { createdAt: -1 }; // Default: DESCENDING order
  }

  const result = await AssignStudentModel.find(filter).sort(sortCriteria);
  return result;
};

// Get specific Assign Student
const getSpecificAssignStudentFromDB = async (assignId: string) => {
  const result = await AssignStudentModel.findOne({ _id: assignId });
  return result;
};

// Get specific Assign Student
const getOwnCourseOfSAssignStudentFromDB = async (studentEmail: string) => {
  console.log("student Email:", studentEmail);
  const result = await AssignStudentModel.find({
    studentEmail: studentEmail,
    status: true,
  });
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
  console.log("Assign id: ", assignId);
  console.log("Payload: ", payload);
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
  getOwnCourseOfSAssignStudentFromDB,
  deleteAssignStudentFromDB,
  updateAssignStudetFromDB,
};
