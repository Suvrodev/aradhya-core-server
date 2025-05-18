import express, { NextFunction, Request, Response } from "express";
import { PromocodeController } from "./peomocode.controller";

const router = express.Router();

router.post("/", PromocodeController.addPromoCode);
router.get("/", PromocodeController.getAllPromoCode);
router.get("/:promoId", PromocodeController.getSpecificPromocode);
router.get(
  "/promocode/:promoCode",
  PromocodeController.getSpecificPromoBasedOnPromoCodeFromDB
);
router.delete("/:promoId", PromocodeController.deletePromocode);
router.patch("/:promoId", PromocodeController.updatePromocode);

export const PromocodeRoute = router;
