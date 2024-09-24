// Import necessary components from Sequelize ORM
import { DataTypes } from "sequelize";
// Import the sequelize instance from the central index file
import { sequelize } from "./index.js";

/**
 * Defines the 'Passenger' model with its structure and field definitions.
 * This model represents a passenger entity in the database, storing comprehensive passenger details.
 */
const Passenger = sequelize.define("Passenger", {
  Passenger_ID: {
    type: DataTypes.INTEGER, // Integer datatype for the passenger's ID
    primaryKey: true, // Marks Passenger_ID as the primary key
    autoIncrement: true, // Automatically increments the ID for each new passenger
  },
  Payment_ID: {
    type: DataTypes.INTEGER, // Integer datatype for associating passenger with a payment
  },
  Schedule_ID: {
    type: DataTypes.INTEGER, // Integer datatype for linking passenger to a schedule
  },
  F_name: {
    type: DataTypes.STRING, // String datatype for passenger's first name
  },
  L_name: {
    type: DataTypes.STRING, // String datatype for passenger's last name
  },
  Date_of_birth: {
    type: DataTypes.DATE, // Date datatype for passenger's date of birth
  },
  Personal_ID: {
    type: DataTypes.STRING, // String datatype for passenger's personal ID
  },
  P_status: {
    type: DataTypes.STRING, // String datatype for passenger's status (e.g., active, inactive)
  },
});

// Export the Passenger model for use in other parts of the application
export default Passenger;
