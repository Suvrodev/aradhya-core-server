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
exports.userControllers = void 0;
const user_service_1 = require("./user.service");
const AppError_1 = __importDefault(require("../../errors/AppError"));
///Register User
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const result = yield user_service_1.userServices.registerUserIntoDB(userData);
        if (!result) {
            res.status(400).json({
                success: true,
                message: "Unscuccessfull Register",
                statusCode: 400,
                data: result,
            });
        }
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get All User
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { search } = req.query;
        console.log("search: ", search);
        const result = yield user_service_1.userServices.getAllUser(search);
        res.status(201).json({
            success: true,
            message: "Users Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Get Specific User
const getSpecificUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
        const result = yield user_service_1.userServices.getSingleUserFromDB(id);
        res.status(201).json({
            success: true,
            message: "Users Retrived successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//delete  User
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
        const result = yield user_service_1.userServices.deleteUser(id);
        res.status(201).json({
            success: true,
            message: "Users Deleted successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//Update  User
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
        const body = req === null || req === void 0 ? void 0 : req.body;
        console.log("Come id: ", id);
        console.log("Body ", body);
        const result = yield user_service_1.userServices.updatUserIntoDB(id, body);
        res.status(201).json({
            success: true,
            message: "Users Updated successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
///Update Password
const updatePassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const userId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.userId;
        const userPassword = req.body;
        console.log("Logged user id : ", (_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b._id);
        console.log("come user id: ", userId);
        if (((_c = req === null || req === void 0 ? void 0 : req.user) === null || _c === void 0 ? void 0 : _c._id) !== userId) {
            throw new AppError_1.default(403, "You are not authorized");
        }
        const result = yield user_service_1.userServices.updatePasswordIntoDB(userId, userPassword);
        res.status(201).json({
            success: true,
            message: "Password Updated Successfully",
            statusCode: 201,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.userControllers = {
    registerUser,
    getAllUsers,
    deleteUser,
    updatePassword,
    updateUser,
    getSpecificUsers,
};
