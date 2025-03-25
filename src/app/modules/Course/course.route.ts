import express, { NextFunction, Request, Response } from "express";
import { CourseController } from "./course.controller";

const router = express.Router();

router.post("/", CourseController.addCourse);
router.get("/", CourseController.getAllCourse);
router.get("/admin/", CourseController.getAllCourseByAdmin);
router.get("/:courseId", CourseController.getSpecificCourse);
router.get("/in-Service/:serviceId", CourseController.getSpecificServiceCourse);
router.delete("/:courseId", CourseController.deleteCourse);
router.patch("/:courseId", CourseController.updateCourse);

export const CourseRoute = router;
