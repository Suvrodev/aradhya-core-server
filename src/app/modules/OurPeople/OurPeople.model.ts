import { Schema, model, connect, Types } from "mongoose";
import { TOurPeople } from "./OurPeople.interface";

const OurPeopleSchema: Schema = new Schema<TOurPeople>(
  {
    instructorId: {
      type: String,
      required: [true, "Instructor id is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
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
    youtube: {
      type: String,
      default: "",
    },
    order: {
      type: Number,
      default: 0,
    },
    specializedArea: {
      type: String,
      default: "",
    },
    workExperience: {
      type: String,
      default: "",
    },
    education: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const OurPeopleModel = model<TOurPeople>("OurPeople", OurPeopleSchema);
