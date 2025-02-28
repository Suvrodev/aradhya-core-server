"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseServices = void 0;
const course_model_1 = require("./course.model");
//Insert Course
const createCourseIntoDB = (courseData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Course Data: ", courseData);
    const result = yield course_model_1.CourseModel.create(courseData);
    return result;
});
// Get all Course
const getAllCourseFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.CourseModel.find();
    return result;
});
// Get specific Course
const getSpecificCourseFromDB = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.CourseModel.findOne({ _id: courseId });
    return result;
});
// Get specific Servcie Course
const getSpecificServiceCourseFromDB = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.CourseModel.find({ refService: serviceId });
    return result;
});
//delete Course
const deleteCourseFromDB = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    //main work
    const result = yield course_model_1.CourseModel.findByIdAndDelete({ _id: courseId });
    return result;
});
//update Course
const updateCourseFromDB = (courseId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.CourseModel.findByIdAndUpdate({ _id: courseId }, payload, {
        new: true,
    });
    return result;
});
exports.CourseServices = {
    createCourseIntoDB,
    getAllCourseFromDB,
    getSpecificCourseFromDB,
    getSpecificServiceCourseFromDB,
    deleteCourseFromDB,
    updateCourseFromDB,
};
