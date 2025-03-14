import { NextFunction, Request, RequestHandler, Response } from "express";
import AppError from "../../errors/AppError";
import { AssignStudentServices } from "./assignStudent.service";

//Insert Assign Student
const insertAssignStundet: RequestHandler = async (req, res, next) => {
  try {
    const assignStudent = req.body;
    console.log("Come AssignStudent: ", assignStudent);
    const result = await AssignStudentServices.createAssignStudentIntoDB(
      assignStudent
    );

    //Send Response
    res.status(201).json({
      message: "Student Assign successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Assign student with search
const getAllAssignStudent: RequestHandler = async (req, res, next) => {
  try {
    const search = req.query.search as string; // Get search parameter
    const result = await AssignStudentServices.getAllAssignSudentFromDB(search);

    res.status(200).json({
      message: "Assign Student Retrieved successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Get Specific Assign student
const getSpecificAssignStudent: RequestHandler = async (req, res, next) => {
  try {
    const assignId = req?.params?.assignId;
    const result = await AssignStudentServices.getSpecificAssignStudentFromDB(
      assignId
    );
    res.status(200).json({
      message: "Assign Student Retrive successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Delete Assign
const deleteAssignStudent: RequestHandler = async (req, res, next) => {
  try {
    const assignId = req?.params?.assignId;
    console.log("Assign id-----------------: ", assignId);
    const result = await AssignStudentServices.deleteAssignStudentFromDB(
      assignId
    );
    //Send Response
    res.status(200).json({
      message: "Assign Student deleted successfully",
      status: true,
      data: {},
    });
  } catch (error: any) {
    next(error);
  }
};

//Update AssignStudent
const updateAssignStudent: RequestHandler = async (req, res, next) => {
  try {
    const assignId = req.params.batchId;
    const updateAssignData = req.body;

    const result = await AssignStudentServices.updateAssignStudetFromDB(
      assignId,
      updateAssignData
    );

    //Send Response
    res.status(200).json({
      message: "Assign Student updated successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AssignStudentController = {
  insertAssignStundet,
  getAllAssignStudent,
  getSpecificAssignStudent,
  deleteAssignStudent,
  updateAssignStudent,
};
