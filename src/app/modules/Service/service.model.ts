import { Schema, model } from "mongoose";
import { TService } from "./service.inrerface";

const serviceSchema = new Schema<TService>(
  {
    serviceId: {
      type: String,
      required: [true, "Service id is required"],
      trim: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    order: {
      type: Number,
      trim: true,
      required: [true, "Order Number is required"],
    },
    serviceExists: {
      type: String,
      trim: true,
      required: [true, "Service Exists Must be Required"],
    },
  },
  {
    timestamps: true,
  }
);

export const ServiceModel = model<TService>("service", serviceSchema);
