import { NextFunction, Request, RequestHandler, Response } from "express";
import AppError from "../../errors/AppError";
import { ScheduleService } from "./schedule.service";

//Insert Schedule
const insertSchedule: RequestHandler = async (req, res, next) => {
  try {
    const schedule = req.body;
    console.log("Come schedule: ", schedule);
    const result = await ScheduleService.InsertScheduleIntoDB(schedule);

    //Send Response
    res.status(201).json({
      message: "schedule data inserted successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Get All Shcedule
const getAllScheduleAccordingToCourse: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { courseRef } = req?.params;
    // console.log("courseRef-----------------: ", courseRef);
    const result = await ScheduleService.getAllScheduleFromDB(
      courseRef as string
    );
    res.status(200).json({
      message: "Schedule Retrive successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Delete Schedule
const deleteSchedule: RequestHandler = async (req, res, next) => {
  try {
    const scheduleId = req.params.scheduleId;
    console.log("schedule id-----------------: ", scheduleId);
    const result = await ScheduleService.deleteScheduleFromDB(scheduleId);
    //Send Response
    res.status(200).json({
      message: "Schedule deleted successfully",
      status: true,
      data: {},
    });
  } catch (error: any) {
    next(error);
  }
};

//Update Schedule
const updateSchedule: RequestHandler = async (req, res, next) => {
  try {
    const scheduleId = req.params.scheduleId;
    const updateScheduleData = req.body;
    console.log("Schedule id: ", scheduleId);
    console.log("update schedule data: ", updateScheduleData);
    const result = await ScheduleService.updateScheduleFromDB(
      scheduleId,
      updateScheduleData
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

export const ScheduleController = {
  insertSchedule,
  getAllScheduleAccordingToCourse,
  deleteSchedule,
  updateSchedule,
};
