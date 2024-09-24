// Import the Sequelize constructor from the sequelize package
import { Sequelize } from "sequelize";
// Import database configuration from a centralized config file
import config from "../config.js";

/**
 * Initializes a new Sequelize instance to connect to a MySQL database using configuration details.
 * This setup disables automatic timestamp fields, aligning with specific application requirements.
 */
const sequelize = new Sequelize(
  config.database, // Name of the database
  config.username, // Database username
  config.password, // Database password
  {
    host: config.host, // Hostname of the database server
    dialect: config.dialect, // Database system used (e.g., mysql)
    logging: false, // Disables logging
    port: config.port, // Port number the database server is listening on
    define: {
      timestamps: false, // Disables the automatic creation of 'createdAt' and 'updatedAt' fields
    },
  }
);

// Export the configured Sequelize instance for use in other parts of the application
export default sequelize;
