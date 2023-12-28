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
import dotImage from "../files/images/dots.png";
import joinUsImg from "../files/images/whyUs.png";

import womenPoster from "../files/images/poster.png";
import womenbanner from "../files/images/speechImg3.jpg";

import vectorbg from "../files/images/Vector (1).png";
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
          height="calc(100% - 90px)"
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
              transition: "transform 0.3s ease",
              "::before": {
                content: "' '",
                position: "absolute",
                zIndex: "1",
                top: 0,
                left: 0,
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
            px="25px"
            pt="25px"
          >
            <Grid item xs={10} md={10} lg={9}>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Box className="hero-text-bg">
                    <Typography
                      variant="h2"
                      color="#fff"
                      sx={{
                        lineHeight: "3.5rem",
                        fontWeight: "500",
                        marginBottom: "10px",
                        // backgroundColor: "#223f93",
                        padding: "10px",
                        display: "inline-block",
                        textAlign: "center",
                        // boxShadow: "-4px 4px 0px 0px #e17e80bf",
                      }}
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
                        marginBottom: "10px",
                        // backgroundColor: "#223f93",
                        // background:"linear-gradient(to right bottom,#0c62e1,#0998d4,#33bba1)",
                        padding: "10px",
                        display: "inline-block",
                        textAlign: "center",
                        // boxShadow: "-4px 4px 0px 0px #e17e80bf",
                      }}
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
                        marginBottom: "10px",
                        // backgroundColor: "#223f93",
                        // background:"linear-gradient(to right bottom,#0c62e1,#0998d4,#33bba1)",
                        display: "inline-block",
                        padding: "10px",
                        textAlign: "center",
                        // boxShadow: "-4px 4px 0px 0px #e17e80bf",
                      }}
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
                        marginBottom: "10px",
                        // backgroundColor: "#223f93",
                        // background:"linear-gradient(to right bottom,#0c62e1,#0998d4,#33bba1)",
                        padding: "10px",
                        textAlign: "center",
                        display: "inline-block",
                        // boxShadow: "-4px 4px 0px 0px #e17e80bf",
                      }}
                      className="heading_common_style"
                    >
                      CELEBRATE WOMEN BOARD LEADERS
                    </Typography>

                    <Button
                      sx={{
                        backgroundColor: "#fff",
                        border: "1px solid #ed3337",
                        borderRadius: "5px",
                        display: "block",
                        color: "#ed3337",
                        fontSize: "16px",
                        ":hover": { backgroundColor: "#ed3337", color: "#fff" },
                      }}
                    >
                      Book Your Seat
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    {/* <Box sx={{position:"absolute",top:"-40px",left:"40px"}}>
                      <img src={dotImage} alt="dots" height={150}/>
                    </Box> */}
                    <Box>
                      <img src={heroImage} alt="hero" height={400} />
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
          {/* <Grid
            item
            xs={10}
            sm={5}
            md={4}
            lg={3}
            sx={{
              transition: "transform 0.4s ease",
              ":hover": {
                transform: "translateY(-10px)",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              },
            }}
          ></Grid>

          <Grid
            item
            xs={10}
            sm={5}
            md={4}
            lg={3}
            ml={{ lg: 2, md: 2, sm: 1, xs: 0 }}
            mt={{ xs: 2, sm: 0, md: 0 }}
            sx={{
              transition: "transform 0.4s ease",
              ":hover": {
                transform: "translateY(-10px)",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              },
            }}
          ></Grid> */}

          {/* <Box className="bg-banner-img"></Box> */}
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
          <Grid item xs={10} md={10} lg={9} textAlign="start">
            <Typography
              variant="h4"
              mb={2}
              className="heading_common_style"
              color="#223f93"
              sx={{
                position: "relative",
                "::after": {
                  content: "''",
                  position: "absolute",
                  height: "1px",
                  width: "180px",
                  backgroundColor: "blue",
                  bottom: "-5px",
                  left: 0,
                },
              }}
            >
              CHIEF GUEST
            </Typography>
          </Grid>
          <Grid item xs={10} md={10} lg={9} textAlign="start" mt={3}>
            <Grid container columnSpacing={2} rowSpacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  <img
                    src={guest2}
                    alt="chief-guest"
                    height={250}
                    width="100%"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Smt. Nirmala Sitharaman
                </Typography>
                <Typography>
                  Hon'ble Union Minister of Finance & Corporate Affairs,
                  Government of India
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tenetur culpa incidunt sunt molestias dicta quas quisquam eos
                  excepturi obcaecati ut! Culpa quod impedit voluptate
                  reprehenderit voluptatibus! Optio similique quo eligendi qui
                  odit, aut ullam nihil! Temporibus in culpa ad ab.
                </Typography>
                <Typography></Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} md={10} lg={9} textAlign="center">
            <Typography
              variant="h4"
              mt={2}
              className="heading_common_style"
              color="#223f93"
            >
              KEY NOTE SPEAKERS
            </Typography>
          </Grid>
          <Grid item xs={10} md={10} lg={9} textAlign="start" mt={4}>
            <Grid
              container
              justifyContent="center"
              columnSpacing={2}
              rowSpacing={2}
            >
              <Grid item xs={12} sm={6} md={5}>
                <Grid container>
                  <Grid item md={12}>
                    <Box>
                      <img src={guest2} alt="chief-guest" height={250} />
                    </Box>
                  </Grid>
                  <Grid item md={12}>
                    <Typography>Smt. Nirmala Sitharaman</Typography>
                    <Typography>
                      Hon'ble Union Minister of Finance & Corporate Affairs,
                      Government of India
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <Grid container>
                  <Grid item md={12}>
                    <Box>
                      <img src={guest2} alt="chief-guest" height={250} />
                    </Box>
                  </Grid>
                  <Grid item md={12}>
                    <Typography>Smt. Nirmala Sitharaman</Typography>
                    <Typography>
                      Hon'ble Union Minister of Finance & Corporate Affairs,
                      Government of India
                    </Typography>
                  </Grid>
                </Grid>
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
            >
              <Grid item md={4} textAlign="center" sx={{ overflow: "hidden" }}>
                <Typography
                  variant="h4"
                  mb={2}
                  className="heading_common_style"
                  color="#223f93"
                >
                  CHIEF GUEST
                </Typography>
                <Box className="guest-img-container">
                  <Box height="100%" width="100%">
                    <img
                      src={guest2}
                      alt="chief-guest"
                      height={350}
                      width="100%"
                      style={{
                        border: "4px solid white",
                        // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box className="guest-img-hover-hide">
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
                  <Box className="guest-img-hover-content">
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
                md={8}
                lg={6}
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
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 1, lg: 2 }}>
                  <Grid item xs={6}>
                    <Box className="guest-img-container">
                      <Box height="100%" width="100%">
                        <img
                          src={guest2}
                          alt="chief-guest"
                          height={350}
                          width="100%"
                          style={{
                            border: "4px solid white",
                            // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Box className="guest-img-hover-hide">
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
                      <Box className="guest-img-hover-content">
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
                  <Grid item xs={6}>
                    <Box className="guest-img-container">
                      <Box height="100%" width="100%">
                        <img
                          src={guest2}
                          alt="chief-guest"
                          height={350}
                          width="100%"
                          style={{
                            border: "4px solid white",
                            // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Box className="guest-img-hover-hide">
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
                      <Box className="guest-img-hover-content">
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
            <Grid container columnSpacing={2} rowSpacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Box className="guest-content-wrap">
                  <Box className="guest-img-wrap">
                    <img src={guest1} alt="guest" height="100%" width="100%" />
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
                  <Typography fontWeight={600} mt={1} pl={1}>
                    Smt. Nirmala Sitharaman
                  </Typography>
                  <Typography pl={1}>
                    Hon'ble Union Minister of Finance & Corporate Affairs,
                    Government of India
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box className="guest-content-wrap">
                  <Box className="guest-img-wrap">
                    <img src={guest1} alt="guest" height="100%" width="100%" />
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
                  <Typography variant="h6" fontWeight={600} mt={1} pl={1}>
                    Smt. Nirmala Sitharaman
                  </Typography>
                  <Typography pl={1}>
                    Hon'ble Union Minister of Finance & Corporate Affairs,
                    Government of India
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box className="guest-content-wrap">
                  <Box className="guest-img-wrap">
                    <img src={guest1} alt="guest" height="100%" width="100%" />
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
                  <Typography variant="h6" fontWeight={600} mt={1} pl={1}>
                    Smt. Nirmala Sitharaman
                  </Typography>
                  <Typography pl={1}>
                    Hon'ble Union Minister of Finance & Corporate Affairs,
                    Government of India
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box className="guest-content-wrap">
                  <Box className="guest-img-wrap">
                    <img src={guest1} alt="guest" height="100%" width="100%" />
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
                  <Typography variant="h6" fontWeight={600} mt={1} pl={1}>
                    Smt. Nirmala Sitharaman
                  </Typography>
                  <Typography pl={1}>
                    Hon'ble Union Minister of Finance & Corporate Affairs,
                    Government of India
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box className="guest-content-wrap">
                  <Box className="guest-img-wrap">
                    <img src={guest1} alt="guest" height="100%" width="100%" />
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
                  <Typography variant="h6" fontWeight={600} mt={1} pl={1}>
                    Smt. Nirmala Sitharaman
                  </Typography>
                  <Typography pl={1}>
                    Hon'ble Union Minister of Finance & Corporate Affairs,
                    Government of India
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box className="guest-content-wrap">
                  <Box className="guest-img-wrap">
                    <img src={guest1} alt="guest" height="100%" width="100%" />
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
                  <Typography variant="h6" fontWeight={600} mt={1} pl={1}>
                    Smt. Nirmala Sitharaman
                  </Typography>
                  <Typography pl={1}>
                    Hon'ble Union Minister of Finance & Corporate Affairs,
                    Government of India
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" mt={5} mb={5}>
          <Grid item xs={12}>
            <Box
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
            </Box>
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
                  JOIN US
                </Typography>
              </Grid>
              <Grid item md={6} lg={6}>
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
              <Grid item md={6} lg={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <img src={joinUsImg} alt="img-banner" height={400} />
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
            <Grid container mt={3}>
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
              <Grid item md={6} lg={6}>
                <img src="i" alt="img-banner" />
              </Grid>
              <Grid item md={6} lg={6}>
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
              <Grid item lg={12} mt={5} mb={3}>
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
