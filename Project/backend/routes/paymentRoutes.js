// Import the express module to create route handlers
import express from "express";
// Import the payment handling functions from the payment controller
import {
  getAllPayments,
  createPayment,
  updatePayment,
  deletePayment,
} from "../controllers/paymentController.js";

const router = express.Router(); // Create a new router object for managing routes

/**
 * Route handlers for payment management.
 * GET route to fetch all payment records.
 * POST route to create a new payment record.
 */
// Route to retrieve all payment information using the GET method
router.get("/", getAllPayments);
// Route to create a new payment record using the POST method
router.post("/", createPayment);
// Route to update a payment
router.put("/:paymentId", updatePayment);
// Route to delete a payment
router.delete("/:paymentId", deletePayment);

// Export the router under the name 'paymentRoutes' for use in the main application
export { router as paymentRoutes };
