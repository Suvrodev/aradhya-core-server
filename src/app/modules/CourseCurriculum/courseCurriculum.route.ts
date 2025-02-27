import express from "express";
import { CurriculumController } from "./courseCurriculum.controller";

const router = express.Router();

//will call controller function
router.post("/", CurriculumController.insertCurriculum);
router.get(
  "/:courseRef",
  CurriculumController.getAllCurriculumAccordingToCourse
);
router.delete("/:curriculumId", CurriculumController.deleteCurriculum);
router.patch("/:curriculumId", CurriculumController.updateCurriculum);

export const CurriculumRoutes = router;
