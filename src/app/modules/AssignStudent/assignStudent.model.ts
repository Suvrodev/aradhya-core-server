import { Schema, model, connect, Types } from "mongoose";
import { TAssignStudent } from "./assignStudent.interface";

// Create Mongoose Schema
const AssignStudentSchema: Schema = new Schema<TAssignStudent>(
  {
    userRef: {
      type: Schema.Types.ObjectId,
      ref: "Student",
      required: [true, "Student reference is required"],
    },
    batchRef: {
      type: Schema.Types.ObjectId,
      ref: "Batch",
      required: [true, "Batch reference is required"],
    },
    courseRef: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: [true, "Course reference is required"],
    },
  },
  { timestamps: true }
);

export const AssignStudentModel = model<TAssignStudent>(
  "assignStudent",
  AssignStudentSchema
);
