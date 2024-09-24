import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { NavLink } from "react-router-dom";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 587,
  height: 361,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "125px 100px",
};

type AuthModalProp = {
  openModal: boolean;
  handleClosed: () => void;
};

export default function AuthModal({ openModal, handleClosed }: AuthModalProp) {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClosed}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Lato, sans-serif",
                fontSize: "25px",
              }}
            >
              Please{" "}
              <NavLink
                to="/sign-in"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "25px",
                  display: "inline-block",
                }}
              >
                Sign in
              </NavLink>
            </Typography>

            <Typography
              sx={{
                color: "white",
                fontFamily: "Lato, sans-serif",
                fontSize: "25px",
              }}
            >
              Don't have an account?{" "}
              <NavLink
                to="/sign-up"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "25px",
                }}
              >
                Sign up
              </NavLink>
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
