// Import the necessary components from Sequelize ORM
import { DataTypes } from "sequelize";
// Import the sequelize instance from the central configuration file
import { sequelize } from "./index.js";

/**
 * Defines the 'Schedules' model with its structure and field definitions.
 * This model represents a schedule for buses on specific routes, detailing times and operational status.
 */
const Schedules = sequelize.define("Schedules", {
  Schedule_ID: {
    type: DataTypes.INTEGER, // Integer datatype for the schedule's ID
    primaryKey: true, // Marks Schedule_ID as the primary key
    autoIncrement: true, // Automatically increments the ID for each new schedule entry
  },
  Route_ID: {
    type: DataTypes.INTEGER, // Integer datatype for linking the schedule to a specific route
  },
  Bus_ID: {
    type: DataTypes.STRING, // String datatype for identifying the specific bus on the schedule
  },
  DepartureTime: {
    type: DataTypes.DATE, // Date datatype for the time of departure
  },
  ActiveDay: {
    type: DataTypes.STRING, // String datatype for the day(s) the schedule is active
  },
  S_Status: {
    type: DataTypes.STRING, // String datatype for the current status of the schedule (e.g., active, cancelled)
  },
});

// Export the Schedules model for use in other parts of the application
export default Schedules;
