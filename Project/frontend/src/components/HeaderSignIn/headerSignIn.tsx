import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import "./styles.css";
const Header = () => {
  return (
    <Box sx={{ padding: "20px 60px" }}>
      <Grid container>
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={1}>
              <img
                src="./images/Becamex icon with no background.png"
                alt=""
                style={{ marginBottom: "15px" }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  paddingLeft: "10px",
                  fontSize: "20px",
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontWeight: 500,
                }}
              >
                BECAMEX TOKYU
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid container sx={{ padding: "5px 0" }}>
            <Grid item xs={2}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-btn nav-btn-active" : "nav-btn"
                }
              >
                HOME PAGE
              </NavLink>
            </Grid>
            <Grid item xs={2}>
              <NavLink
                to={"/sign-up"}
                className={({ isActive }) =>
                  isActive ? " nav-btn nav-btn-active" : "nav-btn"
                }
              >
                SIGN UP
              </NavLink>
            </Grid>
            <Grid item xs={2}>
              <NavLink
                to="sign-in"
                className={({ isActive }) =>
                  isActive ? "nav-btn nav-btn-active" : "nav-btn"
                }
              >
                SIGN IN
              </NavLink>
            </Grid>
            <Grid item xs={2}>
              <NavLink
                to={"schedule"}
                className={({ isActive }) =>
                  isActive ? "nav-btn nav-btn-active" : "nav-btn"
                }
              >
                SCHEDULE
              </NavLink>
            </Grid>
            <Grid item xs={2}>
              <NavLink
                to={"about"}
                className={({ isActive }) =>
                  isActive ? " nav-btn nav-btn-active" : "nav-btn"
                }
              >
                ABOUT US
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
