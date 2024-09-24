import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./styles.css";
const Payment = () => {
  return (
    <>
      <Box sx={{ background: "#D4D7E3" }}>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* <Grid
            item
            xs={7}
            sx={{
              width: "1009px",
              height: "804px",
              background: "white",
              borderRadius: "20px",
              padding: "0 190px",
              marginLeft: "60px",
              marginTop: "100px",
            }}
          >
            {" "}
            <img src="/images/Login Form.png"></img>
            
          </Grid> */}
          {/* <Grid
            item
            xs={7}
            sx={{
              width: "1009px",
              height: "804px",
              background: "white",
              borderRadius: "20px",

              marginLeft: "60px",
              marginTop: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{fontFamily:"Roboto, sans-serif", fontSize: "36px", fontWeight: 600}}>Booking ID: 12345</Typography>
            <img
              src="/images/image 42.png"
              style={{ width: "163px", height: "163px" }}
              alt=""
            />
            <Typography sx={{fontFamily:"Roboto, sans-serif", fontSize: "50px",  fontWeight: 200}}>SUCCESS</Typography>
          </Grid> */}
          <Grid
            item
            xs={7}
            sx={{
              width: "1009px",
              height: "804px",
              background: "white",
              borderRadius: "20px",

              marginLeft: "60px",
              marginTop: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{fontFamily:"Roboto, sans-serif", fontSize: "36px", fontWeight: 600}}>Booking ID: 12345</Typography>
            <img
              src="/images/image 42 (1).png"
              style={{ width: "163px", height: "163px" }}
              alt=""
            />
            <Typography sx={{fontFamily:"Roboto, sans-serif", fontSize: "50px",  fontWeight: 200}}>FAILED</Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              width: "313px",
              height: "1000px",
              background: "#292929",
              padding: "100px 50px",
              color: "white",
            }}
          >
            <Typography sx={{ fontFamily: "Lato, sans-serif" }}>
              Preview Booking
            </Typography>
            <img
              src="../../images/bus.png"
              style={{ width: "180px", height: "181.2px" }}
            ></img>
            <Typography sx={{ fontFamily: "Lato, sans-serif" }}>
              1741D - Bus 001
            </Typography>
            <Typography sx={{ fontFamily: "Lato, sans-serif" }}>
              Date: March 15, 2024
            </Typography>
            <Typography sx={{ fontFamily: "Lato, sans-serif" }}>
              Route: HN - HCM
            </Typography>
            <Typography sx={{ fontFamily: "Lato, sans-serif" }}>
              Time Slot: 09:00
            </Typography>
            <Typography sx={{ fontFamily: "Lato, sans-serif" }}>
              Price: $49.99
            </Typography>
            <Box sx={{ padding: "50px 0" }}>
              <button className="booking-btn">Update</button>
              <button className="booking-btn">Cancel</button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Payment;
