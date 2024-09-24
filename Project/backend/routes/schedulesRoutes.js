// Import the express module to create route handlers
import express from "express";
// Import the schedule handling functions from the schedules controller
import {
  getAllSchedules,
  createSchedule,
  updateSchedule,
  deleteSchedule,
} from "../controllers/schedulesController.js";

const router = express.Router(); // Create a new router object for managing routes

/**
 * Route handlers for schedule management.
 * GET route to fetch all schedules.
 * POST route to create a new schedule.
 */
// Route to retrieve all schedule information using the GET method
router.get("/", getAllSchedules);
// Route to create a new schedule using the POST method
router.post("/", createSchedule);
router.put("/:id", updateSchedule);
router.delete("/:id", deleteSchedule);
// Export the router for use in other parts of the application
export default router;
