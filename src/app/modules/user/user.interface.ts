import { Schema, model, connect } from "mongoose";

export type TUser = {
  firstName: string;
  sureName: string;
  email: string;
  password: string;
  image?: string;
  gender: string;
  location?: string;
  role: "admin" | "user";
  isBlocked: boolean;
};
