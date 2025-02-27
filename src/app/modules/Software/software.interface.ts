import { Schema, model, connect, Types } from "mongoose";

export type TSoftware = {
  courseRef: string;
  softwareName: string;
  softwareImage: string;
};
