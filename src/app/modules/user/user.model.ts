import { Schema, model, connect } from "mongoose";
import bcrypt from "bcrypt";
import { TUser } from "./user.interface";
import config from "../../config";
import { NextFunction } from "express";

const userSchema = new Schema<TUser>(
  {
    studentId: {
      type: String,
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
    image: { type: String },
    gender: { type: String },
    location: { type: String },
    role: {
      type: String,
      enum: {
        values: ["admin", "student"],
        message: "{VALUE} is not valid. Role can only be either user or admin",
      },
      default: "student",
    },
    isBlocked: {
      type: Boolean,
      default: false,
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

//Pre Document middleware for Bycript Password
// userSchema.pre("save", async function (next) {
//   const user = this;
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds)
//   );
//   next();
//   // console.log("Now This: ", this);
// });

export const userModel = model<TUser>("users", userSchema);
