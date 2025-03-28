import express from "express";
import { BatchController } from "./batch.controller";

const router = express.Router();

//will call controller function
router.post("/", BatchController.insertBatch);
router.get("/", BatchController.getAllBatch);
router.get("/:batchId", BatchController.getSpecificBatch);

///get one  batch in Admin Pannel for update
router.get("/just-one/:batchId", BatchController.getJustOneBatch);

//get one upcomming batch in course detail
router.get(
  "/undercourse/upComing/:courseId",
  BatchController.getUpComingBatchUnderCourse
);

// get all batch based on Course (Admin pannel)
router.get(
  "/undercourse/:courseId",
  BatchController.getSpecificBatchUnderCourse
);
router.delete("/:batchId", BatchController.deleteBatch);
router.patch("/:batchId", BatchController.updateBatch);

export const BatchRoutes = router;
