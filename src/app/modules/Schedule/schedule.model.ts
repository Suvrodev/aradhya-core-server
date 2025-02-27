import { Schema, model, connect, Types } from "mongoose";
import { TSchedule } from "./schedule.interface";

const scheduleSchema = new Schema<TSchedule>(
  {
    courseRef: {
      type: String,
      required: [true, "Course Ref is required"],
    },
    date: {
      type: String,
      required: [true, "date is required"],
    },
    time: {
      type: String,
      required: [true, "Time is required"],
    },
    data: {
      type: String,
      required: [true, "Data is required"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

export const ScheduleModel = model<TSchedule>("schedule", scheduleSchema);
