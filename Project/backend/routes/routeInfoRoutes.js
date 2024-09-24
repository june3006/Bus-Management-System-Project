import express from "express";
import {
  getAllSchedules,
  createSchedule,
  updateSchedule,
  deleteSchedule,
} from "../controllers/schedulesController.js";

const router = express.Router();

// Route lấy tất cả các lịch trình
router.get("/", getAllSchedules);

// Route tạo mới một lịch trình
router.post("/", createSchedule);

// Route cập nhật một lịch trình theo ID
router.put("/:id", updateSchedule);

// Route xóa một lịch trình theo ID
router.delete("/:id", deleteSchedule);

export default router;
