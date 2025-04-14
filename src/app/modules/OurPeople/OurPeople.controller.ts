import { NextFunction, Request, RequestHandler, Response } from "express";
import { OurPeopleService } from "./OurPeople.service";

///Add  Our People
const addOurPeople: RequestHandler = async (req, res, next) => {
  try {
    const peopleData = req.body;
    console.log("People data come: ", peopleData);
    const result = await OurPeopleService.createOurPeopleIntoDB(peopleData);

    res.status(201).json({
      success: true,
      message: "Our People Added successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Get All Our People
const getAllOurPeople: RequestHandler = async (req, res, next) => {
  try {
    const result = await OurPeopleService.getAllOurPeopleFromDB();
    res.status(201).json({
      success: true,
      message: "Our People Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
//Get All Our People With message
const getAllOurPeopleWithMessage: RequestHandler = async (req, res, next) => {
  try {
    const result = await OurPeopleService.getAllOurPeopleWithMessageFromDB();
    res.status(201).json({
      success: true,
      message: "Our People Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Get Specific Our People
const getSpecificOurPeople: RequestHandler = async (req, res, next) => {
  try {
    const peopleId = req?.params?.peopleId;
    console.log("people id: ", peopleId);
    const result = await OurPeopleService.getSpecificOurPeopleFromDB(peopleId);
    // console.log("Result: ", result);
    res.status(201).json({
      success: true,
      message: "Our People Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Delete Our People
const deleteOurPeople: RequestHandler = async (req, res, next) => {
  try {
    const peopleId = req?.params?.peopleId;
    console.log("peopleId:=========== ", peopleId);
    const result = await OurPeopleService.deleteOurPeopleFromDB(peopleId);
    console.log("Result: ", result);
    res.status(201).json({
      success: true,
      message: "People Deleted successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Update Our People
const updateOurPeople: RequestHandler = async (req, res, next) => {
  try {
    const peopleId = req.params.peopleId;
    const people = req.body;

    const result = await OurPeopleService.updateOurPeopleFromDB(
      peopleId,
      people
    );

    //Send Response
    res.status(200).json({
      message: "People updated successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const PeopleController = {
  addOurPeople,
  getAllOurPeople,
  getAllOurPeopleWithMessage,
  getSpecificOurPeople,
  deleteOurPeople,
  updateOurPeople,
};
