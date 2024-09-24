// Import the express module to create route handlers
import express from "express";
// Import the bus info handling functions from the bus info controller
import {
  getAllBusInfo,
  createBusInfo,
  updateBusInfo,
  deleteBusInfo,
} from "../controllers/busInfoController.js";

const router = express.Router(); // Create a new router object for managing routes

/**
 * Route handlers for bus information.
 * GET route to fetch all bus information.
 * POST route to create new bus information.
 */
// Retrieve all bus information using the GET method
router.get("/", getAllBusInfo);
// Create a new bus record using the POST method
router.post("/", createBusInfo);
// Route to update bus information
router.put("/:id", updateBusInfo);
// Route to delete bus information
router.delete("/:id", deleteBusInfo);

// Export the router under the name 'busInfoRoutes' for use in the main application
export { router as busInfoRoutes };
