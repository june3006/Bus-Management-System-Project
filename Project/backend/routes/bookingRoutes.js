// Import the necessary modules from express
import express from "express";
const router = express.Router(); // Create a new router object for handling routes

// Import the Booking model from the models directory
import { Booking } from "../models/index.js"; // Ensure the import path is correctly set according to your project structure

/**
 * Route to handle creating a new booking.
 * Accepts user ID, route ID, and details from the request body to create a booking.
 */
router.post("/book", async (req, res) => {
  const { userId, routeId, details } = req.body; // Extract booking-related data from the request body

  // Construct a new booking object according to the Booking model's schema
  const newBooking = {
    passengerName: userId, // Here, assuming userId is the passenger's name, adjust if necessary
    route: routeId,
    time: new Date(), // Sets the booking time to the current time, adjust if needed
    seatNumber: details, // Assuming 'details' contains seat number, adjust this field as necessary
    status: "Pending", // Default status of the booking
  };

  try {
    // Attempt to create a new booking record in the database
    const booking = await Booking.create(newBooking);
    // If successful, respond with a success status and the booking details
    res.status(200).json({ message: "Booking successful!", booking });
  } catch (error) {
    // If there is an error during booking creation, respond with an error status and message
    res.status(500).json({ message: "Booking failed", error: error.message });
  }
});

// Export the router for use in other parts of the application
export default router;
