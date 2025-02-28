"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignStudentModel = void 0;
const mongoose_1 = require("mongoose");
// Create Mongoose Schema
const AssignStudentSchema = new mongoose_1.Schema({
    userRef: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Student",
        required: [true, "Student reference is required"],
    },
    batchRef: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Batch",
        required: [true, "Batch reference is required"],
    },
    courseRef: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Course",
        required: [true, "Course reference is required"],
    },
}, { timestamps: true });
exports.AssignStudentModel = (0, mongoose_1.model)("assignStudent", AssignStudentSchema);
