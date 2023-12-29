import React, { useState, useEffect } from "react";
import Header from "./Header";
import {
  Box,
  Button,
  Grid,
  Paper,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import ModalBtn from "../components/common/ModalBtn";
import Register from "../components/common/Register";
import SponsorForm from "../components/common/SponsorForm";
import herobg from "../files/images/council.jpg";
import heroImage from "../files/images/heroposter5.png";
import joinUsImg from "../files/images/whyUs.png";
import speechImg from "../files/images/speechImg.jpg";

import womenPoster from "../files/images/poster.png";
import womenbanner from "../files/images/speechImg3.jpg";

import guest1 from "../files/images/guest1.jpg";
import guest2 from "../files/images/guest2.jpg";
import guest3 from "../files/images/guest3.jpg";
import guest4 from "../files/images/guest4.jpg";
import companyLogo1 from "../files/sponser-logo/Screenshot 2023-12-22 113138.png";
import companyLogo2 from "../files/sponser-logo/Screenshot 2023-12-22 113148.png";
import companyLogo3 from "../files/sponser-logo/Screenshot 2023-12-22 113156.png";
import companyLogo4 from "../files/sponser-logo//Screenshot 2023-12-22 113209.png";

import { ReactComponent as GrowthIcon } from "../files/icon/growthIcon.svg";
import { ReactComponent as FacebookIcon } from "../files/icon/fbIcon.svg";
import { ReactComponent as InstaIcon } from "../files/icon/instaIcon.svg";
import { ReactComponent as LinkedinIcon } from "../files/icon/linkedinIcon.svg";
import { ReactComponent as TwitterIcon } from "../files/icon/twitterIcon.svg";

// react swiper js Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  const [activeScale, setActiveScale] = useState(false);

  useEffect(() => {
    // This code runs when the component mounts
    setActiveScale(true);

    // If you want to perform cleanup when the component unmounts,
    // you can return a function from the useEffect
    return () => {
      // Cleanup code (optional)
      // setActiveScale(false);
    };
  }, []);

  //  CountDownTimer
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const updatedTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(updatedTimeRemaining);

      if (
        updatedTimeRemaining.days === 0 &&
        updatedTimeRemaining.hours === 0 &&
        updatedTimeRemaining.minutes === 0 &&
        updatedTimeRemaining.seconds === 0
      ) {
        setShowButton(true);
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const targetDate = new Date("January 1, 2024 00:00:00 GMT+00:00"); // Change this date accordingly

    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      // Timer has reached zero
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }
  // End

  // Scrolling section when click Book Your Seat
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  // End

  return (
    <>
      <Grid height="100vh" width="100vw" m="0 auto" overflow="auto">
        <Header />
        <Grid
          py={{ xs: 3, md: 4, lg: 8 }}
          // height="calc(100% - 90px)"
          overflow="hidden"
          sx={{ position: "relative" }}
        >
          <Box
            id="hero-box"
            sx={{
              position: "absolute",
              zIndex: "-1",
              height: "100%",
              width: "100%",
              top: "0",
              transition: "transform 0.3s ease",
              "::before": {
                content: "' '",
                position: "absolute",
                zIndex: "1",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#0038e0",
                // background:"linear-gradient(to right bottom,#0c62e1,#0998d4,#33bba1)",
                opacity: 0.7,
              },
            }}
          >
            <img
              src={herobg}
              alt="hero-bg"
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                zIndex: "-2",
                transform: "scale(1)",
                transition: "transform 6s ease",
              }}
              className={
                activeScale
                  ? "hero-bg-imgStyle hero-bg-scale "
                  : "hero-bg-imgStyle"
              }
            />
          </Box>
          <Grid
            container
            justifyContent="center"
            height="100%"
            alignItems="center"
          >
            <Grid item xs={10} md={10} lg={9}>
              <Grid container rowSpacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                  <Box
                    className="hero-text-bg"
                    textAlign={{ xs: "center", md: "start" }}
                  >
                    <Typography
                      variant="h2"
                      color="#fff"
                      sx={{
                        lineHeight: "3.5rem",
                        fontWeight: "500",
                      }}
                      mb={{ xs: 0, md: 1 }}
                      className="heading_common_style"
                    >
                      WOMEN DIRECTORS
                    </Typography>
                    <Typography
                      variant="h2"
                      color="#fff"
                      sx={{
                        lineHeight: "3.5rem",
                        fontWeight: "500",
                      }}
                      mb={{ xs: 0, md: 1 }}
                      className="heading_common_style"
                    >
                      CONCLAVE 2024
                    </Typography>
                    <Typography
                      variant="h2"
                      color="#fff"
                      sx={{
                        lineHeight: "3.5rem",
                        fontWeight: "500",
                      }}
                      mb={{ xs: 0, md: 1 }}
                      className="heading_common_style"
                    >
                      #WDC2024
                    </Typography>
                    <Typography
                      variant="h5"
                      color="#fff"
                      sx={{
                        lineHeight: "3rem",
                        fontWeight: "500",
                      }}
                      mb={{ xs: 0, md: 1 }}
                      className="heading_common_style"
                    >
                      CELEBRATE WOMEN BOARD LEADERS
                    </Typography>

                    <Button
                      sx={{
                        backgroundColor: "#fff",
                        border: "1px solid #ed3337",
                        borderRadius: "5px",

                        color: "#ed3337",
                        fontSize: "16px",
                        ":hover": { backgroundColor: "#ed3337", color: "#fff" },
                      }}
                    >
                      Book Your Seat
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Box
                    sx={{
                      position: "relative",
                    }}
                    display="flex"
                    justifyContent={{ xs: "center", md: "flex-end" }}
                  >
                    {/* <Box sx={{position:"absolute",top:"-40px",left:"40px"}}>
                      <img src={dotImage} alt="dots" height={150}/>
                    </Box> */}
                    <Box>
                      <img
                        src={heroImage}
                        alt="hero"
                        style={{ maxWidth: "450px", width: "100%" }}
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          py={5}
          sx={{ backgroundColor: "#f8f8f83d" }}
        >
          <Grid
            item
            xs={10}
            md={10}
            lg={9}
            p={{ xs: 1, md: 2, lg: 3 }}
            sx={{
              boxShadow: "0 10px 180px #0000001a",
              backgroundColor: "#fff",
              borderRadius: "5px",
            }}
          >
            <Grid
              container
              columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 5 }}
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                md={4}
                textAlign={{ xs: "center", md: "start" }}
                mb={{ xs: "30px", md: "0" }}
              >
                <Tooltip title="You don't have permission to do this">
                  <span>
                    <Button
                      sx={{
                        borderRadius: "0",
                        ":hover": { backgroundColor: "#f56016", color: "#fff" },
                      }}
                    >
                      Join Now
                    </Button>
                    {/* after complete timer to shown this button */}
                    {/* {showButton && <button>Join Now</button>} */}
                  </span>
                </Tooltip>
              </Grid>
              <Grid item xs={3} md={2} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    backgroundColor: "#223f93",
                    color: "#fff",
                  }}
                  fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
                  py={{ xs: 1, sm: 1, md: 1, lg: 1.2 }}
                >
                  {timeRemaining.days}
                </Box>
                <Typography>Days</Typography>
              </Grid>
              <Grid item xs={3} md={2} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    backgroundColor: "#4bc2ec",
                    color: "#fff",
                  }}
                  fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
                  py={{ xs: 1, sm: 1, md: 1, lg: 1.2 }}
                >
                  {timeRemaining.hours}
                </Box>
                <Typography>Hours</Typography>
              </Grid>
              <Grid item xs={3} md={2} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    backgroundColor: "#ed3337",
                    color: "#fff",
                  }}
                  fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
                  py={{ xs: 1, sm: 1, md: 1, lg: 1.2 }}
                >
                  {timeRemaining.minutes}
                </Box>
                <Typography>Minutes</Typography>
              </Grid>
              <Grid item xs={3} md={2} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    backgroundColor: "#f56016",
                    color: "#fff",
                  }}
                  fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
                  py={{ xs: 1, sm: 1, md: 1, lg: 1.2 }}
                >
                  {timeRemaining.seconds}
                </Box>
                <Typography>Secs</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" mb={4}>
          <Grid item xs={10} md={10} lg={9}>
            <img
              src={womenPoster}
              alt="woman-poster"
              width="100%"
              height="auto"
              overflow="hidden"
            />
          </Grid>
          <Grid item xs={10} md={10} lg={9} textAlign="center" mt={2}>
            <Typography
              variant="h4"
              mb={2}
              className="heading_common_style"
              color="#223f93"
            >
              OFFICIAL SPONSORS
            </Typography>
            <ModalBtn btnName="Become A Sponsor">
              <Typography variant="h5">Please Enter Your Details</Typography>
              <SponsorForm />
            </ModalBtn>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          position="relative"
          id="bookSeat"
        >
          <Grid item xs={10} md={10} lg={9} bgcolor="#f3f4f6" p={2}>
            <Grid container justifyContent="space-between">
              <Grid item xs={12} md={12} lg={3}>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "600" }}>
                    Choose the perfect plan
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio, natus.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={12} lg={8}>
                <Grid
                  container
                  rowSpacing={{ xs: 2, sm: 1, md: 2 }}
                  columnSpacing={{ xs: 2, sm: 1, md: 2 }}
                >
                  <Grid item xs={12} sm={6} md={6}>
                    <Paper
                      sx={{
                        backgroundColor: "#ffffff73",
                        border: "1px solid #223f93",
                        padding: "8px",
                        textAlign: "center",
                        color: "#000",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        className="heading_common_style"
                        mt={2}
                      >
                        Online Event
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptas, voluptatibus.
                      </Typography>
                      <Typography
                        variant="h5"
                        fontWeight={500}
                        mt={2}
                        className="heading_common_style"
                      >
                        <span style={{ fontSize: "14px" }}>₹</span> 799/-{" "}
                        <span style={{ fontSize: "14px" }}>+ GST</span>
                      </Typography>

                      <Box my={2}>
                        <ModalBtn btnName="Book Now">
                          <Typography variant="h5" mb={1}>
                            Register
                          </Typography>
                          <Register />
                        </ModalBtn>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Paper
                      sx={{
                        backgroundColor: "#ffffff73",
                        border: "1px solid #223f93",
                        padding: "8px",
                        textAlign: "center",
                        color: "#000",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        className="heading_common_style"
                        mt={2}
                      >
                        Physical Presence
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptas, voluptatibus.
                      </Typography>
                      <Typography
                        variant="h5"
                        fontWeight={500}
                        mt={2}
                        className="heading_common_style"
                      >
                        <span style={{ fontSize: "14px" }}>₹</span> 1999/-
                        <span style={{ fontSize: "14px" }}> + GST</span>
                      </Typography>

                      <Box my={2}>
                        <ModalBtn btnName="Book Now">
                          <Typography variant="h5">register</Typography>
                          <Register />
                        </ModalBtn>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" mt={2} py={2}>
          <Grid item xs={10} md={10} lg={9} textAlign="center">
            <Typography textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              facere necessitatibus non quisquam consequatur porro temporibus.
              Necessitatibus voluptas mollitia culpa. Ab qui quis explicabo vero
              possimus tempore voluptatem pariatur doloribus necessitatibus,
              facilis nesciunt repudiandae numquam harum earum repellendus fuga
              quod, aspernatur sunt perferendis in? Ipsam, a. Minima pariatur
              accusamus officiis mollitia ipsum odio rem itaque fugiat
              doloremque incidunt, quod consequuntur dolore nulla facere earum
              impedit ratione neque laudantium beatae. Omnis tempora dignissimos
              sequi dolores saepe facilis iste quasi consequuntur culpa facere
              vitae autem explicabo consectetur excepturi, modi nostrum
              voluptatum quidem ex voluptas laudantium impedit atque officia ad.
              Repellat quam officia dolore, velit exercitationem eaque neque
              numquam autem tempora provident illum aliquam placeat quisquam
              quia mollitia esse quaerat repudiandae sint quod iusto et
              voluptatem! Earum qui dignissimos excepturi necessitatibus iste?
              Ipsa, saepe. Quibusdam, optio, aliquid at tempore
            </Typography>

            <Typography textAlign="justify" mt={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              facere necessitatibus non quisquam consequatur porro temporibus.
              Necessitatibus voluptas mollitia culpa. Ab qui quis explicabo vero
              possimus tempore voluptatem pariatur doloribus necessitatibus,
              facilis nesciunt repudiandae numquam harum earum repellendus fuga
              quod, aspernatur sunt perferendis in? Ipsam, a. Minima pariatur
            </Typography>
            <Box></Box>
            <Button sx={{ marginTop: "40px" }}>
              Perception of Women Directors on Boards
            </Button>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" mt={4}>
          <Grid item xs={10} md={10} lg={9} textAlign="center">
            <Typography
              variant="h4"
              mb={2}
              className="heading_common_style"
              color="#223f93"
            >
              SERVICES
            </Typography>
          </Grid>
          <Grid item xs={10} md={10} lg={9}>
            <Grid container columnSpacing={2} rowSpacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Paper className="service_contain_wrap">
                  <Box className="service_svg_wrapper">
                    <GrowthIcon />
                  </Box>
                  <Typography variant="h5" mt={1}>
                    Title
                  </Typography>
                  <Typography textAlign="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae architecto libero veniam voluptatum
                    exercitationem ducimus.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper className="service_contain_wrap">
                  <Box className="service_svg_wrapper">
                    <GrowthIcon />
                  </Box>
                  <Typography variant="h5" mt={1}>
                    Title
                  </Typography>
                  <Typography textAlign="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae architecto libero veniam voluptatum
                    exercitationem ducimus.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper className="service_contain_wrap">
                  <Box className="service_svg_wrapper">
                    <GrowthIcon />
                  </Box>
                  <Typography variant="h5" mt={1}>
                    Title
                  </Typography>
                  <Typography textAlign="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae architecto libero veniam voluptatum
                    exercitationem ducimus.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper className="service_contain_wrap">
                  <Box className="service_svg_wrapper">
                    <GrowthIcon />
                  </Box>
                  <Typography variant="h5" mt={1}>
                    Title
                  </Typography>
                  <Typography textAlign="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae architecto libero veniam voluptatum
                    exercitationem ducimus.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper className="service_contain_wrap">
                  <Box className="service_svg_wrapper">
                    <GrowthIcon />
                  </Box>
                  <Typography variant="h5" mt={1}>
                    Title
                  </Typography>
                  <Typography textAlign="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae architecto libero veniam voluptatum
                    exercitationem ducimus.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper className="service_contain_wrap">
                  <Box className="service_svg_wrapper">
                    <GrowthIcon />
                  </Box>
                  <Typography variant="h5" mt={1}>
                    Title
                  </Typography>
                  <Typography textAlign="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae architecto libero veniam voluptatum
                    exercitationem ducimus.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" mt={5} mb={5}>
          <Grid item xs={10} md={10} lg={9}>
            <Grid
              container
              justifyContent="space-evenly"
              columnSpacing={{ xs: 1, sm: 2, md: 1, lg: 2 }}
              rowSpacing={2}
            >
              <Grid
                item
                xs={12}
                md={4.5}
                lg={4}
                textAlign="center"
                sx={{ overflow: "hidden" }}
              >
                <Typography
                  variant="h4"
                  mb={2}
                  className="heading_common_style"
                  color="#223f93"
                >
                  CHIEF GUEST
                </Typography>
                <Box className="guest-img-container box-tab">
                  <Box
                    height="100%"
                    width="100%"
                    className="effect effect-three"
                  >
                    <img
                      src={guest2}
                      alt="chief-guest"
                      height={350}
                      width="100%"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <Box className="tab-text">
                      <Typography className="">
                        <Link to="#">
                          <FacebookIcon />
                        </Link>
                        <Link to="#">
                          <TwitterIcon />
                        </Link>
                        <Link to="#">
                          <LinkedinIcon />
                        </Link>
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="guest-img-hover-hide" mt={1}>
                    <Typography
                      fontSize="16px"
                      fontWeight={600}
                      color="#223f93"
                    >
                      Smt. Nirmala Sitharaman
                    </Typography>
                    <Typography>
                      Hon'ble Union Minister of Finance & Corporate Affairs,
                      Government of India
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={7.5}
                lg={8}
                textAlign="center"
                sx={{ overflow: "hidden" }}
              >
                <Typography
                  variant="h4"
                  mb={2}
                  className="heading_common_style"
                  color="#223f93"
                >
                  KEY NOTE SPEAKERS
                </Typography>
                <Grid
                  container
                  justifyContent={{ xs: "center", md: "flex-end" }}
                  columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
                >
                  <Grid item xs={6} md={5.5} lg={5}>
                    <Box className="guest-img-container box-tab">
                      <Box
                        height={{ xs: "250px", md: "300px" }}
                        width="100%"
                        className="effect effect-three"
                      >
                        <img
                          src={guest2}
                          alt="chief-guest"
                          height="100%"
                          width="100%"
                          style={{
                            objectFit: "cover",
                          }}
                        />
                        <Box className="tab-text">
                          <Typography className="">
                            <Link to="#">
                              <FacebookIcon />
                            </Link>
                            <Link to="#">
                              <TwitterIcon />
                            </Link>
                            <Link to="#">
                              <LinkedinIcon />
                            </Link>
                          </Typography>
                        </Box>
                      </Box>
                      <Box className="guest-img-hover-hide" mt={1}>
                        <Typography
                          fontSize="16px"
                          fontWeight={600}
                          color="#223f93"
                        >
                          Smt. Nirmala Sitharaman
                        </Typography>
                        <Typography>
                          Hon'ble Union Minister of Finance & Corporate Affairs,
                          Government of India
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={5.5} lg={5}>
                    <Box className="guest-img-container box-tab">
                      <Box
                        height={{ xs: "250px", md: "300px" }}
                        width="100%"
                        className="effect effect-three"
                      >
                        <img
                          src={guest2}
                          alt="chief-guest"
                          height="100%"
                          width="100%"
                          style={{
                            objectFit: "cover",
                          }}
                        />
                        <Box className="tab-text">
                          <Typography className="">
                            <Link to="#">
                              <FacebookIcon />
                            </Link>
                            <Link to="#">
                              <TwitterIcon />
                            </Link>
                            <Link to="#">
                              <LinkedinIcon />
                            </Link>
                          </Typography>
                        </Box>
                      </Box>
                      <Box className="guest-img-hover-hide" mt={1}>
                        <Typography
                          fontSize="16px"
                          fontWeight={600}
                          color="#223f93"
                        >
                          Smt. Nirmala Sitharaman
                        </Typography>
                        <Typography>
                          Hon'ble Union Minister of Finance & Corporate Affairs,
                          Government of India
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" mt={5} mb={5}>
          <Grid item xs={10} md={10} lg={9} textAlign="center">
            <Typography
              variant="h4"
              mb={2}
              className="heading_common_style"
              color="#223f93"
            >
              SPEAKERS WHO ARE EXPERTS IN THEIR FIELDS
            </Typography>
          </Grid>
          <Grid item xs={10} md={10} lg={9} textAlign="start" mt={4}>
            <Grid container columnSpacing={1} rowSpacing={2}>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Box className="guest-content-wrap">
                  <Box className="guest-img-wrap">
                    <img
                      src={guest1}
                      alt="guest"
                      height="100%"
                      width="100%"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                    <Box className="guest_social_media_wrap">
                      <Box className="media_item_wrap">
                        <FacebookIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <InstaIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <TwitterIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <LinkedinIcon />
                      </Box>
                    </Box>
                  </Box>
                  <Typography fontWeight={600} mt={1} textAlign="center">
                    Latha Venkatesh
                  </Typography>
                  <Typography textAlign="center">
                    Executive Editor at CNBC TV18
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Box className="guest-content-wrap">
                  <Box className="guest-img-wrap">
                    <img
                      src={guest1}
                      alt="guest"
                      height="100%"
                      width="100%"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                    <Box className="guest_social_media_wrap">
                      <Box className="media_item_wrap">
                        <FacebookIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <InstaIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <TwitterIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <LinkedinIcon />
                      </Box>
                    </Box>
                  </Box>
                  <Typography fontWeight={600} mt={1} textAlign="center">
                    Robin Banerjee
                  </Typography>
                  <Typography textAlign="center">
                    MD, Caprihans I Ltd
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Box className="guest-content-wrap">
                  <Box className="guest-img-wrap">
                    <img
                      src={guest1}
                      alt="guest"
                      height="100%"
                      width="100%"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                    <Box className="guest_social_media_wrap">
                      <Box className="media_item_wrap">
                        <FacebookIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <InstaIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <TwitterIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <LinkedinIcon />
                      </Box>
                    </Box>
                  </Box>
                  <Typography fontWeight={600} mt={1} textAlign="center">
                    Bhavana Bindra
                  </Typography>
                  <Typography textAlign="center">
                    Managing Director, REHAU South Asia
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Box className="guest-content-wrap">
                  <Box className="guest-img-wrap">
                    <img
                      src={guest1}
                      alt="guest"
                      height="100%"
                      width="100%"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                    <Box className="guest_social_media_wrap">
                      <Box className="media_item_wrap">
                        <FacebookIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <InstaIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <TwitterIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <LinkedinIcon />
                      </Box>
                    </Box>
                  </Box>
                  <Typography fontWeight={600} mt={1} textAlign="center">
                    Priti Savla
                  </Typography>
                  <Typography textAlign="center">
                    CCM - ICAI, Mentor, Independent Director
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Box className="guest-content-wrap">
                  <Box className="guest-img-wrap">
                    <img
                      src={guest1}
                      alt="guest"
                      height="100%"
                      width="100%"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                    <Box className="guest_social_media_wrap">
                      <Box className="media_item_wrap">
                        <FacebookIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <InstaIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <TwitterIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <LinkedinIcon />
                      </Box>
                    </Box>
                  </Box>
                  <Typography fontWeight={600} mt={1} textAlign="center">
                    Sridhar Ramachandran
                  </Typography>
                  <Typography textAlign="center">
                    Author, Mentor and Advisor at Indianivesh Renaissance Fund
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3} lg={3}>
                <Box className="guest-content-wrap">
                  <Box className="guest-img-wrap">
                    <img
                      src={guest1}
                      alt="guest"
                      height="100%"
                      width="100%"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                    <Box className="guest_social_media_wrap">
                      <Box className="media_item_wrap">
                        <FacebookIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <InstaIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <TwitterIcon />
                      </Box>
                      <Box className="media_item_wrap">
                        <LinkedinIcon />
                      </Box>
                    </Box>
                  </Box>
                  <Typography fontWeight={600} mt={1} textAlign="center">
                    Amisha Vora
                  </Typography>
                  <Typography textAlign="center">
                    Owner and Joint MD at Prabhudas Lilladher
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" mt={5} mb={5}>
          <Grid item xs={12} position="relative">
            {/* <Box
              height="400px"
              width="100%"
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "::before": {
                  content: "' '",
                  position: "absolute",
                  zIndex: "-1",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "400px",
                  backgroundColor: "#1f5cff",
                  opacity: 0.7,
                },
              }}
            >
              
              <img
                src={womenbanner}
                alt="women-bg-poster"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                  zIndex: "-2",
                  height: "400px",
                  width: "100%",
                }}
              />
              <Typography variant="h4" textAlign="center" color="#fff">
                Lorem ipsum dolor sit amet.
              </Typography>
            </Box> */}
            <Box
              height={{ xs: "300px", md: "350px" }}
              sx={{
                position: "relative",
                backgroundImage: `url(${womenbanner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                zIndex: "-2",
                width: "100%",
                backgroundAttachment: "fixed",
                "::before": {
                  content: "' '",
                  position: "absolute",
                  zIndex: "-1",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#1f5cff",
                  opacity: 0.7,
                },
              }}
            >
              <Box sx={{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Typography variant="h4" textAlign="center" color="#fff">
                  Lorem ipsum dolor sit amet.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" mb={5}>
          <Grid item xs={10} md={10} lg={9}>
            <Grid container rowSpacing={2}>
              <Grid item xs={12} textAlign="center" mb={3}>
                <Typography
                  variant="h4"
                  className="heading_common_style"
                  color="#223f93"
                >
                  JOIN US
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Typography
                  variant="h4"
                  className="heading_common_style"
                  color="#223f93"
                >
                  Who Should Join?
                </Typography>
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsum consequuntur quisquam ducimus, asperiores animi minus
                  earum accusamus facere voluptatibus dolor.Ipsum consequuntur
                  quisquam ducimus, asperiores animi minus earum accusamus
                  facere voluptatibus dolor.
                </Typography>
                <Typography
                  variant="h4"
                  className="heading_common_style"
                  color="#223f93"
                  mt={1}
                >
                  Why You Should Join?
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo quis ducimus quisquam libero ex facere!
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo quis ducimus quisquam libero ex facere!
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo quis ducimus quisquam libero ex facere!
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo quis ducimus quisquam libero ex facere!
                </Typography>
                <Button
                  style={{ marginTop: "20px" }}
                  onClick={() => handleScrollTo("bookSeat")}
                >
                  Book Your Seat
                </Button>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                  }}
                  justifyContent={{ xs: "center", md: "flex-end" }}
                >
                  <img
                    src={joinUsImg}
                    alt="img-banner"
                    style={{
                      maxWidth: "500px",
                      width: "100%",
                      padding: "20px",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          sx={{ backgroundColor: "#d0ddff" }}
        >
          <Grid item xs={10} md={10} lg={9} py={2}>
            <Grid container columnSpacing={2}>
              <Grid item xs={12} md={3} p={2}>
                <Typography>FAQ</Typography>
                <Typography variant="h4"> Common Questions</Typography>
                <Typography>
                  Here are some of the most common questions that we get
                </Typography>
              </Grid>
              <Grid item xs={12} md={9} p={2}>
                <Typography variant="h5">What is My Mentor Board?</Typography>
                <Typography mt={1}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum voluptate perspiciatis ducimus earum ipsum? Inventore
                  temporibus placeat et id excepturi.
                </Typography>
                <Typography mt={1} variant="h5">
                  How does My Mentor Board work?
                </Typography>
                <Typography mt={1}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, sed magnam! Veritatis nobis temporibus ex! Cupiditate
                  tenetur itaque dolorum quidem, ut quas reprehenderit labore
                  odit?
                </Typography>
                <Typography mt={1} variant="h5">
                  Who can become a mentor on My Mentor Board?
                </Typography>
                <Typography mt={1}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt porro, distinctio, qui itaque accusantium hic minus
                  nulla quisquam repudiandae eius, vero consequatur soluta optio
                  unde fuga rem labore ea aperiam.
                </Typography>
                <Typography mt={1} variant="h5">
                  Is there a fee for using My Mentor Board?
                </Typography>
                <Typography mt={1}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt porro, distinctio, qui itaque accusantium hic minus
                  nulla quisquam repudiandae eius, vero consequatur soluta optio
                  unde fuga rem labore ea aperiam.
                </Typography>
                <Typography mt={1} variant="h5">
                  How can i contact the support team of My Mentor Board?
                </Typography>
                <Typography mt={1}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt porro, distinctio, qui itaque accusantium hic minus
                  nulla quisquam repudiandae eius, vero consequatur soluta optio
                  unde fuga rem labore ea aperiam.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" mt={5} mb={5}>
          <Grid item xs={10} md={10} lg={9}>
            <Grid container mt={3}>
              <Grid item xs={12} textAlign="center" mb={3}>
                <Typography
                  variant="h4"
                  className="heading_common_style"
                  color="#223f93"
                >
                  TITLE SPONSER
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" mt={5} mb={5}>
          <Grid item xs={10} md={10} lg={9}>
            <Grid container mt={3}>
              <Grid item xs={12} textAlign="center" mb={3}>
                <Typography
                  variant="h4"
                  className="heading_common_style"
                  color="#223f93"
                >
                  #WDC2022 COMMUNITY PARTNERS
                </Typography>
              </Grid>
              <Grid
                item
                lg={12}
                sx={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <Swiper
                  slidesPerView={5}
                  spaceBetween={30}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  speed={2000}
                  modules={[Autoplay]}
                  className="mySecondSwiper"
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    390: {
                      slidesPerView: 2,
                    },
                    502: {
                      slidesPerView: 3,
                    },
                    802: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  <SwiperSlide>
                    <Box border="1px solid gray">
                      <img
                        src={companyLogo1}
                        alt="sponser-company"
                        height={100}
                      />
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid gray">
                      <img
                        src={companyLogo2}
                        alt="sponser-company"
                        height={100}
                      />
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid gray">
                      <img
                        src={companyLogo3}
                        alt="sponser-company"
                        height={100}
                      />
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid gray">
                      <img
                        src={companyLogo4}
                        alt="sponser-company"
                        height={100}
                      />
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid gray">
                      <img
                        src={companyLogo1}
                        alt="sponser-company"
                        height={100}
                      />
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid gray">
                      <img
                        src={companyLogo2}
                        alt="sponser-company"
                        height={100}
                      />
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid gray">
                      <img
                        src={companyLogo3}
                        alt="sponser-company"
                        height={100}
                      />
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid gray">
                      <img
                        src={companyLogo4}
                        alt="sponser-company"
                        height={100}
                      />
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid gray">
                      <img
                        src={companyLogo1}
                        alt="sponser-company"
                        height={100}
                      />
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid gray">
                      <img
                        src={companyLogo2}
                        alt="sponser-company"
                        height={100}
                      />
                    </Box>
                  </SwiperSlide>
                </Swiper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" mt={5} mb={5}>
          <Grid item xs={10} md={10} lg={9}>
            <Grid container mt={3} columnSpacing={2} rowSpacing={2}>
              <Grid item xs={12} textAlign="center" mb={3}>
                <Typography
                  variant="h4"
                  className="heading_common_style"
                  color="#223f93"
                >
                  ABOUT WOMEN
                </Typography>
                <Typography
                  variant="h4"
                  className="heading_common_style"
                  color="#223f93"
                >
                  DIRECTORS CONCLAVE 2024
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={speechImg}
                    alt="img-banner"
                    style={{ width: "100%" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Typography textAlign="justify">
                  Lorem ipsum dolor sit, Quae perspiciatis error tempore nulla
                  cum sunt id iste inventore aut adipisci, tempora quasi nostrum
                  itaque. Iusto! amet consectetur adipisicing elit. Quae
                  perspiciatis error tempore nulla cum sunt id iste inventore
                  aut adipisci, tempora quasi nostrum itaque. Iusto!
                </Typography>
                <Typography variant="h6" mt={2}>
                  Objective of the Conclave is to -
                </Typography>
                <Typography ml={2} mt={1} textAlign="justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur, amet optio labore similique aspernatur mollitia!
                </Typography>
                <Typography ml={2} textAlign="justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur, amet optio labore similique aspernatur mollitia!
                </Typography>
                <Typography ml={2} textAlign="justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur, amet optio labore similique aspernatur mollitia!
                </Typography>
                <Typography ml={2} textAlign="justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur, amet optio labore similique aspernatur mollitia!
                </Typography>
                <Button
                  style={{ marginTop: "20px" }}
                  onClick={() => handleScrollTo("bookSeat")}
                >
                  Book Your Seat
                </Button>
              </Grid>
              <Grid item xs={12} lg={12} mt={5} mb={3}>
                <Typography
                  variant="h4"
                  className="heading_common_style"
                  color="#223f93"
                >
                  ABOUT MENTORMYBOARD
                </Typography>
                <Typography mt={1}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt totam neque maxime vero illo explicabo iusto culpa
                  quia, harum nam unde consequatur sunt, labore iste.
                </Typography>
                <Typography mt={1}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro recusandae sapiente at, quaerat, voluptates quod
                  accusantium sint praesentium distinctio molestias nesciunt
                  nisi similique a illum corporis, non cupiditate neque est sunt
                  alias labore enim aperiam? Nam voluptate ab doloremque, neque
                  iusto non atque ratione voluptatibus! Nostrum veritatis
                  quibusdam reprehenderit ut possimus ad iure inventore dolorem
                  vel fuga, excepturi incidunt, dicta sequi atque ipsa. Rerum
                  natus, praesentium nostrum possimus ab voluptate.
                </Typography>
                <Typography mt={1}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Porro recusandae sapiente at, quaerat, voluptates quod
                  accusantium sint praesentium distinctio molestias nesciunt
                  nisi similique a illum corporis, non cupiditate neque est sunt
                  alias labore enim aperiam? Nam voluptate ab doloremque, neque
                  iusto non atque ratione voluptatibus! Nostrum veritatis
                  quibusdam reprehenderit ut possimus ad iure inventore dolorem
                  vel fuga, excepturi incidunt, dicta sequi atque ipsa. Rerum
                  natus, praesentium nostrum possimus ab voluptate.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" mt={5} mb={5}>
          <Grid item xs={10} md={10} lg={9}>
            <Grid container mt={3}>
              <Grid item xs={12} textAlign="center" mb={3}>
                <Typography
                  variant="h4"
                  className="heading_common_style"
                  color="#223f93"
                >
                  OUR TEAM
                </Typography>
              </Grid>
              <Grid
                item
                lg={12}
                sx={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                  overflow: "hidden",
                  display: "flex",
                  // backgroundColor:"#f9fafb",
                }}
              >
                <Box sx={{ display: "flex" }} className="main-team-member-box">
                  <Box className="team-member-box">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={guest1}
                        alt="sponser-company"
                        height={100}
                        width={100}
                        style={{
                          border: "1px solid #9e9e9e",
                          marginBottom: "5px",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                    <Typography
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#323232",
                      }}
                    >
                      Amisha Vora
                    </Typography>
                    <Typography style={{ fontSize: "14px" }}>
                      Owner and Joint MD - Prabhudas Lilladher
                    </Typography>
                  </Box>
                  <Box className="team-member-box">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={guest1}
                        alt="sponser-company"
                        height={100}
                        width={100}
                        style={{
                          border: "1px solid #9e9e9e",
                          marginBottom: "5px",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                    <Typography
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#323232",
                      }}
                    >
                      Amisha Vora
                    </Typography>
                    <Typography style={{ fontSize: "14px" }}>
                      Owner and Joint MD - Prabhudas Lilladher
                    </Typography>
                  </Box>
                  <Box className="team-member-box">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={guest1}
                        alt="sponser-company"
                        height={100}
                        width={100}
                        style={{
                          border: "1px solid #9e9e9e",
                          marginBottom: "5px",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                    <Typography
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#323232",
                      }}
                    >
                      Amisha Vora
                    </Typography>
                    <Typography style={{ fontSize: "14px" }}>
                      Owner and Joint MD - Prabhudas Lilladher
                    </Typography>
                  </Box>
                  <Box className="team-member-box">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={guest1}
                        alt="sponser-company"
                        height={100}
                        width={100}
                        style={{
                          border: "1px solid #9e9e9e",
                          marginBottom: "5px",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                    <Typography
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#323232",
                      }}
                    >
                      Amisha Vora
                    </Typography>
                    <Typography style={{ fontSize: "14px" }}>
                      Owner and Joint MD - Prabhudas Lilladher
                    </Typography>
                  </Box>
                  <Box className="team-member-box">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={guest1}
                        alt="sponser-company"
                        height={100}
                        width={100}
                        style={{
                          border: "1px solid #9e9e9e",
                          marginBottom: "5px",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                    <Typography
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#323232",
                      }}
                    >
                      Amisha Vora
                    </Typography>
                    <Typography style={{ fontSize: "14px" }}>
                      Owner and Joint MD - Prabhudas Lilladher
                    </Typography>
                  </Box>
                  <Box className="team-member-box">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={guest1}
                        alt="sponser-company"
                        height={100}
                        width={100}
                        style={{
                          border: "1px solid #9e9e9e",
                          marginBottom: "5px",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                    <Typography
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#323232",
                      }}
                    >
                      Amisha Vora
                    </Typography>
                    <Typography style={{ fontSize: "14px" }}>
                      Owner and Joint MD - Prabhudas Lilladher
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{ display: "flex", position: "absolute", top: "0" }}
                  className="main-team-member-box2"
                >
                  <Box className="team-member-box">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={guest1}
                        alt="sponser-company"
                        height={100}
                        width={100}
                        style={{
                          border: "1px solid #9e9e9e",
                          marginBottom: "5px",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                    <Typography
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#323232",
                      }}
                    >
                      Amisha Vora
                    </Typography>
                    <Typography style={{ fontSize: "14px" }}>
                      Owner and Joint MD - Prabhudas Lilladher
                    </Typography>
                  </Box>
                  <Box className="team-member-box">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={guest1}
                        alt="sponser-company"
                        height={100}
                        width={100}
                        style={{
                          border: "1px solid #9e9e9e",
                          marginBottom: "5px",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                    <Typography
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#323232",
                      }}
                    >
                      Amisha Vora
                    </Typography>
                    <Typography style={{ fontSize: "14px" }}>
                      Owner and Joint MD - Prabhudas Lilladher
                    </Typography>
                  </Box>
                  <Box className="team-member-box">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={guest1}
                        alt="sponser-company"
                        height={100}
                        width={100}
                        style={{
                          border: "1px solid #9e9e9e",
                          marginBottom: "5px",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                    <Typography
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#323232",
                      }}
                    >
                      Amisha Vora
                    </Typography>
                    <Typography style={{ fontSize: "14px" }}>
                      Owner and Joint MD - Prabhudas Lilladher
                    </Typography>
                  </Box>
                  <Box className="team-member-box">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={guest1}
                        alt="sponser-company"
                        height={100}
                        width={100}
                        style={{
                          border: "1px solid #9e9e9e",
                          marginBottom: "5px",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                    <Typography
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#323232",
                      }}
                    >
                      Amisha Vora
                    </Typography>
                    <Typography style={{ fontSize: "14px" }}>
                      Owner and Joint MD - Prabhudas Lilladher
                    </Typography>
                  </Box>
                  <Box className="team-member-box">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={guest1}
                        alt="sponser-company"
                        height={100}
                        width={100}
                        style={{
                          border: "1px solid #9e9e9e",
                          marginBottom: "5px",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                    <Typography
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#323232",
                      }}
                    >
                      Amisha Vora
                    </Typography>
                    <Typography style={{ fontSize: "14px" }}>
                      Owner and Joint MD - Prabhudas Lilladher
                    </Typography>
                  </Box>
                  <Box className="team-member-box">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={guest1}
                        alt="sponser-company"
                        height={100}
                        width={100}
                        style={{
                          border: "1px solid #9e9e9e",
                          marginBottom: "5px",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                    <Typography
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#323232",
                      }}
                    >
                      Amisha Vora
                    </Typography>
                    <Typography style={{ fontSize: "14px" }}>
                      Owner and Joint MD - Prabhudas Lilladher
                    </Typography>
                  </Box>
                </Box>
                {/* <Swiper
                  slidesPerView={5}
                  spaceBetween={30}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  speed={2000}
                  modules={[Autoplay]}
                  className="mySecondSwiper"
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    390: {
                      slidesPerView: 2,
                    },
                    502: {
                      slidesPerView: 3,
                    },
                    802: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  <SwiperSlide>
                    <Box border="1px solid #9e9e9e" p={1} textAlign="center">
                      <Box>
                        <img
                          src={guest1}
                          alt="sponser-company"
                          height={100}
                          width={100}
                          style={{
                            border: "1px solid #9e9e9e",marginBottom:"5px",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                      <Typography
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#323232",
                        }}
                      >
                        Amisha Vora
                      </Typography>
                      <Typography style={{ fontSize: "14px" }}>
                        Owner and Joint MD - Prabhudas Lilladher
                      </Typography>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid #9e9e9e" p={1} textAlign="center">
                      <Box>
                        <img
                          src={guest2}
                          alt="sponser-company"
                          height={100}
                          width={100}
                          style={{
                            border: "1px solid #9e9e9e",marginBottom:"5px",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                      <Typography
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#323232",
                        }}
                      >
                        Amisha Vora
                      </Typography>
                      <Typography style={{ fontSize: "14px" }}>
                        Owner and Joint MD - Prabhudas Lilladher
                      </Typography>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid #9e9e9e" p={1} textAlign="center">
                      <Box>
                        <img
                          src={guest3}
                          alt="sponser-company"
                          height={100}
                          width={100}
                          style={{
                            border: "1px solid #9e9e9e",marginBottom:"5px",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                      <Typography
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#323232",
                        }}
                      >
                        Amisha Vora
                      </Typography>
                      <Typography style={{ fontSize: "14px" }}>
                        Owner and Joint MD - Prabhudas Lilladher
                      </Typography>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid #9e9e9e" p={1} textAlign="center">
                      <Box>
                        <img
                          src={guest4}
                          alt="sponser-company"
                          height={100}
                          width={100}
                          style={{
                            border: "1px solid #9e9e9e",marginBottom:"5px",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                      <Typography
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#323232",
                        }}
                      >
                        Amisha Vora
                      </Typography>
                      <Typography style={{ fontSize: "14px" }}>
                        Owner and Joint MD - Prabhudas Lilladher
                      </Typography>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid #9e9e9e" p={1} textAlign="center">
                      <Box>
                        <img
                          src={guest1}
                          alt="sponser-company"
                          height={100}
                          width={100}
                          style={{
                            border: "1px solid #9e9e9e",marginBottom:"5px",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                      <Typography
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#323232",
                        }}
                      >
                        Amisha Vora
                      </Typography>
                      <Typography style={{ fontSize: "14px" }}>
                        Owner and Joint MD - Prabhudas Lilladher
                      </Typography>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid #9e9e9e" p={1} textAlign="center">
                      <Box>
                        <img
                          src={guest2}
                          alt="sponser-company"
                          height={100}
                          width={100}
                          style={{
                            border: "1px solid #9e9e9e",marginBottom:"5px",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                      <Typography
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#323232",
                        }}
                      >
                        Amisha Vora
                      </Typography>
                      <Typography style={{ fontSize: "14px" }}>
                        Owner and Joint MD - Prabhudas Lilladher
                      </Typography>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid #9e9e9e" p={1} textAlign="center">
                      <Box>
                        <img
                          src={guest3}
                          alt="sponser-company"
                          height={100}
                          width={100}
                          style={{
                            border: "1px solid #9e9e9e",marginBottom:"5px",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                      <Typography
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#323232",
                        }}
                      >
                        Amisha Vora
                      </Typography>
                      <Typography style={{ fontSize: "14px" }}>
                        Owner and Joint MD - Prabhudas Lilladher
                      </Typography>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid #9e9e9e" p={1} textAlign="center">
                      <Box>
                        <img
                          src={guest4}
                          alt="sponser-company"
                          height={100}
                          width={100}
                          style={{
                            border: "1px solid #9e9e9e",marginBottom:"5px",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                      <Typography
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#323232",
                        }}
                      >
                        Amisha Vora
                      </Typography>
                      <Typography style={{ fontSize: "14px" }}>
                        Owner and Joint MD - Prabhudas Lilladher
                      </Typography>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid #9e9e9e" p={1} textAlign="center">
                      <Box>
                        <img
                          src={guest1}
                          alt="sponser-company"
                          height={100}
                          width={100}
                          style={{
                            border: "1px solid #9e9e9e",marginBottom:"5px",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                      <Typography
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#323232",
                        }}
                      >
                        Amisha Vora
                      </Typography>
                      <Typography style={{ fontSize: "14px" }}>
                        Owner and Joint MD - Prabhudas Lilladher
                      </Typography>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box border="1px solid #9e9e9e" p={1} textAlign="center">
                      <Box>
                        <img
                          src={guest2}
                          alt="sponser-company"
                          height={100}
                          width={100}
                          style={{
                            border: "1px solid #9e9e9e",marginBottom:"5px",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                      <Typography
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#323232",
                        }}
                      >
                        Amisha Vora
                      </Typography>
                      <Typography style={{ fontSize: "14px" }}>
                        Owner and Joint MD - Prabhudas Lilladher
                      </Typography>
                    </Box>
                  </SwiperSlide>
                </Swiper> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Footer />

        {/*  */}
      </Grid>
    </>
  );
};

export default Home;
