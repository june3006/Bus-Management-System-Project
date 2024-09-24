import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { NavLink } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { Col, Row } from "antd";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 300,
  bgcolor: "#f5f5f5",
  boxShadow: 24,
  padding: "60px 100px",
};

type DeleteScheduleModalProp = {
  openModal: boolean;
  handleClosed: () => void;
  idToDelete: string | null;
};

const DeleteScheduleModal = ({ openModal, handleClosed, idToDelete}: DeleteScheduleModalProp) => {
    const storedToken = localStorage.getItem("token");

    const handleDelete = async () => {  
      try {
        const response = await axios.delete(
          `http://localhost:3001/api/schedules/${idToDelete}`,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );
  
        console.log("Auth response:", response.data);
    
        if (response.data.message === "Authenticated") {
          // User is authenticated, redirect to payment page
          window.location.href = "/transport-operator"; // Update with your payment page route
        }
      } catch (error) {
        handleClosed();
        console.error("Error occurred:", error);
  
        if (axios.isAxiosError(error)) {
          if (error.response && error.response.status === 403) {
            console.error("Forbidden:", error.message); // Handle forbidden error
          } else {
            console.error("Axios error occurred:", error.message);
          }
        } else {
          console.error("An unexpected error occurred:", error);
        }
      }
    };
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
                fontFamily: "Lato, sans-serif",
                fontSize: "25px",
              }}
            >
              Do you want to delete this schedule?
            </Typography>
          </Box>
          <Row >
            <Col span={12}><Button variant="outlined" onClick={handleClosed}>Cancel</Button> </Col>
            <Col span={12}><Button variant="contained" onClick={handleDelete}>Delete</Button> </Col>
          </Row>
        </Box>
      </Modal>
    </div>
  );
}

export default DeleteScheduleModal;
