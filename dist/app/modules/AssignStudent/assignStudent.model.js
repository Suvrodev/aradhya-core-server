"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignStudentModel = void 0;
const mongoose_1 = require("mongoose");
// Create Mongoose Schema
const AssignStudentSchema = new mongoose_1.Schema({
    studentId: {
        type: String,
        required: [true, "Student id is required"],
    },
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    phone: {
        type: String,
        required: [true, "Phone is required"],
    },
    courseId: {
        type: String,
        required: [true, "courseId is required"],
    },
    batchId: {
        type: String,
        required: [true, "batchId is required"],
    },
    transactionId: {
        type: String,
        required: [true, "transactionId is required"],
    },
}, { timestamps: true });
exports.AssignStudentModel = (0, mongoose_1.model)("assignStudent", AssignStudentSchema);
