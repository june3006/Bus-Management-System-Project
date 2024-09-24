// Import the express module to create route handlers
import express from "express";
// Import the passenger handling functions from the passenger controller
import {
  getAllPassengers,
  createPassenger,
  updatePassenger,
  deletePassenger,
} from "../controllers/passengerController.js";

const router = express.Router(); // Create a new router object for managing routes

/**
 * Route handlers for passenger management.
 * GET route to fetch all passengers.
 * POST route to create a new passenger.
 */
// Route to retrieve all passenger information using the GET method
router.get("/", getAllPassengers);
// Route to create a new passenger record using the POST method
router.post("/", createPassenger);
// Route to update passenger information
router.put("/:id", updatePassenger);
// Route to delete passenger information
router.delete("/:id", deletePassenger);

// Export the router under the name 'passengerRoutes' for use in the main application
export { router as passengerRoutes };
