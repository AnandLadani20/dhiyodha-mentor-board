import React from "react";
import Header from "./Header";
import { Box, Button, Grid, Typography } from "@mui/material";
import ModalBtn from "../components/common/ModalBtn";
import Register from "../components/common/Register";
import SponsorForm from "../components/common/SponsorForm";
import herobg from '../files/images/council.jpg'

const Home = () => {
  return (
    <>
      <Grid height="100vh" width="100vw" m="0 auto" overflow="auto">
        <Header />
        <Grid height="calc(100% - 90px)" overflow="auto" sx={{position:"relative"}}>
          <Box sx={{position:"absolute",zIndex:"-1",height:"100%",width:"100%","::before":{content:"' '",position:"absolute",zIndex:"1",top:0,left:0,width:"100%",height:"100%",backgroundColor:"#1f5cff",opacity:0.7}}}>
            <img src={herobg} alt="hero-bg" style={{height:"100%",width:"100%",position:"absolute",zIndex:"-2"}}/>
          </Box>
          <Grid container justifyContent="space-evenly" height="100%" alignItems="center" px="25px" py="25px">
            <Grid item xs={12} md={4.5}>
              <Typography variant="h2" color="#fff" sx={{letterSpacing:"-2px"}} fontWeight={500}>
                WOMEN DIRECTORS
              </Typography>
              <Typography variant="h2" color="#fff" sx={{letterSpacing:"-2px"}} fontWeight={500}>
                CONCLAVE 2024
              </Typography>
              <Typography variant="h2" color="#fff" sx={{letterSpacing:"-2px"}} fontWeight={500}>
                #WDC2024
              </Typography>
              <Typography variant="h5"  color="#fff">
                CELEBRATE WOMEN BOARD LEADERS
              </Typography>
              <Button>Book Your Seat</Button>
            </Grid>
            <Grid item xs={8} md={4.5}></Grid>
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
    </>
  );
};

export default Home;
