import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaymentIcon from "@mui/icons-material/Payment";
import BookIcon from "@mui/icons-material/Book";
import HistoryIcon from "@mui/icons-material/History";

const Sidebar = () => {
  return (
    <List component="nav" sx={{ bgcolor: "background.paper", width: 250 }}>
      <ListItem button>
        <ListItemIcon>
          <AccountBoxIcon />
        </ListItemIcon>
        <ListItemText primary="User Profile" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PaymentIcon />
        </ListItemIcon>
        <ListItemText primary="Payment" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary="My Booking" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="Booking History" />
      </ListItem>
      <Divider />
      <ListItem button>
        <Button variant="outlined" fullWidth>
          Sign out
        </Button>
      </ListItem>
    </List>
  );
};

const UserAccount = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Paper
        elevation={3}
        sx={{
          width: "100vw",
          height: "100vh",
          background: "#F4F6FB",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 500,
            bgcolor: "background.paper",
            borderRadius: 2,
            p: 4,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Typography variant="h4" gutterBottom>
                User Profile
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <img
                src="/path/to/profile/pic.jpg"
                alt="profile"
                style={{ width: 100, height: 100, borderRadius: "50%" }}
              />
              <Button variant="text">Upload New Photo</Button>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                defaultValue="Jackson"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                defaultValue="Murouse"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="User Name"
                defaultValue="jacksonM"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                defaultValue="jacksonM@gmail.com"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                defaultValue="+84 948 367 243"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Location" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Current Password"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="New Password"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Confirm New Password"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="space-between">
              <Button variant="contained" color="primary">
                Save Changes
              </Button>
              <Button variant="outlined" color="secondary">
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default UserAccount;
