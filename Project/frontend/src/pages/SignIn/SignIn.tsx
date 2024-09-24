import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import "./styles.css";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/signin",
        { email, password }
      );
      setMessage(response.data.message);
      if (response.data.message === "Sign-in successful") {
        localStorage.setItem("token", response.data.token);
        sessionStorage.setItem("userName", response.data.name); // Store the user's name upon successful sign-in
        navigate("/sign-in-success");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      if (axios.isAxiosError(error)) {
        setMessage(error.response?.data.message || "An error occurred");
      } else if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        background: "#F5F5F5",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "1076px",
          height: "761px",
          background: "#ffffff",
          borderRadius: "20px",
        }}
      >
        <Grid container sx={{ flex: 1 }}>
          <Grid item xs={6} sx={{ padding: "32px" }}>
            <Typography
              sx={{
                fontSize: "64px",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              Welcome!
            </Typography>
            <form style={{ paddingLeft: "30px" }} onSubmit={handleSubmit}>
              <Grid container rowSpacing={5}>
                <Grid item xs={11}>
                  <label className="form-label" style={{ fontSize: "16px" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    style={{
                      width: "100%",
                      background: "#F7FBFF",
                      borderRadius: "12px",
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={11}>
                  <label className="form-label" style={{ fontSize: "16px" }}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    aria-describedby="passwordHelp"
                    style={{
                      width: "100%",
                      background: "#F7FBFF",
                      borderRadius: "12px",
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={11}>
                  <button
                    type="submit"
                    className="submit-sign-up"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign in"}
                  </button>
                </Grid>
              </Grid>
            </form>
            {message && (
              <Typography
                sx={{
                  color:
                    message === "Sign-in successful" ? "#00ff00" : "#ff0000",
                  fontSize: "16px",
                  textAlign: "center",
                  paddingTop: "20px",
                }}
              >
                {message}
              </Typography>
            )}
            <Typography
              sx={{
                color: "#959CB6",
                fontSize: "16px",
                textAlign: "center",
                paddingTop: "60px",
              }}
            >
              @ 2023 ALL RIGHT RESERVED
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              padding: "32px 0",
            }}
          >
            <img
              src="./images/Art.jpg"
              style={{
                width: "491px",
                height: "697px",
                objectFit: "cover",
                borderRadius: "24px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignIn;
