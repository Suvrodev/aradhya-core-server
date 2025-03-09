import { Schema, model, connect, Types } from "mongoose";
import { TBatch } from "./batch.interface";

// Create Mongoose Schema
const batchSchema: Schema = new Schema<TBatch>(
  {
    batchId: {
      type: String,
      required: [true, "Batch id is required"],
      // unique: true,
      trim: true,
    },
    batchName: {
      type: String,
      trim: true,
    },
    underCourse: {
      type: String,
      required: [true, "Batch under which course is required"],
      trim: true,
    },
    batchStatus: {
      type: String,
      required: [true, "Batch status is required"],
      enum: {
        values: ["onGoing", "upComing", "end"],
        message: "Batch status must be one of: onGoing, upComing, ended",
      },
    },

    start: {
      type: String,
      required: [true, "Start date is required"],
      validate: {
        validator: function (value: string) {
          return !value || /^\d{4}-\d{2}-\d{2}$/.test(value);
        },
        message: "Start date must be in YYYY-MM-DD format",
      },
    },
    end: {
      type: String,
      validate: {
        validator: function (value: string) {
          return !value || /^\d{4}-\d{2}-\d{2}$/.test(value);
        },
        message: "End date must be in YYYY-MM-DD format",
      },
    },
  },
  { timestamps: true }
);

export const BatchModel = model<TBatch>("batch", batchSchema);
