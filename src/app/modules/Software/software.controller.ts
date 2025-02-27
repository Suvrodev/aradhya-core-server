import { NextFunction, Request, RequestHandler, Response } from "express";
import AppError from "../../errors/AppError";
import { SoftwareService } from "./software.service";

//Insert Software
const insertSoftware: RequestHandler = async (req, res, next) => {
  try {
    const software = req.body;
    console.log("Come Software: ", software);
    const result = await SoftwareService.InsertSoftwareIntoDB(software);

    //Send Response
    res.status(201).json({
      message: "Software data inserted successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Get All Software
const getAllSoftwareAccordingToCourse: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { courseRef } = req?.params;
    // console.log("courseRef-----------------: ", courseRef);
    const result = await SoftwareService.getAllSoftwareFromDB(
      courseRef as string
    );
    res.status(200).json({
      message: "Software Retrive successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Delete Software
const deleteSoftware: RequestHandler = async (req, res, next) => {
  try {
    const softwareId = req.params.softwareId;
    console.log("Software id-----------------: ", softwareId);
    const result = await SoftwareService.deleteSoftwareFromDB(softwareId);
    //Send Response
    res.status(200).json({
      message: "Software deleted successfully",
      status: true,
      data: {},
    });
  } catch (error: any) {
    next(error);
  }
};

//Update Software
const updateSoftware: RequestHandler = async (req, res, next) => {
  try {
    const softwareId = req.params.softwareId;
    const updateSoftwareData = req.body;
    const result = await SoftwareService.updateSoftwareFromDB(
      softwareId,
      updateSoftwareData
    );

    //Send Response
    res.status(200).json({
      message: "Software updated successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const SoftwareController = {
  insertSoftware,
  getAllSoftwareAccordingToCourse,
  deleteSoftware,
  updateSoftware,
};
