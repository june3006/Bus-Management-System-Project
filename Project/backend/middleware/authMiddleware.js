// Import the jsonwebtoken utility for handling JWTs
import jwt from "jsonwebtoken";

/**
 * Middleware to authenticate tokens provided in the request headers.
 * Validates the token and ensures it is active and correct.
 */
export const authenticateToken = (req, res, next) => {
  // Extract the token from the Authorization header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Format: "Bearer TOKEN"

  // If no token is found in the header, return an unauthorized status
  if (token == null) return res.sendStatus(401);

  // Verify the token with the secret key and handle the validation result
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // If token validation fails, send a forbidden status

    // If token is valid, set the user in the request and proceed to next middleware or endpoint
    req.user = user;
    next();
  });
};

// Export the authenticateToken middleware by default
export default authenticateToken;
