import express from "express";
import { SoftwareController } from "./software.controller";

const router = express.Router();

//will call controller function
router.post("/", SoftwareController.insertSoftware);
router.get("/:courseRef", SoftwareController.getAllSoftwareAccordingToCourse);
router.delete("/:softwareId", SoftwareController.deleteSoftware);
router.patch("/:softwareId", SoftwareController.updateSoftware);
//Admin
// router.delete("/:productId", auth("admin"), BookControllers.deleteBook);
// router.put("/:productId", auth("admin"), BookControllers.updateBook);
// router.get("/admin/getbook", auth("admin"), BookControllers.getAllBookByAdmin);

export const SoftwareRoutes = router;
