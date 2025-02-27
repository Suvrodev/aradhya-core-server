import { Schema, model } from "mongoose";
import { TService } from "./service.inrerface";

const serviceSchema = new Schema<TService>(
  {
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
