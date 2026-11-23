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


const PartnerWithUs = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Partner With Us | Velocita Racing</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <div className="partner-with-us-container">
          <section id="section-one-sponsors">
            <StyledCharacter title="xx00340" />
            <div className="main-container">
              <div className="left">
                <Typography variant="h2" className="section-title">
                  <span className="change-color">Grow</span> with one of the
                  best
                </Typography>
                {/* <div className="underline"></div> */}
                <Typography variant="h5" className="section-subtitle">
                  <img className="arrow" src={ArrowMultiple} alt="" />
                  Learn about partner programs and ways to contribute to our
                  projects. Programs specially designed, that enable you to get
                  maximum exposure in and off campus.
                </Typography>
                {/* <div className="underline"></div> */}
                {/* <Typography className='get-started' variant='subtitle1'>Get Started <OpenInNewRoundedIcon  className='arrow'/> </Typography> */}
                <HashLink
                  className="page-link"
                  smooth
                  to={"#ways-to-contribute"}
                >
                  <InfoBox
                    // click="no-click"
                    title="Explore Programs"
                    info="Contact our sponsorship team today to know more"
                  />
                </HashLink>
              </div>
              <div className="right">
                <img src={Partner} alt="" className="turbo" />
              </div>
            </div>
          </section>

          <section id="section-two-sponsor" className="section-right">
            <Ends />
            <div className="main-container">
              <StyledCharacter title="exposure" />
              <div className="left">
                <img className="crowd content-image" src={Crowd} alt="" />
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
                  The <span className="change-color">Exposure</span>
                  <br /> you'll get
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  We'll give you company the right exposure at events where
                  thousands are present.
                </Typography>
                <Link to={""} className="sub-info">
                  <Button
                    variant="outlined"
                    endIcon={<OpenInNewRoundedIcon className="arrow" />}
                  >
                    {" "}
                    view upcoming events{" "}
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section id="section-three-sponsor" className="section-left">
            {/* <img className='marker' src={Marker} alt="" /> */}
            <div className="main-container">
              <StyledCharacter title="Connect" />
              <div className="left">
                <Typography variant="h2" className="section-title">
                  <span className="change-color">Connect</span> with the
                  community
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  We'll help you connect with other companies and potential
                  people from the event and our backers.
                </Typography>
                <Link to={""} className="sub-info">
                  <Button
                    variant="outlined"
                    endIcon={<OpenInNewRoundedIcon className="arrow" />}
                  >
                    {" "}
                    Build your network{" "}
                  </Button>
                </Link>
              </div>
              <div className="right">
                <img className="connect content-image" src={Connect} alt="" />
              </div>
            </div>
          </section>

          <section id="section-four-sponsor" className="section-right">
            <div className="main-container">
              <StyledCharacter title="Campaigns" />
              <div className="left">
                <img className="social content-image" src={Social} alt="" />
              </div>
              <div className="right">
                <Typography variant="h2" className="section-title">
                  <span className="change-color">Social</span> media
                  <br /> Campaigns
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  Active social media advertising campaigns and original content
                  created by our creators through most popular platforms to
                  boost your brand visibility. Over 40,000 account reaches over
                  a span of four weeks.
                </Typography>
                <Link to={""} className="sub-info">
                  <Button
                    variant="outlined"
                    endIcon={<OpenInNewRoundedIcon className="arrow" />}
                  >
                    {" "}
                    View Analytics{" "}
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section id="section-five-sponsor" className="section-left">
            <div className="main-container">
              <StyledCharacter title="Advantage" />
              <div className="left">
                <Typography variant="h2" className="section-title">
                  Gain a competitive{" "}
                  <span className="change-color">advantage</span>
                  {/* <br />  */}
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  When you sponsor an event, you automatically gain an advantage
                  over your absent direct competitors. We have a team dedicated
                  just for you!
                </Typography>
                <Link to={""} className="sub-info">
                  <Button
                    variant="outlined"
                    endIcon={<OpenInNewRoundedIcon className="arrow" />}
                  >
                    {" "}
                    Contact our team{" "}
                  </Button>
                </Link>
                <div className="page-link">
                  {/* <Typography variant="subtitle1" className="page-link-text">
                    View our Sponsorship Plans{" "}
                    <OpenInNewRoundedIcon className="arrow" />
                  </Typography> */}
                </div>
              </div>
              <div className="right">
                <img className="success content-image" src={Success} alt="" />
              </div>
            </div>
            {/* <EndsTopArrow /> */}
          </section>

          <section id="section-six-sponsor">
            {/* <EndsTop /> */}
            <div className="main-container">
              <div className="left">
                {/* <Typography variant="h2" className="section-title">
                  But why
                  <br /> <span className="change-color">Velocita?</span>
                </Typography> */}
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  " Your support can help us create a better future where millions
                  of ingenious ideas can be turned into a magnificent reality
                  that can inspire a generation of youth " <br />
                  <br />
                </Typography>
                <Link
                  
                  to={"/partner-with-us/ways-to-sponsor/"}
                  className="page-link"
                >
                  <InfoBox
                    title="Ways to contribute"
                    info="Learn about the sponsorship scheme and ways you can contribute"
                  />
                </Link>

                {/* <Button className='button' variant='outlined'>Learn more</Button> */}
              </div>
              <div className="right">
                <div className="card-container">
                  <Card className="card left-tilt">
                    <CardContent className="card-content">
                      <img
                        className="card-image image-left"
                        src={Idea}
                        alt=""
                      />

                      <Typography variant="subtitle2" className="card-info">
                        <div className="underline-small"></div>
                        Be a part of one of country's top teams.
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card className="card">
                    <CardContent className="card-content">
                      <img className="card-image" src={Brand} alt="" />
                      <Typography variant="subtitle2" className="card-info">
                        <div className="underline-small"></div>
                        Supporting a student project will elevate the outlook of
                        your organization{" "}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card className="card right-tilt">
                    <CardContent className="card-content">
                      <img
                        className="card-image image-right"
                        src={Corporate}
                        alt=""
                      />
                      <Typography variant="subtitle2" className="card-info">
                        <div className="underline-small"></div>
                        Associating with us will add to CSR ativities of your
                        organisation{" "}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            {/* <Ends /> */}
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
              <Link className="page-link" to={"/partner-with-us/contact-team/"}>
                <InfoBox
                  title="Contact our team"
                  info="learn about the sponsorship scheme and ways you can contribute"
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

export default PartnerWithUs;
