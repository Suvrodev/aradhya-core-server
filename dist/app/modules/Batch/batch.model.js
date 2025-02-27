"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchModel = void 0;
const mongoose_1 = require("mongoose");
// Create Mongoose Schema
const batchSchema = new mongoose_1.Schema({
    batch: {
        type: String,
        required: [true, "Batch identifier is required"],
        unique: true,
        trim: true,
    },
    batchName: {
        type: String,
        required: [true, "Batch name is required"],
        trim: true,
    },
    start: {
        type: String,
        validate: {
            validator: function (value) {
                return !value || /^\d{4}-\d{2}-\d{2}$/.test(value);
            },
            message: "Start date must be in YYYY-MM-DD format",
        },
    },
    end: {
        type: String,
        validate: {
            validator: function (value) {
                return !value || /^\d{4}-\d{2}-\d{2}$/.test(value);
            },
            message: "End date must be in YYYY-MM-DD format",
        },
    },
}, { timestamps: true });
exports.BatchModel = (0, mongoose_1.model)("batch", batchSchema);
