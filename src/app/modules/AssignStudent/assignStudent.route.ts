import express, { NextFunction, Request, Response } from "express";
import { AssignStudentController } from "./assignStudent.controller";

const router = express.Router();

router.post("/", AssignStudentController.insertAssignStundet);
router.get("/", AssignStudentController.getAllAssignStudent);
router.get("/:assignId", AssignStudentController.getSpecificAssignStudent);
router.get(
  "/own-course/:studentEmail",
  AssignStudentController.getOwnCourseOfSAssignStudent
);
router.delete("/:assignId", AssignStudentController.deleteAssignStudent);
router.patch("/:assignId", AssignStudentController.updateAssignStudent);

export const AssignStudentRoute = router;
