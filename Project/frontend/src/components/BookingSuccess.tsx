import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const BookingSuccess = () => {
  return (
    <Box
      sx={{
        background: "#F5F5F5",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "60%",
          background: "#ffffff",
          borderRadius: "20px",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          Booking ID: 12345
        </Typography>
        <Box
          sx={{
            background: "#F5F5F5",
            border: "1px solid #000",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <Typography variant="body1">
            The ticket’s information was sent to your email, please show the
            ticket to conductors for the checking purpose.
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ color: "green", marginBottom: "20px" }}>
          SUCCESS
        </Typography>
      </Box>
    </Box>
  );
};

export default BookingSuccess;
