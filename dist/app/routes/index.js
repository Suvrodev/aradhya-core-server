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
const software_route_1 = require("../modules/Software/software.route");
const courseCurriculum_route_1 = require("../modules/CourseCurriculum/courseCurriculum.route");
const schedule_route_1 = require("../modules/Schedule/schedule.route");
const batch_route_1 = require("../modules/Batch/batch.route");
const assignStudent_route_1 = require("../modules/AssignStudent/assignStudent.route");
const blog_route_1 = require("../modules/Blog/blog.route");
const promocode_route_1 = require("../modules/PromoCode/promocode.route");
const forgetPassword_route_1 = require("../modules/ForgetPassword/forgetPassword.route");
const instructor_route_1 = require("../modules/UInstructor/instructor.route");
const authInstructor_route_1 = require("../modules/AuthInstructor/authInstructor.route");
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
        path: "/software",
        route: software_route_1.SoftwareRoutes,
    },
    {
        path: "/curriculum",
        route: courseCurriculum_route_1.CurriculumRoutes,
    },
    {
        path: "/schedule",
        route: schedule_route_1.ScheduleRoutes,
    },
    {
        path: "/batch",
        route: batch_route_1.BatchRoutes,
    },
    {
        path: "/assign",
        route: assignStudent_route_1.AssignStudentRoute,
    },
    {
        path: "/blog",
        route: blog_route_1.blogRoutes,
    },
    {
        path: "/promo",
        route: promocode_route_1.PromocodeRoute,
    },
    {
        path: "/auth",
        route: user_route_1.userRoutes,
    },
    {
        path: "/i-auth",
        route: instructor_route_1.instructorRoutes,
    },
    {
        path: "/login",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/i-login",
        route: authInstructor_route_1.AuthInstructorRoutes,
    },
    {
        path: "/forget-password",
        route: forgetPassword_route_1.ForgetPasswordRoute,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
