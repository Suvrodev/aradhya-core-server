import { Schema, model, connect } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../config";
import { NextFunction } from "express";
import { TInstructor } from "./instractor.interface";

const instructorSchema = new Schema<TInstructor>(
  {
    instructorId: {
      type: Number,
      trim: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone Number is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true, // Ensures uniqueness in the database
      lowercase: true,
      trim: true,
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please enter a valid email address",
      ], // Validates proper email format
    },
    password: {
      type: String,
      required: [true, "Password Must be required"],
      maxlength: [10, "Password can not be more than 10 character"],
    },
    image: {
      type: String,
      default: "https://i.ibb.co/d4rvmWjR/logged-User.png",
    },
    gender: { type: String },
    ageRange: { type: String },
    deviceType: { type: String },
    internetType: { type: String },
    areaType: { type: String },
    presentAddress: { type: String },
    permanentAddress: { type: String },
    currentEducation: { type: String },
    educationInstitute: { type: String },
    facebookUrl: { type: String },
    twitterUrl: { type: String },
    linkedinUrl: { type: String },
    githubUrl: { type: String },
    whatsappNumber: { type: String },
    role: {
      type: String,
      required: [true, "Role is required"],
      default: "instructor",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    passwordResetCode: {
      type: String,
      default: "123",
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    toJSON: {
      transform: function (_doc, ret) {
        // Remove sensitive or unnecessary fields
        delete ret.password;
        // delete ret.role;
        // delete ret.isBlocked;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
      },
    },
  }
);

export const instructorModel = model<TInstructor>(
  "instructor",
  instructorSchema
);
