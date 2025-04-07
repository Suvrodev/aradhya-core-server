import { Schema, model, connect } from "mongoose";

export type TInstructor = {
  instructorId: Number;
  name: string;
  phone: string;
  email: string;
  password: string;
  image?: string;
  gender: string;
  ageRange: string;
  deviceType: string;
  internetType: string;
  areaType: string;
  presentAddress: string;
  permanentAddress: string;
  currentEducation: string;
  educationInstitute: string;
  facebookUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  whatsappNumber: string;
  role: "instructor";
  isBlocked: boolean;
  status: "enable" | "disable";
  passwordResetCode: string;
};
