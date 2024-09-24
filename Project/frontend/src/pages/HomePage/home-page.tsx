import { Box, Grid, Typography } from "@mui/material";
import "./styles.css";
import { NavLink } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const HomePage = () => {
  return (
    <>
      <Box>
        <Grid container sx={{ padding: "100px 100px" }}>
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "64px",
                fontWeight: "Bold",
                fontFamily: "Saira Semi Condensed, sans-serif",
              }}
            >
              PROJECT
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "64px",
                color: "#797979",
                fontWeight: "Bold",
                
              }}
            >
              Bus Management
              <br /> System
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <img
              src="./images/carousel.png"
              style={{ width: "841px", height: "539px" }}
            ></img>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: "100px 100px" }}>
        <Box sx={{ background: "#FBFBFB", padding: "" }}>
          <Grid container sx={{ height: "100%", padding: "0 40px" }}>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={6} sx={{ paddingBottom: "20px" }}>
                  <img
                    src="./images/image 2.png"
                    style={{ marginTop: "0", width: "270px", height: "265px" }}
                    alt=""
                  />
                  <img
                    src="./images/image 4.png"
                    style={{ marginTop: "0", width: "270px", height: "140px" }}
                    alt=""
                  />
                </Grid>
                <Grid item xs={4} style={{ paddingTop: "30px" }}>
                  <img src="./images/image 3.png" alt="" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{
                  fontFamily: "Saira Semi Condensed, sans-serif",
                  fontWeight: "Bold",
                  fontSize: "64px",
                }}
              >
                ABOUT
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "Light",
                  fontSize: "16px",
                }}
              >
                This project is a Bus Management System Webapp for passengers,
                <br /> transport operators and bus company
              </Typography>
              <NavLink to="/about" style={{}} className="about-link">
                READ MORE
                <ArrowRightAltIcon />
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{padding: '100px 100px'}}>
        <Typography
          sx={{
            color: "#797979",
            fontFamily: "Roboto, sans-serif",
            fontSize: "64px",
            fontWeight: "light",
            marginBottom: '40px'
          }}
        >
          Main Focus/Mission Statement
        </Typography>
        <Grid container>
          <Grid item xs={6} sx={{ display: "flex" }}>
            <img src="./images/1.png"></img>
            <Typography
              sx={{
                fontSize: "22px",
                fontFamily: "Roboto, sans-serif",
                lineHeight: "36px",
              }}
            >
              The main focus of this
              <br /> project is ...
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex" }}>
            <img src="./images/2.png"></img>
            <Typography
              sx={{
                fontSize: "22px",
                fontFamily: "Roboto, sans-serif",
                lineHeight: "36px",
              }}
            >
              Mission of this project is
              <br /> helping us pass Programming
              <br /> Exercise Module
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
