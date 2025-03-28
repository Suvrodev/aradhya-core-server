import { Schema, model, connect, Types } from "mongoose";
import { TAssignStudent } from "./assignStudent.interface";

// Create Mongoose Schema
const AssignStudentSchema: Schema = new Schema<TAssignStudent>(
  {
    studentId: {
      type: String,
      required: [true, "Student id is required"],
    },
    studentName: {
      type: String,
      required: [true, "Student Name is required"],
    },
    studentEmail: {
      type: String,
      required: [true, "Student Email is required"],
    },
    studentPhone: {
      type: String,
      required: [true, "Student Phone is required"],
    },
    courseId: {
      type: String,
      required: [true, "courseId is required"],
    },
    batchId: {
      type: String,
      required: [true, "batchId is required"],
    },
    coursePrice: {
      type: Number,
      required: [true, "coursePrice is required"],
    },
    courseDiscount: {
      type: Number,
      required: [true, "courseDiscount is required"],
    },
    promoCodeStatus: {
      type: String,
      required: [true, "promoCodeStatus is required"],
    },
    promoCode: {
      type: String,
    },
    appliedpromoCode: {
      type: String,
    },
    promoPercent: {
      type: Number,
    },
    finalPrice: {
      type: Number,
      required: [true, "promoCode is required"],
    },
    // paymentGateWay: {
    //   type: String,
    //   required: [true, "Payment Gateway is required"],
    // },

    transactionId: {
      type: String,
      required: [true, "transactionId is required"],
    },
    checkTransactionId: { type: String },
    transactionMobileNumber: {
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
