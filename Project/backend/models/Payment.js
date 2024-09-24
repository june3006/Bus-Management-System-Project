// Import the necessary components from Sequelize ORM
import { DataTypes } from "sequelize";
// Import the sequelize instance from the central configuration file
import { sequelize } from "./index.js";

/**
 * Defines the 'Payment' model with detailed field definitions.
 * This model represents a payment transaction entity in the database, capturing all aspects of payment processing.
 */
const Payment = sequelize.define("Payment", {
  Payment_ID: {
    type: DataTypes.INTEGER, // Integer datatype for the payment's ID
    primaryKey: true, // Marks Payment_ID as the primary key
    autoIncrement: true, // Automatically increments the ID for each new payment record
  },
  Passenger_ID: {
    type: DataTypes.INTEGER, // Integer datatype for linking to a specific passenger
  },
  Schedule_ID: {
    type: DataTypes.INTEGER, // Integer datatype for associating the payment with a specific schedule
  },
  TicketPrice: {
    type: DataTypes.FLOAT, // Float datatype for the price of an individual ticket
  },
  TicketQuantity: {
    type: DataTypes.INTEGER, // Integer datatype for the quantity of tickets purchased
  },
  VAT: {
    type: DataTypes.FLOAT, // Float datatype for the value-added tax applicable to the ticket sale
  },
  TotalPrice: {
    type: DataTypes.FLOAT, // Float datatype for the total price paid (including VAT)
  },
  Payment_Methods: {
    type: DataTypes.STRING, // String datatype for recording the method of payment used
  },
});

// Export the Payment model for use in other parts of the application
export default Payment;
