import Passenger from "../models/Passenger.js";
import Booking from "../models/Booking.js";
import Bus from "../models/BusInfo.js";

/**
 * Retrieves all passengers from the database.
 * Sends the list of passengers or an error message if the operation fails.
 */
export async function getAllPassengers(req, res) {
  try {
    // Fetch all passenger records from the database
    const passengers = await Passenger.findAll();
    // Send the retrieved passenger records in the response
    res.json(passengers);
  } catch (error) {
    // Respond with a server error status and error message if fetching fails
    res.status(500).json({ error: error.message });
  }
}
export async function createPassenger(req, res) {
  const { bookingId } = req.body;

  try {
    // Find the booking related to this passenger creation request
    const booking = await Booking.findByPk(bookingId);
    if (!booking || booking.status !== "Confirmed") {
      return res
        .status(404)
        .json({ message: "Valid booking not found or not confirmed" });
    }

    // Check if the route's bus has free seats
    const bus = await Bus.findByPk(booking.busId);
    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }
    if (bus.passengers.length >= bus.capacity) {
      return res.status(400).json({ message: "Bus is full" });
    }

    // Check if the bus is already full
    const passenger = await Passenger.count({ where: { busId: bus.id } });
    if (passengers >= bus.capacity) {
      // Update booking status to 'Full'
      booking.status = "Full";
      await booking.save();
      return res.status(409).json({ message: "Bus is full" });
    }

    // Create a new passenger record
    const newPassenger = await Passenger.create({
      name: booking.passengerName,
      busId: bus.id,
    });

    // Respond with the created passenger information
    res
      .status(201)
      .json({ message: "Passenger created successfully", passenger });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

/**
 * Updates an existing passenger record in the database.
 * Requires passenger ID as a parameter and accepts new passenger data from the request body.
 */
export async function updatePassenger(req, res) {
  const { id } = req.params;
  const passengerData = req.body;

  try {
    // Fetch the existing passenger record by ID
    const passenger = await Passenger.findByPk(id);
    if (!passenger) {
      return res.status(404).json({ message: "Passenger not found" });
    }

    // Update the passenger record with new data
    const updatedPassenger = await passenger.update(passengerData);
    // Respond with the updated passenger information
    res.status(200).json(updatedPassenger);
  } catch (error) {
    // Handle errors and send an appropriate response
    res.status(500).json({ error: error.message });
  }
}

/**
 * Deletes a passenger record from the database.
 * Requires the passenger ID as a parameter to locate the record.
 */
export async function deletePassenger(req, res) {
  const { id } = req.params;

  try {
    const passenger = await Passenger.findByPk(id);
    if (!passenger) {
      return res.status(404).json({ message: "Passenger not found" });
    }

    // Delete the passenger record
    await passenger.destroy();
    // Respond with success message
    res.status(200).json({ message: "Passenger deleted successfully" });
  } catch (error) {
    // Respond with a server error status and error message if deletion fails
    res.status(500).json({ error: error.message });
  }
}
