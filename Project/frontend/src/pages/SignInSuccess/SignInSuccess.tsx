import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./styles.css";

const SignInSuccess: React.FC = () => {
  const userName = sessionStorage.getItem("userName");

  return (
    <Box
      sx={{
        background: "#F5F5F5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "1076px",
            background: "#ffffff",
            borderRadius: "20px",
            padding: "32px",
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
                Welcome back!
              </Typography>
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                {userName || "User"}
              </Typography>
              <Typography
                sx={{
                  color: "#959CB6",
                  fontSize: "16px",
                  textAlign: "center",
                  paddingTop: "60px",
                }}
              >
                @ 2023 ALL RIGHTS RESERVED
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="./images/Art.jpg"
                alt="Tokyu Garden City"
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
      <Box
        sx={{
          background: "#333",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Typography variant="body2">© 2023 ALL RIGHTS RESERVED</Typography>
      </Box>
    </Box>
  );
};

export default SignInSuccess;
