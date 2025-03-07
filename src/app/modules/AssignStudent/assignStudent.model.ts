import { Schema, model, connect, Types } from "mongoose";
import { TAssignStudent } from "./assignStudent.interface";

// Create Mongoose Schema
const AssignStudentSchema: Schema = new Schema<TAssignStudent>(
  {
    studentId: {
      type: String,
      required: [true, "Student id is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
    },
    courseId: {
      type: String,
      required: [true, "courseId is required"],
    },
    batchId: {
      type: String,
      required: [true, "batchId is required"],
    },

    transactionId: {
      type: String,
      required: [true, "transactionId is required"],
    },
    paymentNumber: {
      type: String,
    },
    status: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

export const AssignStudentModel = model<TAssignStudent>(
  "assignStudent",
  AssignStudentSchema
);
