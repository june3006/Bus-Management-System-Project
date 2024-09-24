import { Box, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./styles.css";
const About = () => {
  return (
    <>
      <Box sx={{ background: "black", padding: "100px 100px 100px" }}>
        <Box>
          <Typography
            sx={{
              display: "inline-block",
              color: "white",
              fontFamily: "Poppins, sans-serif",
              fontSize: "48px",
              fontWeight: 700,
              borderLeft: "5px #1E4E97 solid",
              borderRadius: "5px",
              paddingLeft: "20px",
            }}
          >
            What Is The Purpose
            <br /> Of This Project ?
          </Typography>
          <Typography
            sx={{
              color: "#C2C2C2",
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              marginTop: "20px",
            }}
          >
            This Project is Made For The Programming Exercise Module
            Examination.
            <br /> However, Through This Project, Our Team Wants To Learn More
            New Knowledge About
            <br /> Programming Field
          </Typography>
        </Box>
        <Grid container sx={{ marginTop: "40px" }}>
          <Grid item xs={2}>
            <NavLink to="" className="about-btn-link">
              Buy Ticket
            </NavLink>
          </Grid>
          <Grid item xs={2}>
            <NavLink to="" className="about-btn-link">
              Contact Us
            </NavLink>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ padding: "100px 500px" }}>
        <Box sx={{ alignItems: "center", width: "100%", textAlign: "center" }}>
          <Typography
            sx={{
              fontFamily: "Source Serif 4, sans-serif",
              fontSize: "45px",
              fontWeight: 700,
            }}
          >
            Our Team
          </Typography>
          <img src="./images/line.png" alt="" />
        </Box>
        <Box>
          <Grid container rowSpacing={6}>
            <Grid item xs={7} sx={{ padding: "200px 100px" }}>
              <Typography
                sx={{ fontSize: "36px", fontWeight: 700, margin: "100px 0" }}
              >
                Phạm Trương Nhật Nguyên
              </Typography>
              <Box
                sx={{
                  background: "#F3F25B",
                  width: "309px",
                  height: "3px",
                  marginTop: "-100px",
                }}
              ></Box>
              <Typography
                sx={{
                  fontFamily: "Lato, sans-serif",
                  fontSize: "20px",
                  color: "#848383",
                }}
              >
                Major: BCs Computer Science
                <br />
                Role: Cyber Security, DevOps
              </Typography>
              <NavLink
                to=""
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  color: "black",
                  width: "242px",
                  height: "53px",
                  alignItems: "center",
                  padding: "10px 70px",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "18px",
                  background: "#9BCDE9",
                  position: "relative",
                  borderRadius: "12px",
                  marginTop: "30px",
                }}
              >
                View More
                <img
                  src="./images/Group 15091.png"
                  style={{
                    position: "absolute",
                    bottom: "0.1px",
                    left: "179px",
                  }}
                ></img>
              </NavLink>
            </Grid>
            <Grid item xs={5}>
              <img src="./images/Nguyen nho image.png" alt="" />
            </Grid>

            <Grid item xs={6}>
              <img src="./images/Hieu image.png" alt="" />
            </Grid>
            <Grid item xs={6} sx={{ padding: "200px 100px" }}>
              <Typography
                sx={{ fontSize: "36px", fontWeight: 700, margin: "100px 0" }}
              >
                Đặng Trung Hiếu
              </Typography>
              <Box
                sx={{
                  background: "#F3F25B",
                  width: "309px",
                  height: "3px",
                  marginTop: "-100px",
                }}
              ></Box>
              <Typography
                sx={{
                  fontFamily: "Lato, sans-serif",
                  fontSize: "20px",
                  color: "#848383",
                }}
              >
                Major: BCs Computer Science
                <br />
                Role: Fullstacked Developer
              </Typography>
              <NavLink
                to=""
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  color: "black",
                  width: "242px",
                  height: "53px",
                  alignItems: "center",
                  padding: "10px 70px",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "18px",
                  background: "#9BCDE9",
                  position: "relative",
                  borderRadius: "12px",
                  marginTop: "30px",
                }}
              >
                View More
                <img
                  src="./images/Group 15091.png"
                  style={{
                    position: "absolute",
                    bottom: "0.1px",
                    left: "179px",
                  }}
                ></img>
              </NavLink>
            </Grid>
            <Grid item xs={7} sx={{ padding: "200px 200px" }}>
              <Typography
                sx={{ fontSize: "36px", fontWeight: 700, margin: "100px 0" }}
              >
                Trần Đăng Khoa
              </Typography>
              <Box
                sx={{
                  background: "#F3F25B",
                  width: "309px",
                  height: "3px",
                  marginTop: "-100px",
                }}
              ></Box>
              <Typography
                sx={{
                  fontFamily: "Lato, sans-serif",
                  fontSize: "20px",
                  color: "#848383",
                }}
              >
                Major: BCs Computer Science
                <br />
                Role: UI/UX Designer
              </Typography>
              <NavLink
                to=""
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  color: "black",
                  width: "242px",
                  height: "53px",
                  alignItems: "center",
                  padding: "10px 70px",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "18px",
                  background: "#9BCDE9",
                  position: "relative",
                  borderRadius: "12px",
                  marginTop: "30px",
                }}
              >
                View More
                <img
                  src="./images/Group 15091.png"
                  style={{
                    position: "absolute",
                    bottom: "0.1px",
                    left: "179px",
                  }}
                ></img>
              </NavLink>
            </Grid>
            <Grid item xs={5}>
              <img src="./images/Khoa image.png" alt="" />
            </Grid>

            <Grid item xs={6}>
              <img src="./images/nguyen lon image.png" alt="" />
            </Grid>
            <Grid item xs={6} sx={{ padding: "200px 100px" }}>
              <Typography
                sx={{ fontSize: "36px", fontWeight: 700, margin: "100px 0" }}
              >
                Phan Nhật Nguyên
              </Typography>
              <Box
                sx={{
                  background: "#F3F25B",
                  width: "309px",
                  height: "3px",
                  marginTop: "-100px",
                }}
              ></Box>
              <Typography
                sx={{
                  fontFamily: "Lato, sans-serif",
                  fontSize: "20px",
                  color: "#848383",
                }}
              >
                Major: BCs Computer Science
                <br />
                Role: Business Analyst, PM
              </Typography>
              <NavLink
                to=""
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  color: "black",
                  width: "242px",
                  height: "53px",
                  alignItems: "center",
                  padding: "10px 70px",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "18px",
                  background: "#9BCDE9",
                  position: "relative",
                  borderRadius: "12px",
                  marginTop: "30px",
                }}
              >
                View More
                <img
                  src="./images/Group 15091.png"
                  style={{
                    position: "absolute",
                    bottom: "0.1px",
                    left: "179px",
                  }}
                ></img>
              </NavLink>
            </Grid>
            <Grid item xs={7} sx={{ padding: "200px 200px" }}>
              <Typography
                sx={{ fontSize: "36px", fontWeight: 700, margin: "100px 0" }}
              >
                Võ Như Đức Nghĩa
              </Typography>
              <Box
                sx={{
                  background: "#F3F25B",
                  width: "309px",
                  height: "3px",
                  marginTop: "-100px",
                }}
              ></Box>
              <Typography
                sx={{
                  fontFamily: "Lato, sans-serif",
                  fontSize: "20px",
                  color: "#848383",
                }}
              >
                Major: BCs Computer Science
                <br />
                Role: UX/UI Designer
              </Typography>
              <NavLink
                to=""
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  color: "black",
                  width: "242px",
                  height: "53px",
                  alignItems: "center",
                  padding: "10px 70px",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "18px",
                  background: "#9BCDE9",
                  position: "relative",
                  borderRadius: "12px",
                  marginTop: "30px",
                }}
              >
                View More
                <img
                  src="./images/Group 15091.png"
                  style={{
                    position: "absolute",
                    bottom: "0.1px",
                    left: "179px",
                  }}
                ></img>
              </NavLink>
            </Grid>
            <Grid item xs={5}>
              <img src="./images/Khoa image.png" alt="" />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default About;
