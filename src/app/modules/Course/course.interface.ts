import { Types } from "mongoose";

export type TCourse = {
  refService: Types.ObjectId;
  refServiceId: string;
  courseId: string;
  courseTitle: string;
  courseImage: string;
  courseType: "basic" | "pro";
  courseDescription: string;
  coursePrice: number;
  courseDiscount?: number;
  courseDiscountReason?: string;
  courseCoupon?: string;
  courseCouponStatus?: boolean;
  courseYoutubeVideo?: string;
  courseClassNumber: number;
  courseStartDate: string;
  courseDuration: string;
  courseProjectNumber: number;
  courseReview?: number;
  courseSchedule: string;
  computerConfiguration: string;
  courseStatus: "onGoing" | "upComming";
  courseExists: boolean;
};
