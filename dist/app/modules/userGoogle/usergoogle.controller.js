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
exports.userGoogleControllers = void 0;
const usergoogle_service_1 = require("./usergoogle.service");
///Register User By Google
const registerUserByGoogle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const result = yield usergoogle_service_1.userGoogleServices.registerUserIntoDBByGoogle(userData);
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
            data: result === null || result === void 0 ? void 0 : result.accessToken,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.userGoogleControllers = {
    registerUserByGoogle,
};
