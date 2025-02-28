import { TAssignStudent } from "./assignStudent.interface";
import { AssignStudentModel } from "./assignStudent.model";

//Insert AssignStudent
const createAssignStudentIntoDB = async (assignStudent: TAssignStudent) => {
  console.log("Assign Student: ", assignStudent);
  const result = await AssignStudentModel.create(assignStudent);
  return result;
};

// Get all Assign Student
const getAllAssignSudentFromDB = async () => {
  const result = await AssignStudentModel.find();
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
