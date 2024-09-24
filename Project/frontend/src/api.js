import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

const api = axios.create({
  baseURL: "http://localhost:3001/api", // Update the base URL as needed
});

export const signUp = async (email, password, name) => {
  return await api.post("/users/signup", { email, password, name });
};

export const signIn = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/signin`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const bookRoute = async (userId, routeId, details) => {
  try {
    const response = await axios.post(`${BASE_URL}/bookings/book`, {
      userId,
      routeId,
      details,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
