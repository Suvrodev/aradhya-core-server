import { NextFunction, Request, RequestHandler, Response } from "express";
import AppError from "../../errors/AppError";
import { CurriculamServices } from "./courseCurriculum.service";

//Insert Curriculam
const insertCurriculum: RequestHandler = async (req, res, next) => {
  try {
    const curriculum = req.body;
    console.log("Come Curriculum: ", curriculum);
    const result = await CurriculamServices.createCurriculum(curriculum);

    //Send Response
    res.status(201).json({
      message: "Curriculam data inserted successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Get All Curriculum
const getAllCurriculumAccordingToCourse: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { courseRef } = req?.params;
    // console.log("courseRef-----------------: ", courseRef);
    const result = await CurriculamServices.getAllCurriculumFromDB(
      courseRef as string
    );
    res.status(200).json({
      message: "Curriculum Retrive successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Delete Curriculum
const deleteCurriculum: RequestHandler = async (req, res, next) => {
  try {
    const curriculumId = req.params.curriculumId;
    console.log("Software id-----------------: ", curriculumId);
    const result = await CurriculamServices.deleteCurriculumFromDB(
      curriculumId
    );
    //Send Response
    res.status(200).json({
      message: "Curriculum deleted successfully",
      status: true,
      data: {},
    });
  } catch (error: any) {
    next(error);
  }
};

//Update curriculum
const updateCurriculum: RequestHandler = async (req, res, next) => {
  try {
    const curriculumId = req.params.curriculumId;
    const updateCurriculumData = req.body;
    const result = await CurriculamServices.updateCurriculumFromDB(
      curriculumId,
      updateCurriculumData
    );

    //Send Response
    res.status(200).json({
      message: "Curriculum updated successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const CurriculumController = {
  insertCurriculum,
  getAllCurriculumAccordingToCourse,
  deleteCurriculum,
  updateCurriculum,
};
