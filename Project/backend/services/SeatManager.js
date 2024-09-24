// Import the Seat model from the models directory
import { Seat } from "../models/Seat.js";

/**
 * A class to manage seat availability and reservations.
 * It contains methods to check if a seat is available and to reserve a seat.
 */
class SeatManager {
  /**
   * Checks if a specific seat is available on a given route at a specified time.
   *
   * @param {string} route - The route of the seat.
   * @param {string} time - The time when the seat is desired.
   * @param {string} seatNumber - The specific seat number to check.
   * @returns {Promise<boolean>} - Returns true if the seat is available, otherwise false.
   */
  static async checkSeatAvailability(route, time, seatNumber) {
    const seat = await Seat.findOne({
      where: {
        route: route,
        time: time,
        seatNumber: seatNumber,
        available: true,
      },
    });

    return seat !== null; // Return true if the seat exists and is available
  }

  /**
   * Reserves a specific seat on a given route at a specified time if it is available.
   *
   * @param {string} route - The route of the seat.
   * @param {string} time - The time when the seat is desired.
   * @param {string} seatNumber - The specific seat number to reserve.
   * @returns {Promise<object>} - Returns the seat object after updating its availability.
   * @throws {Error} - Throws an error if the seat is not available.
   */
  static async reserveSeat(route, time, seatNumber) {
    const seat = await Seat.findOne({
      where: {
        route: route,
        time: time,
        seatNumber: seatNumber,
      },
    });

    if (seat) {
      seat.available = false; // Set the seat to unavailable
      await seat.save(); // Save the updated seat object in the database
      return seat; // Return the updated seat object
    }

    // If the seat is not found or already taken, throw an error
    throw new Error("Seat not available");
  }
}

// Export the SeatManager class for use elsewhere in the application
export { SeatManager };
