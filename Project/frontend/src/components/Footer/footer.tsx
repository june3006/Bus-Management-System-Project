import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./styles.css";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2C2C2C",
        width: "100%",
        height: "414",
        color: "white",
        padding: "30px 200px",
      }}
    >
      <Grid container>
        <Grid item xs={4}>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "18px",
              fontWeight: "Bold",
            }}
          >
            Information
          </Typography>
          <ul>
            <li>Main</li>
            <li>Projects</li>
            <li>Certification</li>
            <li>Contacts</li>
          </ul>
        </Grid>
        <Grid item xs={4}>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "18px",
              fontWeight: "Bold",
            }}
          >
            Contacts
          </Typography>
          <ul>
            <li>
              <img
                src="./images/location icon.png"
                className="contact-icon"
              ></img>
              1234 Sample Street
              <br /> Binh Duong Vietnam
            </li>
            <li>
              <img src="./images/phone icon.png" className="contact-icon"></img>
              512.333.2222
            </li>
            <li>
              <img src="./images/mail icon.png" className="contact-icon"></img>
              sampleemail@gamil.com
            </li>
          </ul>
        </Grid>
        <Grid item xs={4}>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "18px",
              fontWeight: "Bold",
            }}
          >
            Social Media
          </Typography>
          <img src="./images/facebook icon.png" alt="" />
          <img src="./images/twitter icon.png" alt="" />
          <img src="./images/Linked In icon.png" alt="" />
          <img src="./images/pininterest icon.png" alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
