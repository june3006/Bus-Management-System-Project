// Import the necessary components from Sequelize ORM
import { DataTypes } from "sequelize";
// Import the sequelize instance from the central configuration file
import { sequelize } from "./index.js";

/**
 * Defines the 'RouteInfor' model with its structure and field definitions.
 * This model represents route information within the database, detailing the specifics of each route.
 */
const RouteInfor = sequelize.define("RouteInfor", {
  Route_ID: {
    type: DataTypes.INTEGER, // Integer datatype for the route's ID
    primaryKey: true, // Marks Route_ID as the primary key
    autoIncrement: true, // Automatically increments the ID for each new route entry
  },
  RouteName: {
    type: DataTypes.STRING, // String datatype for the name of the route
  },
  Location: {
    type: DataTypes.STRING, // String datatype for the overall location area of the route
  },
  DepartureLocation: {
    type: DataTypes.STRING, // String datatype for the starting point of the route
  },
  ArrivalLocation: {
    type: DataTypes.STRING, // String datatype for the endpoint of the route
  },
  R_status: {
    type: DataTypes.STRING, // String datatype for the current status of the route (e.g., active, inactive)
  },
});

// Export the RouteInfor model for use in other parts of the application
export default RouteInfor;
