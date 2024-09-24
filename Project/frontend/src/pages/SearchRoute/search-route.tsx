import { DirectionsBus, SearchOutlined } from "@mui/icons-material";
import GroupsIcon from "@mui/icons-material/Groups";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/system/Box";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";

const SearchRoute = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17T15:30"));
  const handleChangeFrom = (event: SelectChangeEvent) => {
    setFrom(event.target.value as string);
  };
  const handleChangeTo = (event: SelectChangeEvent) => {
    setTo(event.target.value as string);
  };
  return (
    <>
      <Box
        sx={{
          background: "black",
          padding: "100px 50px",
          position: "relative", // Ensure the black background box is positioned relatively
          zIndex: 1, // Ensure this box is behind the search box
        }}
      >
        <Grid container>
          <Grid item xs={7}>
            <Typography
              sx={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "59.46px",
                fontWeight: "Bold",
                color: "white",
              }}
            >
              It's A Big World Out
              <br /> There, Go Explore!
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ padding: "50px 50px" }}>
            <Typography
              sx={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "16.72px",
                color: "white",
              }}
            >
              We're here to make your travel dreams a reality. Our intuitive
              <br /> search engine scours thousands of trips to bring you the
              best
              <br /> deals tailored to your preferences and budget
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "500px",
          marginTop: "-100px", // Negative margin to pull the search box up
          position: "relative",
          zIndex: 2, // Ensure this box is above the black background box
        }}
      >
        <img src="./images/Frame 11.png" alt="" />
        <Grid
          container
          sx={{
            width: "1010.9px",
            height: "144.94px",
            borderRadius: "26.02px",
            boxShadow: "-1px -1px 24px 0px rgba(0,0,0,0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white", // Ensure the search box has a background
          }}
          columnSpacing={2}
        >
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">FROM</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={from}
                label="FROM"
                onChange={handleChangeFrom}
                startAdornment={
                  <InputAdornment position="start">
                    <DirectionsBus />
                  </InputAdornment>
                }
              >
                <MenuItem value="Ha Noi">Ha Noi</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">TO</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={to}
                label="TO"
                onChange={handleChangeTo}
                startAdornment={
                  <InputAdornment position="start">
                    <DirectionsBus />
                  </InputAdornment>
                }
              >
                <MenuItem value="Ha Noi">HCM</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="DATE" />
              </LocalizationProvider>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="TIME"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </LocalizationProvider>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="NUMBER OF PASSENGER"
                variant="outlined"
                type="text"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GroupsIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          endIcon={<SearchOutlined />}
          sx={{ position: "absolute", top: "200px", right: "680px" }}
        >
          Search Buses
        </Button>
      </Box>
    </>
  );
};

export default SearchRoute;
