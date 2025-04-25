import { Types } from "mongoose";

export type TCourse = {
  refServiceId: string; // Keeping only the refServiceId
  courseId: string;
  courseTitle: string;
  courseImage: string;
  courseDescription: string;
  coursePrice: number;
  courseDiscount?: number;
  courseDiscountReason?: string;
  courseYoutubeVideo?: string;

  courseClassNumber: string;
  courseDuration: string;
  courseProjectNumber?: string;
  courseReview?: number;
  computerConfiguration: string;
  courseExists: string;
  kikipaschen: string[];
  courseCurriculum: string[];
  jobposition: string[];
  projects: string[];
  neededSoftware: { image: string; title: string }[];
  courseOrder?: number;
};
