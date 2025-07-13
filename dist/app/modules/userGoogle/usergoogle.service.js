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
exports.userGoogleServices = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_model_1 = require("../user/user.model");
const config_1 = __importDefault(require("../../config"));
const generateUserId_1 = require("../user/generateUserId");
///Create User into db by Google Login
const registerUserIntoDBByGoogle = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("------------------------------------");
    console.log("Payload: ", payload);
    const email = payload === null || payload === void 0 ? void 0 : payload.email;
    let user = yield user_model_1.userModel.findOne({ email });
    console.log("------------------------------------");
    console.log("User: ", user);
    if (!user) {
        const studentId = yield (0, generateUserId_1.generateUserId)();
        if (!studentId) {
            throw new AppError_1.default(400, "Bad request for user id");
        }
        payload.studentId = studentId;
        payload.role = "student";
        user = yield user_model_1.userModel.create(payload);
    }
    // ✅ Ensure user is not null
    if (!user) {
        throw new AppError_1.default(500, "User could not be created or found");
    }
    const jwtPayload = {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        isBlocked: user.isBlocked,
        studentId: user.studentId,
        phone: user.phone,
        image: user.image,
    };
    const accessToken = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.jwt_access_token, {
        expiresIn: "30d",
    });
    return {
        accessToken,
    };
});
exports.userGoogleServices = {
    registerUserIntoDBByGoogle,
};
