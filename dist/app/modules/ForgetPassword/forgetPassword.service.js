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
exports.ForgetPasswordService = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_model_1 = require("../user/user.model");
const senfForgetPasswordEmail_1 = require("./senfForgetPasswordEmail");
///add forget password
const addForgetPassword = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("------------------------------------------");
    console.log("Payload: ", payload);
    const isUserExists = yield user_model_1.userModel.findOne({ email: payload });
    if (!isUserExists) {
        throw new AppError_1.default(404, "User not Found");
    }
    const resetCode = Math.floor(100000 + Math.random() * 900000);
    const UpdatepasswordResetCode = yield user_model_1.userModel.updateOne({ email: payload }, { passwordResetCode: resetCode }, {
        new: true,
    });
    console.log("UpdatepasswordResetCode: ", UpdatepasswordResetCode);
    if (!UpdatepasswordResetCode) {
        return;
    }
    //Call this function for Email
    yield (0, senfForgetPasswordEmail_1.sendForgetPasswordEmail)(payload.toString(), resetCode.toString());
    return resetCode;
});
exports.ForgetPasswordService = {
    addForgetPassword,
};
