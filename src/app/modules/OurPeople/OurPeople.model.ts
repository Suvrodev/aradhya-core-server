import { Schema, model, connect, Types } from "mongoose";
import { TOurPeople } from "./OurPeople.interface";

const OurPeopleSchema: Schema = new Schema<TOurPeople>(
  {
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    designation: {
      type: String,
      required: [true, "Designation is required"],
    },
    message: {
      type: String,
      maxlength: [200, "Message can be maximum 200 characters"],
      default: "",
    },
    course: {
      type: String,
      default: "",
    },
    facebook: {
      type: String,
      default: "",
    },
    portfolio: {
      type: String,
      default: "",
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const OurPeopleModel = model<TOurPeople>("OurPeople", OurPeopleSchema);
