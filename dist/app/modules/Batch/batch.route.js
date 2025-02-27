"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchRoutes = void 0;
const express_1 = __importDefault(require("express"));
const batch_controller_1 = require("./batch.controller");
const router = express_1.default.Router();
//will call controller function
router.post("/", batch_controller_1.BatchController.insertBatch);
router.get("/", batch_controller_1.BatchController.getAllBatch);
router.delete("/:batchId", batch_controller_1.BatchController.deleteBatch);
router.patch("/:batchId", batch_controller_1.BatchController.updateBatch);
exports.BatchRoutes = router;
