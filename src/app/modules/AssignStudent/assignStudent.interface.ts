import { Types } from "mongoose";

export type TAssignStudent = {
  studentId: string;
  name: string;
  email: string;
  phone: string;
  courseId: string;
  batchId: string;
  transactionId: string;
  paymentNumber: string;
  status: boolean;
};
