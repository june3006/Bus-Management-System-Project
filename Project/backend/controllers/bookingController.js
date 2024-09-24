import { Booking } from "../models/Booking.js";
import { User } from "../models/User.js";
import { sendBookingConfirmationEmail } from "../services/NotifierService";
/**
 * Handles the booking of routes by users.
 */
export const bookRoute = async (req, res) => {
  const { userId, routeId, details } = req.body;

  try {
    // Verify user existence
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" }); // Use 404 for "not found" errors
    }

    // Transactional creation to ensure data integrity
    const newBooking = await Booking.create({ userId, routeId, details });

    // Send booking confirmation email
    await sendBookingConfirmationEmail(user.name, user.email, newBooking);

    res
      .status(201)
      .json({ message: "Booking successful", booking: newBooking });
  } catch (error) {
    handleError(error, res); // Centralized error handler
  }
};

export default { bookRoute };
