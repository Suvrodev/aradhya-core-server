import { Schema, model, connect } from "mongoose";

import { TCurriculum } from "./courseCurriculum.interface";

const CurriculumSchema = new Schema<TCurriculum>(
  {
    title: { type: String, required: [true, "Curriculum title is required"] },

    courseId: {
      type: String,
      required: [true, "Course ref id is required"],
    },
    order: { type: Number, required: [true, "Curriculum order is required"] },
  },
  { timestamps: true }
);

export const CurriculumModel = model<TCurriculum>(
  "Curriculum",
  CurriculumSchema
);
