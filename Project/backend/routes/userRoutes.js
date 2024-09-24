// Import the express module to create route handlers
import express from "express";
// Import the authentication-related functions from the auth controller
import {
  signUp,
  signIn,
  getUserProfile,
} from "../controllers/authController.js";
// Import the middleware for token authentication
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router(); // Create a new router object for managing routes

/**
 * Authentication and user profile route handlers.
 * Includes routes for user sign-up, sign-in, and fetching user profile data.
 */
// Route to handle user sign-up requests
router.post("/signup", signUp);
// Route to handle user sign-in requests
router.post("/signin", signIn);
// Route to fetch a user's profile, protected by token authentication
router.get("/profile", authenticateToken, getUserProfile);

// Export the router for use in other parts of the application
export default router;
