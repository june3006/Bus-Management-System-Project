// Import the Payment model from the local models directory
import Payment from "../models/Payment.js";

/**
 * Retrieves all payment records from the database.
 * Sends a list of payments or an error message if the operation fails.
 */
export async function getAllPayments(req, res) {
  try {
    // Fetch all payment records from the database
    const payments = await Payment.findAll();
    // Send the retrieved payment records in the response
    res.json(payments);
  } catch (error) {
    // Respond with a server error status and error message if fetching fails
    res.status(500).json({ error: error.message });
  }
}

/**
 * Creates a new payment record in the database.
 * Accepts payment data from the request body and returns the created payment information.
 */
export async function createPayment(req, res) {
  try {
    // Create a new payment record using the provided request body
    const payment = await Payment.create(req.body);
    // Respond with a status of 201 (Created) and the new payment information
    res.status(201).json(payment);
  } catch (error) {
    // Respond with a server error status and error message if creation fails
    res.status(500).json({ error: error.message });
  }
}

/**
 * Updates an existing payment record in the database.
 * Accepts payment data from the request body and the payment ID as a parameter.
 */
export async function updatePayment(req, res) {
  const { paymentId } = req.params;
  const paymentData = req.body;

  try {
    // Fetch the payment record by ID
    const payment = await Payment.findByPk(paymentId);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    // Update the payment record with new data
    const updatedPayment = await payment.update(paymentData);
    // Respond with the updated payment information
    res.status(200).json(updatedPayment);
  } catch (error) {
    // Respond with a server error status and error message if update fails
    res.status(500).json({ error: error.message });
  }
}

/**
 * Deletes a payment record from the database.
 * Requires the payment ID as a parameter to locate the record.
 */
export async function deletePayment(req, res) {
  const { paymentId } = req.params;

  try {
    const payment = await Payment.findByPk(paymentId);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    // Delete the payment record
    await payment.destroy();
    // Respond with success message
    res.status(200).json({ message: "Payment deleted successfully" });
  } catch (error) {
    // Respond with a server error status and error message if deletion fails
    res.status(500).json({ error: error.message });
  }
}
