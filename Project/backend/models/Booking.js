// Import necessary components from Sequelize ORM
import { DataTypes } from "sequelize";
// Import the sequelize instance configured for the database connection
import sequelize from "./sequelize.js"; // Adjust the path if necessary

/**
 * Defines the 'Booking' model with its structure and field definitions.
 * This model represents a booking entity in the database.
 */
const Booking = sequelize.define("Booking", {
  id: {
    type: DataTypes.INTEGER, // Integer datatype for the primary key
    primaryKey: true, // Marks 'id' as the primary key
    autoIncrement: true, // Automatically increments the 'id' for each new entry
  },
  passengerName: {
    type: DataTypes.STRING, // String datatype for passenger's name
    allowNull: false, // This field cannot be null, meaning it must be filled out
  },
  route: {
    type: DataTypes.STRING, // String datatype for the route information
    allowNull: false, // This field is required
  },
  time: {
    type: DataTypes.DATE, // Date datatype for booking time
    allowNull: false, // This field is required
  },
  seatNumber: {
    type: DataTypes.STRING, // String datatype for seat number
    allowNull: true, // This field is optional
  },
  status: {
    type: DataTypes.STRING, // String datatype for booking status
    allowNull: false, // This field is required
    defaultValue: "Pending", // Default value for status if not provided
  },
});

// Export the Booking model for use in other parts of the application
export default Booking;
