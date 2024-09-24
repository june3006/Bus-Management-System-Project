import { SearchOutlined } from '@mui/icons-material';
import { Box, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { Table, TableProps } from 'antd';
import React, { useState } from 'react'
import BusDetailDrawer from '../../components/DrawerBusDetail/bus-detail-drawer';
import DeleteScheduleModal from '../../components/TransportOpertorModal/delete-schedule-modal';
import DrawerScheduleDetail from '../../components/DrawerScheduleDetail/DrawerScheduleDetail';

interface DataType {
  id: string;
  bus: string;
  date: string;
  route: string;
  timeSlot: string;
  price: string;
}

const TransportOperator = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState<string | null>(null);
  // const [token, setToken] = useState<string | null>(null);

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   console.log("Retrieved token:", storedToken);
  //   setToken(storedToken);
  // }, []);

  const handleClose = () => setIsModalOpen(false);
  const handleDeleteClose = () => setIsDeleteModalOpen(false);
  const showModal = () => setIsModalOpen(true);
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const handleCreateSchedule = () => setIsModalOpen(true);

  const handleModify= (record:any) => {
    console.log(record);
  }
  const handleDelete = (record:any) => {
    setIsDeleteModalOpen(true);
    setIdToDelete(record.id);
  }
  
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Bus",
      dataIndex: "bus",
      key: "bus",
      render: (_, record) => {
        return (
          <>
            <Box sx={{ display: "flex" }}>
              <img src="./images/bus.png" alt="Bus" />
              <Typography
                sx={{ marginTop: "50px" }}
                onClick={() => {
                  showDrawer();
                }}
              >
                {record.bus}
              </Typography>
            </Box>
          </>
        );
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Route",
      key: "route",
      dataIndex: "route",
    },
    {
      title: "Time Slot",
      key: "timeSlot",
      dataIndex: "timeSlot",
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <>
          <Grid container direction="column" spacing={2}>
          <Grid item xs={6}>
          <button
            style={{
              display: "inline-block",
              textDecoration: "none",
              color: "white",
              width: "62px",
              height: "42px",
              background: "black",
              textAlign: "center",
              padding: "6px 0",
              borderRadius: "8px",
              fontSize: "18px",
            }}
            onClick={()=> handleModify(record)}
          >
            Modify
          </button>
            </Grid>
            <Grid item xs={6}>
            <button
                    style={{
                      display: "inline-block",
                      textDecoration: "none",
                      color: "white",
                      width: "62px",
                      height: "42px",
                      background: "black",
                      textAlign: "center",
                      padding: "6px 0",
                      borderRadius: "8px",
                      fontSize: "18px",
                    }}
                    onClick={() => handleDelete(record)}
                  >
                    Delete
                  </button>
            </Grid>
          </Grid>
          </>
        );
      },
    },
  ];

  const data: DataType[] = [
    {
      id: "1741D",
      bus: "Bus 001",
      date: "Mar 15,2024",
      route: "HN-HCM",
      timeSlot: "9:00",
      price: "49,99",
    },
    // ... (other data entries)
  ];
  return (
    <>
    <Box sx={{ padding: "50px 50px" }}>
        <Grid container columnSpacing={4}>
          <Grid item xs={2.5}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlined/>
                  </InputAdornment>
                ),
              }}
              id="outlined-basic"
              variant="outlined"
              placeholder="Search..."
            />
          </Grid>
          <Grid item xs={1.5}>
            <button
              style={{
                display: "inline-block",
                textDecoration: "none",
                color: "white",
                width: "148px",
                height: "54px",
                background: "black",
                textAlign: "center",
                padding: "12px 0",
                borderRadius: "8px",
                fontSize: "18px",
              }}
            >
              Top Booking
            </button>
          </Grid>
          <Grid item xs={1.5}>
            <Box
              sx={{
                width: "165px",
                height: "54px",
                display: "flex",
                background: "#292929",
                padding: "0 10px",
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  display: "inline-block",
                  marginTop: "15px",
                  color: "white",
                }}
              >
                Filter:
              </Typography>
              <TextField
                placeholder="No ID"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                      marginTop: "15px",
                    },
                    "& input::placeholder": {
                      color: "white !important",
                      opacity: 1,
                    },
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={1}>
            <button
              style={{
                display: "inline-block",
                textDecoration: "none",
                color: "white",
                width: "148px",
                height: "54px",
                background: "black",
                textAlign: "center",
                padding: "12px 0",
                borderRadius: "8px",
                fontSize: "18px",
              }}
              onClick={handleCreateSchedule}
            >
              Create Schedule
            </button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: "50px 50px" }}>
        <Table columns={columns} dataSource={data} />
      </Box>
      {/* <CreateScheduleModal openModal={isModalOpen} handleClosed={handleClose} /> */}
      <DeleteScheduleModal openModal={isDeleteModalOpen} handleClosed={handleDeleteClose} idToDelete={idToDelete} />
      {/* <BusDetailDrawer open={open} onClose={onClose} /> */}
      <DrawerScheduleDetail open={open} onClose={onClose} />
    </>
  )
}

export default TransportOperator