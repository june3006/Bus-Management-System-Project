import { useState } from "react";
import axios from "axios";

interface User {
  id: number;
  email: string;
  name: string;
  // Add other user properties as needed
}

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>("");

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/signup",
        {
          email,
          password,
          name,
        }
      );
      setUser(response.data.user);
      setError("");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Sign up failed");
      } else {
        setError("Sign up failed");
      }
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/signin",
        {
          email,
          password,
        }
      );
      setUser(response.data.user);
      setError("");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Sign in failed");
      } else {
        setError("Sign in failed");
      }
    }
  };

  return { user, error, signUp, signIn };
};

export default useAuth;
