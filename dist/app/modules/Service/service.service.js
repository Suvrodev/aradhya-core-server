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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const service_model_1 = require("./service.model");
///Create Service into db
const addServiceIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log("Payload: ", payload);
    const isServiceIdExists = yield service_model_1.ServiceModel.findOne({
        serviceId: payload.serviceId,
    });
    if (isServiceIdExists) {
        throw new AppError_1.default(400, "Service id is already exists");
    }
    const result = yield service_model_1.ServiceModel.create(payload);
    return result;
});
//Get All Service from DB
const getAllServiceFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.ServiceModel.find().sort({ order: 1 });
    return result;
});
//Get All Service from DB
const getSpecificServiceFromDB = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.ServiceModel.findOne({ _id: serviceId });
    return result;
});
//Delete Service from DB
const deleteServiceFromDB = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.ServiceModel.deleteOne({ serviceId: serviceId });
    return result;
});
//Update Service
const updatServiceIntoDBFromDB = (serviceId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log("User Id in service: ", userId);
    //   console.log("payload in service", payload);
    const result = yield service_model_1.ServiceModel.findByIdAndUpdate({ _id: serviceId }, payload, {
        new: true,
    });
    return result;
});
exports.serviceServices = {
    addServiceIntoDB,
    getAllServiceFromDB,
    getSpecificServiceFromDB,
    deleteServiceFromDB,
    updatServiceIntoDBFromDB,
};
