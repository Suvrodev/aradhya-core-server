"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/Auth/auth.route");
const service_route_1 = require("../modules/Service/service.route");
const course_route_1 = require("../modules/Course/course.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/service",
        route: service_route_1.ServiceRoute,
    },
    {
        path: "/course",
        route: course_route_1.CourseRoute,
    },
    {
        path: "/auth",
        route: user_route_1.userRoutes,
    },
    {
        path: "/login",
        route: auth_route_1.AuthRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
