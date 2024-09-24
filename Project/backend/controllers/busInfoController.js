import BusInfo from "../models/BusInfo.js";

/**
 * Retrieves all bus information from the database.
 */
export async function getAllBusInfo(req, res) {
  try {
    const buses = await BusInfo.findAll();
    res.json(buses); // Directly respond with array of buses
  } catch (error) {
    handleError(error, res); // Use centralized error handling
  }
}

/**
 * Creates a new bus information record in the database.
 */
export async function createBusInfo(req, res) {
  const { model, capacity, licenseNumber } = req.body;
  if (!model || !capacity || !licenseNumber) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const bus = await BusInfo.create({ model, capacity, licenseNumber });
    res.status(201).json(bus);
  } catch (error) {
    handleError(error, res);
  }
}

/**
 * Updates an existing bus record in the database.
 * Requires bus ID as a parameter and accepts new bus data from the request body.
 */
export async function updateBusInfo(req, res) {
  const { id } = req.params;
  const busData = req.body;

  try {
    // Fetch the existing bus record by ID
    const bus = await BusInfo.findByPk(id);
    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    // Update the bus record with new data
    const updatedBus = await bus.update(busData);
    // Respond with the updated bus information
    res.status(200).json(updatedBus);
  } catch (error) {
    // Handle errors and send an appropriate response
    res.status(500).json({ error: error.message });
  }
}

/**
 * Deletes a bus record from the database.
 * Requires the bus ID as a parameter to locate the record.
 */
export async function deleteBusInfo(req, res) {
  const { id } = req.params;

  try {
    const bus = await BusInfo.findByPk(id);
    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    // Delete the bus record
    await bus.destroy();
    // Respond with success message
    res.status(200).json({ message: "Bus deleted successfully" });
  } catch (error) {
    // Respond with a server error status and error message if deletion fails
    res.status(500).json({ error: error.message });
  }
}
