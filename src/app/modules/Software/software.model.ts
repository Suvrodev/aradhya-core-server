import { Schema, model, connect, Types } from "mongoose";
import { TSoftware } from "./software.interface";

const softwareSchema = new Schema<TSoftware>(
  {
    courseRef: {
      type: String,
      required: [true, "Course Ref is required"],
    },
    softwareName: {
      type: String,
      required: [true, "Software name is required"],
    },
    softwareImage: {
      type: String,
      required: [true, "Software Image is required"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

export const SoftwareModel = model<TSoftware>("software", softwareSchema);
