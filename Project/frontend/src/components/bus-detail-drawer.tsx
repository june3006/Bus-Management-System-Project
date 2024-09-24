import React, { useState } from "react";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Button, Drawer, Radio, Space } from "antd";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useRoutes } from "react-router-dom";
type BusDetailDrawerProp = {
  open: boolean;
  onClose: () => void;
};
const BusDetailDrawer = ({ open, onClose }: BusDetailDrawerProp) => {
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");
  const route = useRoutes
  console.log(route)
  return (
    <>
      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        style={{ background: "#292929" }}
      >
        <Box sx={{color: "white", }}>
          <Typography sx={{fontFamily: "Lato, sans-serif"}}>Preview Booking</Typography>
          <img src="./images/bus.png" style={{width:"180px", height:"181.2px"}}></img>
          <Typography sx={{fontFamily: "Lato, sans-serif"}}>1741D - Bus 001</Typography>
          <Typography sx={{fontFamily: "Lato, sans-serif"}}>Date: March 15, 2024</Typography>
          <Typography sx={{fontFamily: "Lato, sans-serif"}}>Route: HN - HCM</Typography>
          <Typography sx={{fontFamily: "Lato, sans-serif"}}>Time Slot: 09:00</Typography>
          <Typography sx={{fontFamily: "Lato, sans-serif"}}>Price: $49.99</Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default BusDetailDrawer;
