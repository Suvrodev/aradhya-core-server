import { Schema, model } from "mongoose";
import { TPromocode } from "./promocode.interface";

const promoCodeSchma = new Schema<TPromocode>(
  {
    promoId: {
      type: String,
      required: [true, "Promo ID is required"],
      unique: true,
      trim: true,
    },
    promoCode: {
      type: String,
      required: [true, "Promo Code is required"],
      unique: true,
      trim: true,
      minlength: [3, "Promo Code must be at least 3 characters long"],
    },
    promoPercent: {
      type: Number,
      required: [true, "Promo Percent is required"],
      min: [1, "Promo Percent must be at least 1%"],
      max: [100, "Promo Percent cannot exceed 100%"],
    },
    promoStatus: {
      type: Boolean,
      required: [true, "Promo Status is required"],
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const promocodeModel = model<TPromocode>("promocode", promoCodeSchma);
