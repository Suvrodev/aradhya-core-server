import express, { NextFunction, Request, Response } from "express";
import { CourseController } from "./course.controller";

const router = express.Router();

router.post("/", CourseController.addCourse);
router.get("/", CourseController.getAllCourse);
router.get("/:serviceId", CourseController.getSpecificCourse);
router.delete("/:serviceId", CourseController.deleteCourse);
router.patch("/:serviceId", CourseController.updateCourse);

export const CourseRoute = router;
