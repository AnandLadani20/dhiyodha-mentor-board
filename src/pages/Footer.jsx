import React from "react";
import DhiyodhaMainLogo from "../files/logo/Dhiyodha (1)n.png";
import { Box, Grid, IconButton, Typography } from "@mui/material";

import { ReactComponent as FacebookIcon } from "../files/icon/fbIcon.svg";
import { ReactComponent as InstaIcon } from "../files/icon/instaIcon.svg";
import { ReactComponent as LinkedinIcon } from "../files/icon/linkedinIcon.svg";
import { ReactComponent as TwitterIcon } from "../files/icon/twitterIcon.svg";
import { ReactComponent as WorldIcon } from "../files/icon/worldIcon.svg";
import { ReactComponent as PhoneIcon } from "../files/icon/phoneIcon.svg";
import { ReactComponent as GmailIcon } from "../files/icon/gmailIcon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Grid
        container
        py={3}
        justifyContent="center"
        style={{ backgroundColor: "#f8faff" }}
      >
        <Grid item xs={10} md={10} lg={9}>
          <Grid
            container
            columnSpacing={2}
            rowSpacing={2}
            justifyContent="space-between"
          >
            <Grid item xs={12} textAlign="center" mb={3}>
              <Typography
                variant="h4"
                className="heading_common_style"
                color="#223f93"
              >
                CONTACT DETAILS
              </Typography>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <Box>
                <img src={DhiyodhaMainLogo} alt="dhiyodha-logo" height={80} />
              </Box>
              <Typography textAlign="justify" mt={1}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                commodi autem modi nemo, a mollitia harum, magni accusamus
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Typography variant="h6" fontWeight={600} color="#223f93">
                Contact Us
              </Typography>
              <Box className='footer-links-box'>
                <ul>
                  <li>
                    <GmailIcon /> <Link>info@mentormyboard.com </Link>
                  </li>
                  <li>
                    <PhoneIcon /> <Link>+91 9727752207</Link>
                  </li>
                  <li>
                    <PhoneIcon /> <Link>+91 9428310538</Link>
                  </li>
                  <li>
                    <WorldIcon /> <Link>www.mentormyboard.com</Link>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Typography variant="h6" fontWeight={600} color="#223f93">
                Follow Us
              </Typography>
              <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                reiciendis?
              </Typography>
              <Box style={{display:"flex",gap:"10px"}} mt={2}>
                <Box className="social-media-border">
                  <FacebookIcon />
                </Box>
                <Box className="social-media-border">
                  <TwitterIcon />
                </Box>
                <Box className="social-media-border">
                  <InstaIcon />
                </Box>
                <Box className="social-media-border">
                  <LinkedinIcon />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
