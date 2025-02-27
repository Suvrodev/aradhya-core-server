"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModel = void 0;
const mongoose_1 = require("mongoose");
const CourseSchema = new mongoose_1.Schema({
    refService: {
        type: String,
        required: [true, "Reference service is required"],
    },
    courseTitle: { type: String, required: [true, "Course title is required"] },
    courseImage: {
        type: String,
        required: [true, "Course image URL is required"],
    },
    courseType: {
        type: String,
        enum: {
            values: ["basic", "pro"],
            message: "Course type must be either 'basic' or 'pro'",
        },
        required: [true, "Course type is required"],
    },
    courseDescription: {
        type: String,
        required: [true, "Course description is required"],
    },
    coursePrice: {
        type: Number,
        required: [true, "Course price is required"],
        min: [0, "Course price cannot be negative"],
    },
    courseDiscount: {
        type: Number,
        default: 0,
        min: [0, "Discount cannot be negative"],
    },
    courseDiscountReason: { type: String },
    courseCoupon: { type: String },
    courseCouponStatus: { type: Boolean, default: false },
    courseYoutubeVideo: { type: String },
    courseClassNumber: {
        type: Number,
        required: [true, "Number of classes is required"],
        min: [1, "Course must have at least one class"],
    },
    courseStartDate: {
        type: String,
        required: [true, "Course start date is required"],
    },
    courseDuration: {
        type: String,
        required: [true, "Course duration is required"],
    },
    courseProjectNumber: {
        type: Number,
        required: [true, "Number of projects is required"],
        min: [0, "Projects cannot be negative"],
    },
    courseReview: {
        type: Number,
        default: 0,
        min: [0, "Review score cannot be negative"],
    },
    courseSchedule: {
        type: String,
        required: [true, "Course Schedule is required"],
    },
    computerConfiguration: {
        type: String,
        required: [true, "Computer Configuration is required"],
    },
    courseStatus: {
        type: String,
        enum: {
            values: ["onGoing", "upComming"],
            message: "Course status must be 'onGoing' or 'upComming'",
        },
        required: [true, "Course status is required"],
    },
    courseExists: {
        type: Boolean,
        required: [true, "Course existence status is required"],
    },
}, { timestamps: true });
exports.CourseModel = (0, mongoose_1.model)("course", CourseSchema);
