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
import guest1 from "../files/images/guest1.jpg";

import { ReactComponent as GrowthIcon } from "../files/icon/growthIcon.svg";
import { ReactComponent as FacebookIcon } from "../files/icon/fbIcon.svg";
import { ReactComponent as InstaIcon } from "../files/icon/instaIcon.svg";
import { ReactComponent as LinkedinIcon } from "../files/icon/linkedinIcon.svg";
import { ReactComponent as TwitterIcon } from "../files/icon/twitterIcon.svg";

const Home = () => {
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

  // Item of Paper
  // const ItemWrap = styled(Paper)({
  //   padding: "8px",
  //   textAlign: "center",
  //   color: "#000",
  //   width: "100%",
  //   height: "100%",
  // });

  return (
    <>
      <Grid height="100vh" width="100vw" m="0 auto" overflow="auto">
        <Header />
        <Grid
          height="calc(100% - 90px)"
          overflow="auto"
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

              // backgroundAttachment:"fixed",
              // backgroundSize:"cover",
              // backgroundRepeat:"no-repeat",
              // backgroundPosition:"center",
              // transition: "transform 0.3s ease",
              "::before": {
                content: "' '",
                position: "absolute",
                zIndex: "1",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#1f5cff",
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
              }}
            />
          </Box>
          <Grid
            container
            justifyContent="center"
            height="100%"
            alignItems="flex-end"
            px="25px"
            pt="25px"
          >
            <Grid
              item
              xs={12}
              md={6}
              p={3}
              sx={{ backgroundColor: "#fff", textAlign: "center" }}
            >
              <Typography
                variant="h2"
                color="#ed3337"
                sx={{
                  lineHeight: "3.5rem",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
                className="heading_common_style"
              >
                WOMEN DIRECTORS
              </Typography>
              <Typography
                variant="h2"
                color="#ed3337"
                sx={{
                  lineHeight: "3.5rem",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
                className="heading_common_style"
              >
                CONCLAVE 2024
              </Typography>
              <Typography
                variant="h2"
                color="#223f93"
                sx={{
                  lineHeight: "3.5rem",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
                className="heading_common_style"
              >
                #WDC2024
              </Typography>
              <Typography
                variant="h5"
                color="#000"
                sx={{
                  lineHeight: "3rem",
                  fontWeight: "500",
                  marginBottom: "10px",
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
                  color: "#ed3337",
                  fontSize: "16px",
                  ":hover": { backgroundColor: "#ed3337", color: "#fff" },
                }}
              >
                Book Your Seat
              </Button>
            </Grid>
            {/* <Grid item xs={8} md={4.5}></Grid> */}
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
            md={9}
            p={3}
            sx={{
              boxShadow: "0 10px 180px #0000001a",
              backgroundColor: "#fff",
              borderRadius: "5px",
            }}
          >
            <Grid container spacing={5} alignItems="center">
              <Grid item md={4}>
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
              <Grid item md={2} sx={{ textAlign: "center" }}>
                {/* <Box sx={{ display: "flex", gap: "20px" }}> */}
                <Box
                  sx={{
                    fontSize: "3rem",
                    backgroundColor: "#223f93",
                    padding: "20px 0px",
                    color: "#fff",
                  }}
                >
                  {timeRemaining.days}
                </Box>
                <Typography>Days</Typography>
              </Grid>
              <Grid item md={2} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    fontSize: "3rem",
                    backgroundColor: "#4bc2ec",
                    padding: "20px 0px",
                    color: "#fff",
                  }}
                >
                  {timeRemaining.hours}
                </Box>
                <Typography>Hours</Typography>
              </Grid>
              <Grid item md={2} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    fontSize: "3rem",
                    backgroundColor: "#ed3337",
                    padding: "20px 0px",
                    color: "#fff",
                  }}
                >
                  {timeRemaining.minutes}
                </Box>
                <Typography>Minutes</Typography>
              </Grid>
              <Grid item md={2} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    fontSize: "3rem",
                    backgroundColor: "#f56016",
                    padding: "20px 0px",
                    color: "#fff",
                  }}
                >
                  {timeRemaining.seconds}
                </Box>
                <Typography>Secs</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          direction="column"
          alignItems="center"
          spacing={2}
          marginBottom={4}
        >
          <Grid item>
            <img src="wdwe" alt="woman-poster" />
          </Grid>
          <Grid item textAlign="center">
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
          height="450px"
          py={3}
          position="relative"
          sx={{ backgroundColor: "transparent" }}
        >
          <Grid
            item
            xs={8}
            md={3}
            sx={{
              transition: "transform 0.4s ease",
              ":hover": {
                transform: "translateY(-10px)",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              },
            }}
          >
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
                variant="h4"
                fontWeight={600}
                className="heading_common_style"
                mt={2}
              >
                Title
              </Typography>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas, voluptatibus.
              </Typography>
              <Typography
                variant="h4"
                fontWeight={500}
                mt={2}
                className="heading_common_style"
              >
                <span style={{ fontSize: "14px" }}>₹</span> 799/-{" "}
                <span style={{ fontSize: "14px" }}>+ GST</span>
              </Typography>

              <Box mt={2}>
                <ModalBtn btnName="Book Now">
                  <Typography variant="h5">register</Typography>
                  <Register />
                </ModalBtn>
              </Box>
              <hr style={{ marginTop: "20px" }} />
              <Typography variant="h6">Features:</Typography>
            </Paper>
          </Grid>

          <Grid
            item
            xs={8}
            md={3}
            ml={{ lg: 2, md: 2, xs: 0 }}
            mt={{ xs: 2, md: 0 }}
            sx={{
              transition: "transform 0.4s ease",
              ":hover": {
                transform: "translateY(-10px)",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              },
            }}
          >
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
                variant="h5"
                fontWeight={600}
                className="heading_common_style"
                mt={2}
              >
                Title
              </Typography>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas, voluptatibus.
              </Typography>
              <Typography
                variant="h5"
                fontWeight={600}
                mt={2}
                className="heading_common_style"
              >
                <span style={{ fontSize: "14px" }}>₹</span> 1999/-
                <span style={{ fontSize: "14px" }}> + GST</span>
              </Typography>

              <Box mt={2}>
                <ModalBtn btnName="Book Now">
                  <Typography variant="h5">register</Typography>
                  <Register />
                </ModalBtn>
              </Box>
            </Paper>
          </Grid>

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
          <Grid xs={10} md={10} lg={9} textAlign="center">
            <Typography
              variant="h4"
              mb={2}
              className="heading_common_style"
              color="#223f93"
            >
              Services
            </Typography>
          </Grid>
          <Grid item xs={10} md={10} lg={9}>
            <Grid container columnSpacing={2} rowSpacing={2}>
              <Grid item md={4}>
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
              <Grid item md={4}>
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
              <Grid item md={4}>
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
              <Grid item md={4}>
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
              <Grid item md={4}>
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
              <Grid item md={4}>
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
          <Grid xs={10} md={10} lg={9} textAlign="center">
            <Typography
              variant="h4"
              mb={2}
              className="heading_common_style"
              color="#223f93"
            >
              Chief Guest
            </Typography>
          </Grid>
          <Grid item xs={10} md={10} lg={9} textAlign="start" mt={4}>
            <Grid container columnSpacing={2} rowSpacing={2}>
              <Grid item md={4}>
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
              <Grid item md={4}>
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
              <Grid item md={4}>
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
              <Grid item md={4}>
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
              <Grid item md={4}>
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
              <Grid item md={4}>
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
          <Grid xs={10} md={10} lg={9} >
            <Grid container mt={3}>
              <Grid item lg={6}>
                <Typography
                  variant="h4"
                 
                  className="heading_common_style"
                  color="#223f93"
                >
                  Who Should Join?
                </Typography>
                <Typography variant="h4">Lorem ipsum dolor sit amet. dolor sit amet </Typography>
                <Typography variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero est consectetur nemo.</Typography>
              
              <Box>
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </Box>
              
              </Grid>
              <Grid item lg={6}>
                 <img src="bann" alt="img-banner" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/*  */}
      </Grid>
    </>
  );
};

export default Home;
