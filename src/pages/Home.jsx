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
  const Item = styled(Paper)({
    padding: "8px",
    textAlign: "center",
    color: "#000",
    width: "100%",
    height: "100%",
  });

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
          spacing={2}
          height="450px"
          py={3}
          position="relative"
          sx={{ backgroundColor: "transparent" }}
        >
          <Grid item xs={8} md={3} sx={{transition:"transform 0.4s ease",":hover":{transform:"translateY(-10px)"}}}>
            <Item sx={{ backgroundColor: "#fff",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
              <Typography
                variant="h4"
                fontWeight={600}
                className="heading_common_style"
                mt={2}
              >
                Title
              </Typography>
              <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, voluptatibus.</Typography>
              <Typography variant="h4" fontWeight={500} mt={2} className="heading_common_style">
                799/- <span style={{fontSize:"14px"}}>+ GST</span>
              </Typography>

              <Box mt={2}>
                <ModalBtn btnName="Book Now">
                  <Typography variant="h5">register</Typography>
                  <Register />
                </ModalBtn>
              </Box>
            </Item>
          </Grid>

          <Grid item xs={8} md={3} sx={{transition:"transform 0.4s ease",":hover":{transform:"translateY(-10px)"}}}>
          <Item sx={{ backgroundColor: "#ffffff73",backdropFilter:"blur(8px)",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
              <Typography
                variant="h5"
                fontWeight={600}
                className="heading_common_style"
                mt={2}
               
              >
                Title
              </Typography>
              <Typography >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, voluptatibus.</Typography>
              <Typography variant="h5" fontWeight={600} mt={2}   className="heading_common_style">
              1999/-<span style={{fontSize:"14px"}}> + GST</span>
              </Typography>

              <Box mt={2}>
                <ModalBtn btnName="Book Now">
                  <Typography variant="h5">register</Typography>
                  <Register />
                </ModalBtn>
              </Box>
            </Item>
          </Grid>

          <Box className="bg-banner-img"></Box>
        </Grid>

        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere
          necessitatibus non quisquam consequatur porro temporibus.
          Necessitatibus voluptas mollitia culpa. Ab qui quis explicabo vero
          possimus tempore voluptatem pariatur doloribus necessitatibus, facilis
          nesciunt repudiandae numquam harum earum repellendus fuga quod,
          aspernatur sunt perferendis in? Ipsam, a. Minima pariatur accusamus
          officiis mollitia ipsum odio rem itaque fugiat doloremque incidunt,
          quod consequuntur dolore nulla facere earum impedit ratione neque
          laudantium beatae. Omnis tempora dignissimos sequi dolores saepe
          facilis iste quasi consequuntur culpa facere vitae autem explicabo
          consectetur excepturi, modi nostrum voluptatum quidem ex voluptas
          laudantium impedit atque officia ad. Repellat quam officia dolore,
          velit exercitationem eaque neque numquam autem tempora provident illum
          aliquam placeat quisquam quia mollitia esse quaerat repudiandae sint
          quod iusto et voluptatem! Earum qui dignissimos excepturi
          necessitatibus iste? Ipsa, saepe. Quibusdam, optio, aliquid at tempore
          omnis, modi nihil doloremque quo sapiente sunt a. Deleniti facere
          similique suscipit sint excepturi officiis sed quibusdam consequatur
          maiores, commodi nihil fugit natus doloribus, cupiditate aut
          perspiciatis dolorem quis. Alias sunt repellendus rem beatae
          dignissimos facilis magni odio optio explicabo id cumque vero labore
          fugiat voluptates ab, vitae hic omnis deserunt corporis quae ad. Quae
          quasi in accusamus qui repellendus quaerat suscipit obcaecati placeat,
          ex, maxime enim ipsum error nobis deserunt, labore earum facilis
          debitis odit reprehenderit eius. Libero expedita assumenda architecto
          dolorum voluptate ea eos? Nobis ipsum adipisci, sit dolor totam vero
          atque modi harum eveniet quos aperiam, nemo repellendus nulla ipsam
          assumenda quam nam! Dicta odio nam dolore nisi inventore odit delectus
          quam reprehenderit sapiente libero nostrum, quia veritatis.
          Accusantium aspernatur vitae voluptatibus dolore harum. Iusto hic
          suscipit dolore. Delectus nesciunt sequi eveniet nemo eos nisi quos
          repudiandae. Aut repellendus iusto dolore odio quae a recusandae, amet
          eius culpa accusamus, ipsa voluptatum. Ipsa, tempore. Minima molestias
          dolor quas sint eum voluptas totam similique consequatur qui! Dolorem
          expedita, quidem deleniti accusantium corporis nesciunt. Illum
          voluptatibus quos, nemo exercitationem sint asperiores nihil? Nemo et
          possimus unde quisquam ducimus corporis maxime perferendis adipisci
          iste voluptate! Enim tempore, et nisi placeat, esse molestiae cum vel
          minima, natus sit consequuntur delectus asperiores eligendi nemo amet.
          Maxime, animi quibusdam. At earum ullam quaerat, expedita quos
          praesentium animi tempora cumque illum aliquid. Soluta nihil quo animi
          harum. Doloribus quia ipsam dicta alias rerum, nulla saepe in
          cupiditate! Quia ducimus quis eum in magni a sed, odit tempora fugiat
          architecto mollitia quisquam accusamus consequatur laboriosam repellat
          reprehenderit animi maiores nobis eveniet velit! Ad cupiditate
          inventore nostrum natus! Possimus voluptas quasi non mollitia
          reprehenderit earum minima, nulla quaerat illum, esse dicta, iusto
          adipisci! Id natus nemo distinctio perferendis necessitatibus rerum,
          ab maxime amet eius tenetur non. Tenetur consequuntur aperiam ut
          placeat! Perspiciatis voluptatibus, quasi tempora aperiam ut minus
          possimus numquam aliquid commodi nesciunt et rem ex placeat dolor!
          Praesentium, qui incidunt tempore laborum corrupti numquam provident
          beatae facere quas alias quo ea ipsa debitis in earum odit laboriosam
          porro inventore facilis perspiciatis vitae iusto. Placeat voluptates
          similique aperiam adipisci soluta aliquid ullam omnis a necessitatibus
          saepe laborum, corrupti hic quo veniam tempora, quas dolor architecto,
          officiis quidem pariatur. Nesciunt nemo quibusdam, reiciendis
          obcaecati illum alias laborum suscipit ex quidem asperiores ratione
          quos id, earum praesentium odio, fugit quis incidunt. Voluptatum,
          atque corporis! Sequi in veniam aperiam nemo quas laborum. Doloremque,
          quasi quam sequi fugit voluptates dolores beatae nam deserunt sit
          perferendis ex, commodi itaque adipisci totam est similique possimus
          dolor ducimus accusamus minima deleniti debitis illum. Iusto sequi
          eveniet ut numquam, repellendus, dignissimos est nemo molestiae dicta
          labore sunt error, impedit cupiditate! Et, ducimus voluptate aliquid
          harum, deleniti reprehenderit excepturi ex corrupti dolores mollitia
          soluta maiores cumque. Corporis illum fuga dolor id. Illo obcaecati
          asperiores debitis, similique totam nobis? Inventore eveniet velit
          amet alias voluptas ratione, dolores explicabo aliquid repudiandae
          fuga, sint recusandae asperiores ipsa aliquam architecto totam, harum
          facilis doloribus nobis eligendi sit laudantium vero. Saepe sunt
          eligendi officiis, perferendis architecto tenetur velit tempora totam
          aliquam necessitatibus, nulla praesentium illo repudiandae libero?
          Aspernatur consequuntur, architecto placeat ad, magnam sunt nobis esse
          ab sequi quas aperiam voluptatum quibusdam repellendus nostrum sed
          vitae tenetur! Sed temporibus voluptates numquam veritatis totam!
          Magni nobis excepturi cupiditate, dolor veniam ipsam quas debitis nam
          quaerat recusandae ea ut. Iusto, voluptatum accusamus? Veritatis
          possimus totam quaerat illum accusamus obcaecati architecto
          dignissimos id, rem quidem, ipsum officiis veniam! Molestiae
          reiciendis, modi necessitatibus sint vel totam at cupiditate illo
          placeat deserunt minima nobis explicabo minus odit aperiam magni,
          officia odio commodi illum vero. Recusandae provident omnis, nesciunt
          sunt error repudiandae inventore exercitationem. Ipsa deserunt fugiat
          dolores autem sequi quasi tempora, quae nihil accusamus provident
          minus et incidunt dignissimos doloribus facere sapiente totam illo vel
          unde mollitia aut. Corrupti totam, maxime magni omnis et doloribus
          eveniet nam cumque expedita provident nemo. Exercitationem ipsa
          praesentium eos est mollitia quod eius architecto deleniti possimus
          consequuntur aliquid molestiae cum laboriosam illo, nostrum doloremque
          reprehenderit? Ut illo quibusdam recusandae aut velit quo corporis
          ipsum consequatur id, voluptate expedita est quae quasi unde esse
          neque. Libero aliquid soluta tempore. Natus voluptatem explicabo
          libero itaque sunt sit doloribus eos recusandae atque quibusdam, quo
          consequuntur cupiditate quas totam temporibus excepturi eum officia
          esse modi enim necessitatibus distinctio ducimus. Illo doloribus
          possimus quod numquam odit? Voluptas, adipisci. Voluptatum praesentium
          suscipit, dolorem fuga tempore modi temporibus molestiae! Obcaecati
          dolore nihil quo vel, quasi, error eaque quos exercitationem minima
          nesciunt ullam animi, id cumque autem. Quae amet pariatur optio harum
          expedita ipsam voluptates eligendi ipsa mollitia quaerat? Modi atque,
          iure sunt nobis et sit mollitia minus corrupti provident dolores
          maxime tempora! Voluptatibus alias molestias qui, minima tenetur sint
          illum rerum voluptate molestiae quia repellat expedita voluptatum
          dolores vitae quas sapiente saepe praesentium? Laboriosam, dignissimos
          nisi aperiam necessitatibus at impedit molestiae praesentium
          perspiciatis unde sed et distinctio quo quod dolores voluptatibus sint
          mollitia velit ut. Voluptatibus nisi quod voluptates. Amet, odio
          temporibus! Nulla sequi est eos hic cumque. Dignissimos, quod? Cumque
          cum odio, exercitationem pariatur porro impedit obcaecati blanditiis
          deleniti dicta recusandae vitae asperiores consectetur sequi excepturi
          temporibus, expedita laboriosam ea sed quo natus sint beatae
          architecto accusamus! Commodi, ab nobis.
        </Box>
      </Grid>
    </>
  );
};

export default Home;
