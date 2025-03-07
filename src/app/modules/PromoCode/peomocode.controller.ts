import { NextFunction, Request, RequestHandler, Response } from "express";
import { PromoCodeService } from "./promocode.service";

///Add Promocode
const addPromoCode: RequestHandler = async (req, res, next) => {
  try {
    const promoCodeData = req.body;
    console.log("Promocode data come: ", promoCodeData);
    const result = await PromoCodeService.addPromoCodeIntoDB(promoCodeData);

    res.status(201).json({
      success: true,
      message: "Promocode Added successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Get All Promocode
const getAllPromoCode: RequestHandler = async (req, res, next) => {
  try {
    const result = await PromoCodeService.getAllPromoCodeFromDB();
    res.status(201).json({
      success: true,
      message: "Promocode Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Get Specific Promocode
const getSpecificPromocode: RequestHandler = async (req, res, next) => {
  try {
    const promoId = req?.params?.promoId;
    console.log("promoId: ", promoId);
    const result = await PromoCodeService.getSpecificPromoFromDB(promoId);
    console.log("Result: ", result);
    res.status(201).json({
      success: true,
      message: "Promocode Retrived successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Delete Promocode
const deletePromocode: RequestHandler = async (req, res, next) => {
  try {
    const promoId = req?.params?.promoId;
    console.log("promoId: ", promoId);
    const result = await PromoCodeService.deletePromocodeFromDB(promoId);
    console.log("Result: ", result);
    res.status(201).json({
      success: true,
      message: "Promo code Deleted successfully",
      statusCode: 201,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//Update Promocode
const updatePromocode: RequestHandler = async (req, res, next) => {
  try {
    const promoId = req.params.promoId;
    const promoCodeBody = req.body;

    const result = await PromoCodeService.UpdatePromoCodeIntoDBFromDB(
      promoId,
      promoCodeBody
    );

    //Send Response
    res.status(200).json({
      message: "Promocode updated successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const PromocodeController = {
  addPromoCode,
  getAllPromoCode,
  getSpecificPromocode,
  deletePromocode,
  updatePromocode,
};
