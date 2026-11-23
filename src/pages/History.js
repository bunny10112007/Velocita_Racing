import React from "react";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../components/theme";
import "./style/partnerwithus/partnerwithus.scss";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { InfoBox } from "../components/infoBox/InfoBox";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Ends from "../components/Svgs/HomeEnds";
import EndsTop from "../components/Svgs/EndsTop";
import Fb from "../assets/Home/fb.jpg";
import { StyledHeading } from "../components/styledHeading/StyledHeading";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";
import Crowd from "../assets/Home/crowd.webp";
import Connect from "../assets/Home/connect.webp";
import Social from "../assets/Home/social.webp";
import Success from "../assets/Home/success.webp";
import Button from "@mui/material/Button";
import Corporate from "../assets/Home/corporate.png";
import Brand from "../assets/Home/brand.png";
import Idea from "../assets/Home/idea.png";
import Team from "../assets/Home/team.png";
import Partner from "../assets/Home/partner-light-1.png";
import { HashLink } from "react-router-hash-link";
import Waystosponsor from "./WaysToSponsor";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import ArrowMultiple from "../assets/Home/arrow-multiple-new.png";
import EndsTopArrow from "../components/Svgs/EndsTopArrow";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowLargeSvg from "../components/Svgs/ArrowLarge";
import vrf6 from '../assets/History/vrf6.JPG'
import vrf5 from '../assets/History/vrf5.jpg'
import vrf4 from '../assets/History/vrf4.png'
import vrf3 from '../assets/History/vrf3.jpg'
import vrf2 from '../assets/History/vrf2.jpg'
import vrf1 from '../assets/History/vrf1.jpg'
import vrf from '../assets/Logo/panther.png'


const History = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our History | Velocita Racing</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <div className="partner-with-us-container">
          <section id="section-one-sponsors">
            <StyledCharacter title="xx00340" />
            <div className="main-container">
              <div className="left">
                <Typography variant="h2" className="section-title">
                  <span className="change-color">Our</span> History
                </Typography>
                {/* <div className="underline"></div> */}
                <Typography variant="h5" className="section-subtitle">
                  <img className="arrow" src={ArrowMultiple} alt="" />
                  Recent cars and results.
                </Typography>
                {/* <div className="underline"></div> */}
                {/* <Typography className='get-started' variant='subtitle1'>Get Started <OpenInNewRoundedIcon  className='arrow'/> </Typography> */}
                <HashLink
                  className="page-link"
                  smooth
                  to={"#section-four"}
                >
                  <InfoBox
                    // click="no-click"
                    title="View Results"
                    info="Our recent Indian standings."
                  />
                </HashLink>
              </div>
              <div className="right">
                <img src={vrf} alt="" className="turbo" />
              </div>
            </div>
          </section>
          
          
        <section id="section-four">
          <div className="main-container">
            <StyledCharacter title={"XX - results - XX"} />
            <div className="left">
              <div className="block"></div>
              <StyledHeading title={"explore -"} />
              <Typography variant="h2" className="section-title">
                Our <br />
                Results
              </Typography>
              <InfoBox
                click="no-click"
                title="Formula Bharat"
                info="We take part in one of the most indigenious formula student competition held in India annualy, Formula Bharat."
              />
            </div>
            <div className="right">
              <div className="neo-block">
                <ArrowLargeSvg />
              </div>
              <Link to={"/history/"} className="apply-block">
                <div className="block"></div>
                <div className="block-info">
                  <Typography variant="h6" className="title">
                    Overall 02th
                  </Typography>
                  <Typography variant="subtitle2">
                    FB2025
                  </Typography>
                </div>

              </Link>
              <Link to={"/history/"} className="apply-block">
                <div className="block"></div>
                <div className="block-info">
                  <Typography variant="h6" className="title">
                    Overall 10th
                  </Typography>
                  <Typography variant="subtitle2">
                    FB2024
                  </Typography>
                </div>

              </Link>
              <Link to={"/history/"} className="apply-block">
                <div className="block"></div>
                <div className="block-info">
                  <Typography variant="h6" className="title">
                    Overall 11th
                  </Typography>
                  <Typography variant="subtitle2">
                    FB2023
                  </Typography>
                </div>

              </Link>
              
            </div>
          </div>
          <EndsTopArrow className="end-bottom" />
        </section>

          
          <section id="section-two-sponsor" className="section-right">
            <Ends />
            <div className="main-container">
              <StyledCharacter title="2025" />
              <div className="left">
                <img className="crowd content-image" src={vrf6} alt="" />
                {/* <Card className='card'>
              <CardMedia
                  className="fb-image"
                  component="img"
                  height="170"
                  image={Fb}
                  alt=""
                />
              </Card> */}
              </div>
              <div className="right">
                <Typography variant="h2" className="section-title">
                  <span className="change-color">VRF</span>6
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                          Competed in Formula Bharat 2025.
                        </Typography>
                        <Typography variant="h6" className="section-subtitle">
                          P1 in Acceleration, Skidpad, and Autocross
                        </Typography>
                        <Typography variant="h6" className="section-subtitle">
                          P2 in Engineering Design
                        </Typography>
                        <Typography variant="h6" className="section-subtitle">
                          Finished 2nd overall
                        </Typography>
              </div>
            </div>
          </section>

          

          <section id="section-three-sponsor" className="section-left">
            {/* <img className='marker' src={Marker} alt="" /> */}
            <div className="main-container">
              <StyledCharacter title="2024" />
              <div className="left">
                <Typography variant="h2" className="section-title">
                  <span className="change-color">VRF</span>5
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                    Competed in Formula Bharat 2024.
                </Typography>
                <Typography variant="h5" className="section-subtitle">
                  Finished 10th overall
                </Typography>
              </div>
              <div className="right">
                <img className="connect content-image" src={vrf5} alt="" />
              </div>
            </div>
          </section>

          <section id="section-four-sponsor" className="section-right">
            <div className="main-container">
              <StyledCharacter title="2023" />
              <div className="left">
                <img className="social content-image" src={vrf4} alt="" />
              </div>
              <div className="right">
                <Typography variant="h2" className="section-title">
                  <span className="change-color">VRF</span>4
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  Competed in Formula Bharat 2023.
                </Typography>
                <Typography variant="h5" className="section-subtitle">
                  Finished 11th overall
                </Typography>
              </div>
            </div>
          </section>
          
          <section id="section-three-sponsor" className="section-left">
            {/* <img className='marker' src={Marker} alt="" /> */}
            <div className="main-container">
              <StyledCharacter title="2022" />
              <div className="left">
                <Typography variant="h2" className="section-title">
                  <span className="change-color">VRF</span>3
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  Competed in Formula Bharat 2022.
                </Typography>
              </div>
              <div className="right">
                <img className="connect content-image" src={vrf3} alt="" />
              </div>
            </div>
          </section>

          <section id="section-four-sponsor" className="section-right">
            <div className="main-container">
              <StyledCharacter title="2021" />
              <div className="left">
                <img className="social content-image" src={vrf2} alt="" />
              </div>
              <div className="right">
                <Typography variant="h2" className="section-title">
                  <span className="change-color">VRF</span>2
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  Competed in Formula Bharat 2021.
                </Typography>
              </div>
            </div>
          </section>
          <section id="section-five-sponsor" className="section-left">
            <div className="main-container">
              <StyledCharacter title="2020" />
              <div className="left">
                <Typography variant="h2" className="section-title">
                  <span className="change-color">VRF</span>1
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  Competed in Formula Bharat 2020.
                </Typography>
              </div>
              <div className="right">
                <img className="connect content-image" src={vrf1} alt="" />
              </div>
            </div>
          </section>
          
          



          
          <section className="section-six-ways">
          {/* <EndsTop /> */}
          <div id="contact-sponsorship-team" className="main-container">
            <div className="left">
              <Typography variant="h2" className="section-title">
                Become a
                <br />{" "}
                <span className="change-color">
                  Sponsor
                  <br />
                </span>
              </Typography>
              <div className="underline"></div>
              <Typography variant="h5" className="section-subtitle">
                Together, we can shape the world. Let’s jointly move forward by
                leading innovation, helping to achieve key technical milestones,
                opening pathways to real commercial applications and future
                growth opportunities.
              </Typography>
              <Link className="page-link" to={"/sponsors/"}>
                <InfoBox
                  title="View sponsors"
                  info="Current partners"
                />
              </Link>

              {/* <Button className='button' variant='outlined'>Learn more</Button> */}
            </div>
            <div className="right">
              <div className="link-block">
                <HashLink
                  smooth
                  className="in-page-link"
                  to={"/partner-with-us/contact-team/"}
                >
                  <div className="block"></div>
                  <div className="block-info">
                    <Typography variant="h6" className="title">
                      Contact Team
                    </Typography>
                    <Typography variant="subtitle2">
                      Get in touch with our sponsorship team and learn more
                    </Typography>
                  </div>

                  <ArrowForwardIosRoundedIcon className="arrow" />
                </HashLink>
              </div>
              {/* <div className="link-block">
                <HashLink
                  smooth
                  className="in-page-link"
                  to={"/partner-with-us/contact-team/"}
                >
                  <div className="block"></div>
                  <div className="block-info">
                    <Typography variant="h6" className="title">
                      Request Brochure
                    </Typography>
                    <Typography variant="subtitle2">
                      Get a copy of our sponsorship brochure for season 2021{" "}
                    </Typography>
                  </div>
                  <ArrowForwardIosRoundedIcon className="arrow" />
                </HashLink>
              </div> */}

              {/* <div className="link-block">
                <HashLink
                  smooth
                  className="in-page-link"
                  to={"/partner-with-us/contact-team/"}
                >
                  <div className="block"></div>
                  <div className="block-info">
                    <Typography variant="h6" className="title">
                      Core Technical
                    </Typography>
                  </div>
                  <ArrowForwardIosRoundedIcon className="arrow" />
                </HashLink>
              </div> */}
            </div>
          </div>
          {/* <Ends /> */}
        </section>

        
        </div>
      </ThemeProvider>
    </div>
  );
};

export default History;
