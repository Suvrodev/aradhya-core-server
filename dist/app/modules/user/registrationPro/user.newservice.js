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
exports.userNewServices = void 0;
const AppError_1 = __importDefault(require("../../../errors/AppError"));
const generateUserId_1 = require("../generateUserId");
const user_model_1 = require("../user.model");
const updateUser_1 = require("./Function/updateUser");
const generateToken_1 = require("./Function/generateToken");
// helper: build jwt payload exactly like your google flow
///Create User into db
const newRegisterUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    console.log("------------------------------------------");
    console.log("User Payload for new registration: ", payload);
    let email = (_b = (_a = payload === null || payload === void 0 ? void 0 : payload.email) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.trim();
    if (!email)
        throw new AppError_1.default(400, "Email is required");
    let user = yield user_model_1.userModel.findOne({ email });
    console.log("Find User: ", user);
    // ----- CASE 1: User already exists -> update password from payload and login -----
    if (user) {
        console.log("Case-1");
        // if blocked, stop here (remove this if you want to allow)
        if (user.isBlocked) {
            throw new AppError_1.default(403, "User is blocked");
        }
        /**
         * Update start
         */
        const updateResult = yield (0, updateUser_1.updateUser)(email, payload);
        console.log("Update Result: ", updateResult);
        const againUser = yield user_model_1.userModel.findOne({ email });
        console.log("Again User: ", againUser);
        /**
         * Update end
         */
        const jwtPayload = (0, generateToken_1.buildJwtPayload)(againUser);
        const accessToken = (0, generateToken_1.generateToken)(jwtPayload);
        return {
            message: "Password updated & logged in",
            accessToken,
            user: jwtPayload,
        };
    }
    // ----- CASE 2: User don't exists -> Register and Login -----
    console.log("CASE-2------------------------");
    email = payload === null || payload === void 0 ? void 0 : payload.email;
    const studentId = yield (0, generateUserId_1.generateUserId)();
    console.log("Generated id : ", studentId);
    if (!studentId) {
        throw new AppError_1.default(400, "Bad request for user id");
    }
    payload.studentId = studentId;
    const createResult = yield user_model_1.userModel.create(payload);
    console.log("Creating Result: ", createResult);
    const jwtPayloadd = (0, generateToken_1.buildJwtPayload)(createResult);
    const accessTokenn = (0, generateToken_1.generateToken)(jwtPayloadd);
    return {
        message: "User Created",
        accessToken: accessTokenn,
        user: jwtPayloadd,
    };
});
exports.userNewServices = {
    newRegisterUserIntoDB,
};
