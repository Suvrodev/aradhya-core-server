import { Schema, model, connect } from "mongoose";

export type TUser = {
  userId: string;
  firstName: string;
  sureName: string;
  phone: string;
  email: string;
  password: string;
  image?: string;
  gender: string;
  location?: string;
  role: "admin" | "user";
  isBlocked: boolean;
};
