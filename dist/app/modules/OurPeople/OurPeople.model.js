"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OurPeopleModel = void 0;
const mongoose_1 = require("mongoose");
const OurPeopleSchema = new mongoose_1.Schema({
    image: {
        type: String,
        required: [true, "Image is required"],
    },
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    designation: {
        type: String,
        required: [true, "Designation is required"],
    },
    message: {
        type: String,
        maxlength: [200, "Message can be maximum 200 characters"],
        default: "",
    },
    course: {
        type: String,
        default: "",
    },
    facebook: {
        type: String,
        default: "",
    },
    portfolio: {
        type: String,
        default: "",
    },
    order: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });
exports.OurPeopleModel = (0, mongoose_1.model)("OurPeople", OurPeopleSchema);
