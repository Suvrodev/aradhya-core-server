"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRoute = void 0;
const express_1 = __importDefault(require("express"));
const course_controller_1 = require("./course.controller");
const router = express_1.default.Router();
router.post("/", course_controller_1.CourseController.addCourse);
router.get("/", course_controller_1.CourseController.getAllCourse);
router.get("/:serviceId", course_controller_1.CourseController.getSpecificCourse);
router.delete("/:serviceId", course_controller_1.CourseController.deleteCourse);
router.patch("/:serviceId", course_controller_1.CourseController.updateCourse);
exports.CourseRoute = router;
