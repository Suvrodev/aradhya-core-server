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
exports.BatchService = void 0;
const batch_model_1 = require("./batch.model");
//Insert Batch
const insertBatchIntoDB = (batchData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield batch_model_1.BatchModel.create(batchData);
    return result;
});
///Get batch
const getAllBatchFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield batch_model_1.BatchModel.find();
    return res;
});
///Get specific batch
const getSpecificBatchFromDB = (batchId) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield batch_model_1.BatchModel.findOne({ batchId: batchId });
    return res;
});
///Get Specific batch under course
const getSpecificBatchUnderCourseFromDB = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Check Course id: ", courseId);
    const res = yield batch_model_1.BatchModel.findOne({
        underCourse: courseId,
        batchStatus: "onGoing",
    });
    return res;
});
//delete btch
const deleteBatchFromDB = (batchId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield batch_model_1.BatchModel.deleteOne({ batchId: batchId });
    return result;
});
//Update batch
const updateBatchFromDB = (batchId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Update Batch");
    console.log("Batch id: ", batchId);
    console.log("Payload: ", payload);
    const result = yield batch_model_1.BatchModel.updateOne({ batchId: batchId }, payload, {
        new: true,
    });
    return result;
});
exports.BatchService = {
    insertBatchIntoDB,
    getAllBatchFromDB,
    getSpecificBatchFromDB,
    getSpecificBatchUnderCourseFromDB,
    deleteBatchFromDB,
    updateBatchFromDB,
};
