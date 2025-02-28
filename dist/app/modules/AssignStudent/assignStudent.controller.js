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
exports.AssignStudentController = void 0;
const assignStudent_service_1 = require("./assignStudent.service");
//Insert Assign Student
const insertAssignStundet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const assignStudent = req.body;
        console.log("Come AssignStudent: ", assignStudent);
        const result = yield assignStudent_service_1.AssignStudentServices.createAssignStudentIntoDB(assignStudent);
        //Send Response
        res.status(201).json({
            message: "Student Assign successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get All Assign student
const getAllAssignStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield assignStudent_service_1.AssignStudentServices.getAllAssignSudentFromDB();
        res.status(200).json({
            message: "Assign Student Retrive successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get Specific Assign student
const getSpecificAssignStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const assignId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.assignId;
        const result = yield assignStudent_service_1.AssignStudentServices.getSpecificAssignStudentFromDB(assignId);
        res.status(200).json({
            message: "Assign Student Retrive successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Delete Assign
const deleteAssignStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const assignId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.assignId;
        console.log("Assign id-----------------: ", assignId);
        const result = yield assignStudent_service_1.AssignStudentServices.deleteAssignStudentFromDB(assignId);
        //Send Response
        res.status(200).json({
            message: "Assign Student deleted successfully",
            status: true,
            data: {},
        });
    }
    catch (error) {
        next(error);
    }
});
//Update AssignStudent
const updateAssignStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const assignId = req.params.batchId;
        const updateAssignData = req.body;
        const result = yield assignStudent_service_1.AssignStudentServices.updateAssignStudetFromDB(assignId, updateAssignData);
        //Send Response
        res.status(200).json({
            message: "Assign Student updated successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.AssignStudentController = {
    insertAssignStundet,
    getAllAssignStudent,
    getSpecificAssignStudent,
    deleteAssignStudent,
    updateAssignStudent,
};
