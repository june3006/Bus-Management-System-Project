// Import necessary components from Sequelize ORM
import { DataTypes } from "sequelize";
// Import the sequelize instance configured for the database connection
import sequelize from "./sequelize.js"; // Correct import statement

/**
 * Defines the 'BusInfo' model with its structure and field definitions.
 * This model represents a bus entity in the database, storing detailed information about each bus.
 */
const BusInfo = sequelize.define("BusInfo", {
  id: {
    type: DataTypes.INTEGER, // Integer datatype for the primary key
    primaryKey: true, // Marks 'id' as the primary key
    autoIncrement: true, // Automatically increments the 'id' for each new entry
  },
  busNumber: {
    type: DataTypes.STRING, // String datatype for bus number
    allowNull: false, // This field cannot be null, meaning it must be filled out
  },
  route: {
    type: DataTypes.STRING, // String datatype for the route that the bus follows
    allowNull: false, // This field is required
  },
  driverName: {
    type: DataTypes.STRING, // String datatype for the name of the bus driver
    allowNull: false, // This field is required
  },
});

// Export the BusInfo model for use in other parts of the application
export default BusInfo;
