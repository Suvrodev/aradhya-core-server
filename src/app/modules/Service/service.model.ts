import { Schema, model } from "mongoose";
import { TService } from "./service.inrerface";

const serviceSchema = new Schema<TService>(
  {
    serviceId: {
      type: String,
      required: [true, "Service id is required"],
      unique: true,
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
  },
  {
    timestamps: true,
  }
);

export const ServiceModel = model<TService>("service", serviceSchema);
