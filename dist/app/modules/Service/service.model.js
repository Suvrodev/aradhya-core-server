"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceModel = void 0;
const mongoose_1 = require("mongoose");
const serviceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    image: {
        type: String,
        trim: true,
    },
    serviceId: {
        type: String,
        required: [true, "Service id is required"],
        trim: true,
    },
}, {
    timestamps: true,
});
exports.ServiceModel = (0, mongoose_1.model)("service", serviceSchema);
