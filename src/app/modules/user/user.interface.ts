import { Schema, model, connect } from "mongoose";

export type TUser = {
  studentId: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  image?: string;
  gender: string;
  location?: string;
  role: "admin" | "student";
  isBlocked: boolean;
};
