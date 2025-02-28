import { Types } from "mongoose";

export type TAssignStudent = {
  userRef: Types.ObjectId;
  batchRef: Types.ObjectId;
  courseRef: Types.ObjectId;
};
