import express from "express";
import { BatchController } from "./batch.controller";

const router = express.Router();

//will call controller function
router.post("/", BatchController.insertBatch);
router.get("/", BatchController.getAllBatch);
router.get(
  "/undercourse/:courseId",
  BatchController.getSpecificBatchUnderCourse
);
router.delete("/:batchId", BatchController.deleteBatch);
router.patch("/:batchId", BatchController.updateBatch);

export const BatchRoutes = router;
