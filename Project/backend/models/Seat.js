// Import the necessary components from Sequelize ORM
import { DataTypes } from "sequelize";
// Import the sequelize instance from the central configuration file
import { sequelize } from "./index.js";

/**
 * Defines the 'Seat' model with its structure and field definitions.
 * This model represents individual seat availability for specific routes and times,
 * allowing for dynamic management of seating arrangements.
 */
const Seat = sequelize.define("Seat", {
  id: {
    type: DataTypes.INTEGER, // Integer datatype for the seat's ID
    primaryKey: true, // Marks id as the primary key
    autoIncrement: true, // Automatically increments the ID for each new seat entry
  },
  route: {
    type: DataTypes.STRING, // String datatype for the route associated with the seat
    allowNull: false, // This field cannot be null, ensuring every seat is linked to a route
  },
  time: {
    type: DataTypes.STRING, // String datatype for the time when the seat is available
    allowNull: false, // This field is required to specify when the seat is available
  },
  seatNumber: {
    type: DataTypes.STRING, // String datatype for the seat number
    allowNull: false, // This field cannot be null, every seat must have a specific identifier
  },
  available: {
    type: DataTypes.BOOLEAN, // Boolean datatype indicating the availability of the seat
    defaultValue: true, // Default availability is set to true, assuming seats are initially available
  },
});

// Export the Seat model for use in other parts of the application
export { Seat };
