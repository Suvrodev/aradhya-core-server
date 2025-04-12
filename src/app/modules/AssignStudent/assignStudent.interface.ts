import { Types } from "mongoose";

export type TAssignStudent = {
  studentId: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  courseId: string;
  batchId: string;
  batchName: string;
  coursePrice: number;
  courseDiscount: number;
  promoCodeStatus: string;
  promoCode: string;
  appliedpromoCode: string;
  promoPercent: number;
  finalPrice: number;
  // paymentGateWay: string;
  transactionId: string;
  checkTransactionId: string;
  transactionMobileNumber: string;
  status: boolean;
};
