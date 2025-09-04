"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.buildJwtPayload = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../../config"));
const buildJwtPayload = (user) => ({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    isBlocked: user.isBlocked,
    studentId: user.studentId,
    phone: user.phone,
    image: user.image,
});
exports.buildJwtPayload = buildJwtPayload;
const generateToken = (jwtPayload) => {
    const res = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.jwt_access_token, {
        expiresIn: "30d",
    });
    return res;
};
exports.generateToken = generateToken;
