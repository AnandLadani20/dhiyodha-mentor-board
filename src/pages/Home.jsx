import React from "react";
import Header from "./Header";
import { Box, Button, Grid, Typography } from "@mui/material";
import ModalBtn from "../components/common/ModalBtn";
import Register from "../components/common/Register";
import SponsorForm from "../components/common/SponsorForm";

const Home = () => {
  return (
    <>
      <Grid height="100vh" width="100vw" m="0 auto" overflow="auto">
        <Header />
        <Grid height="calc(100% - 90px)" overflow="auto">
          <Grid container justifyContent="space-evenly" px="25px" py="25px">
            <Grid item xs={8} md={4.5}></Grid>
            <Grid item xs={12} md={4.5}>
              <Typography variant="h3" fontWeight={600}>
                WOMEN DIRECTORS
              </Typography>
              <Typography variant="h3" fontWeight={600}>
                CONCLAVE 2022
              </Typography>
              <Typography variant="h3" fontWeight={600}>
                #WDC2022
              </Typography>
              <Typography variant="h5">
                CELEBRATE WOMEN BOARD LEADERS
              </Typography>
              <Button>Book Your Seat</Button>
            </Grid>
          </Grid>
          <ModalBtn btnName="Book Now">
            <Typography variant="h5">register</Typography>
            <Register />
          </ModalBtn>
          <ModalBtn btnName="Become A Sponsor">
            <Typography variant="h5">Please Enter Your Details</Typography>
            <SponsorForm/>
          </ModalBtn>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
