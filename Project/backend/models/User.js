// Import the necessary components from Sequelize ORM
import { DataTypes } from "sequelize";
// Import the sequelize instance configured for the database connection
import sequelize from "./sequelize.js"; // Ensure the import path is correctly set

/**
 * Defines the 'User' model with its structure and field definitions.
 * This model represents a user entity in the database, storing essential user credentials.
 */
const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER, // Integer datatype for the user's ID
      primaryKey: true, // Marks 'id' as the primary key
      autoIncrement: true, // Automatically increments the ID for each new user
    },
    name: {
      type: DataTypes.STRING, // String datatype for the user's name
      allowNull: false, // This field cannot be null, ensuring all users have a name
    },
    email: {
      type: DataTypes.STRING, // String datatype for the user's email
      allowNull: false, // This field is required
      unique: true, // Ensures email addresses are unique to each user
    },
    password: {
      type: DataTypes.STRING, // String datatype for the user's password
      allowNull: false, // This field is required for security purposes
    },
  },
  {
    timestamps: false, // Disables automatic creation of 'createdAt' and 'updatedAt' fields
  }
);

// Export the User model for use in other parts of the application
export default User;
