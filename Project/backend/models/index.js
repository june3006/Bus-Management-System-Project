// Import the sequelize instance from the sequelize configuration file
import sequelize from "./sequelize.js";
// Import the Booking model defined in the Booking.js file
import Booking from "./Booking.js";
// Import the User model defined in the User.js file
import User from "./User.js";

// Registering the Booking and User models with the sequelize instance
// This step is crucial for enabling sequelize to manage these models in the database
sequelize.models.Booking = Booking;
sequelize.models.User = User;

// Exporting the sequelize instance along with the Booking and User models
// This allows other parts of the application to interact with the database using these models
export { sequelize, Booking, User };
