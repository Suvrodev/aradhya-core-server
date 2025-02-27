import { Schema, model, connect } from "mongoose";

import { TCurriculum } from "./courseCurriculum.interface";

const CurriculumSchema = new Schema<TCurriculum>(
  {
    title: { type: String, required: [true, "Curriculum title is required"] },
    courseRef: {
      type: String,
      required: [true, "Course reference is required"],
    },
  },
  { timestamps: true }
);

export const CurriculumModel = model<TCurriculum>(
  "Curriculum",
  CurriculumSchema
);
