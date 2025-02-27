import express from "express";
import { ScheduleController } from "./schedule.controller";

const router = express.Router();

//will call controller function
router.post("/", ScheduleController.insertSchedule);
router.get("/:courseRef", ScheduleController.getAllScheduleAccordingToCourse);
router.delete("/:scheduleId", ScheduleController.deleteSchedule);
router.patch("/:scheduleId", ScheduleController.updateSchedule);

export const ScheduleRoutes = router;
