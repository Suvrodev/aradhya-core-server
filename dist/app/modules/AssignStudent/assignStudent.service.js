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
exports.AssignStudentServices = void 0;
const assignStudent_model_1 = require("./assignStudent.model");
//Insert AssignStudent
const createAssignStudentIntoDB = (assignStudent) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Assign Student: ", assignStudent);
    const result = yield assignStudent_model_1.AssignStudentModel.create(assignStudent);
    return result;
});
// Get all Assign Student
const getAllAssignSudentFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield assignStudent_model_1.AssignStudentModel.find();
    return result;
});
// Get specific Assign Student
const getSpecificAssignStudentFromDB = (assignId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield assignStudent_model_1.AssignStudentModel.findOne({ _id: assignId });
    return result;
});
//delete AssignStudent
const deleteAssignStudentFromDB = (assignId) => __awaiter(void 0, void 0, void 0, function* () {
    //main work
    const result = yield assignStudent_model_1.AssignStudentModel.findByIdAndDelete({ _id: assignId });
    return result;
});
//update Course
const updateAssignStudetFromDB = (assignId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield assignStudent_model_1.AssignStudentModel.findByIdAndUpdate({ _id: assignId }, payload, {
        new: true,
    });
    return result;
});
exports.AssignStudentServices = {
    createAssignStudentIntoDB,
    getAllAssignSudentFromDB,
    getSpecificAssignStudentFromDB,
    deleteAssignStudentFromDB,
    updateAssignStudetFromDB,
};
