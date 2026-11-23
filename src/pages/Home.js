import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { theme } from "../components/theme";
import { ThemeProvider } from "@mui/material/styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// Parallax Component

import Ends from "../components/Svgs/HomeEnds";
import EndsGrey from "../components/Svgs/EndsGrey";
import EndsTop from "../components/Svgs/HomeTop";
import EndsTopArrow from "../components/Svgs/EndsTopArrow";



// Mui Icons
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
// import ArrowForwardRoundedIcon from '@mui/icons/ArrowForwardRounded';

// Custom Components
import FooterSponsors from "../components/footersponsors/FooterSponsors";
import { StyledHeading } from "../components/styledHeading/StyledHeading";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";
import { InfoBox } from "../components/infoBox/InfoBox";
import ArrowLargeSvg from "../components/Svgs/ArrowLarge";
import NewSponsors from "../components/newsponsors/NewSponsors";
import DialogBox from '../components/dialogbox/DialogBox';
// import TurboSvg from '../components/Svgs/Turbo';

// Scss
import "./style/home/app.scss";

// Assets
import Gear from "../assets/Home/gear.png";
import Car from "../assets/Home/cartwo.png";
import Vrf from "../assets/Home/right.png";
import Turbo from "../assets/Home/turbothree.png";
import Maya from "../assets/Home/three.png";
import vrf5banner from "../assets/Home/vrf5-banner.png";
import RandD from "../assets/Home/four.png";
import Partner from "../assets/Home/partner-light.png";
// import Arrow from '../assets/Home/arrow.png'
import Clothes from "../assets/Home/clothes.png";
import Podcast from "../assets/Home/podcast.webp";
import Wall from "../assets/Home/wall.png";
import Robot from "../assets/Home/robot.png";
// import Aero from '../assets/Home/aero.png'
import Event from "../assets/Home/Val.jpg";
// import Image from '../assets/Home/home-cover.png'
// import ImageNews from '../assets/Home/News-cover.png'
import Apple from "../assets/Podcast/apple.svg";
import Google from "../assets/Podcast/google.svg";
import Beaker from "../assets/Podcast/beaker.png";
import Pocketcast from "../assets/Podcast/pocketcast.webp";
import Radiopublic from "../assets/Podcast/radiopublic.webp";
import Spotify from "../assets/Podcast/spotify.png";
import ArrowMultiple from "../assets/Home/arrow-multiple-new.png";
import { height } from "@mui/system";
import { Link } from "react-router-dom";


import CarOne from "../assets/Home/vrf5.jpg"
import Car2025 from "../assets/Home/fb2025.JPG"
import Stepper from "../components/Stepper/Stepper";
import PopUp from "../components/popup/PopUp";
import PopupImage from "../components/popup/PopUp";
import Popup from "../components/popup/PopUp";
import carno from "../assets/c01.jpg";

const Home = () => {

  window.onscroll = () => {
    if (window.scrollY > 830) {
      document.querySelector("#car-image").className = "car-image car-image-move";
      console.log("scrolling");
    } else {
      document.querySelector("#car-image").className = "car-image";
    }
  }

  return (
    <div className="background-color">
    <Popup imageUrl={carno} />

      <ThemeProvider theme={theme}>
        {/* Landing Page | Section One */}

        <section id="section-one">
          <div className="main-container">
            <div className="sub-container left">
            {/*<Link to="/crowdfunding/upi/checkout/">
            <DialogBox title="Crowdfunding Now Open!" message="Our Crowdfunding initiative has kicked off! Make your contribution now, tap me!" />
            </Link>*/}
            <StyledHeading title={"explore -"} />
              <Typography variant="h1">
                Beyond<br></br>Engineering
              </Typography>
              <Typography variant="subtitle1" className="sub-heading">
              <img className="arrow" src={ArrowMultiple} alt="" />
                Leading innovation in motorsport engineering through the design and development of high-performance FSAE race cars.
              </Typography>

              <div className="div-box-two"></div>

              <StyledCharacter title={"xx00xx"} />
              <InfoBox
                click="no-click"
                title="What's new?"
                info="FB2025 RESULTS ARE OUT! VRF6 secures 2nd place overall in the competition."
              />
            </div>

            <div className="sub-container right">
              <div className="vrf-image-container">
                <img src={Car2025} alt="" className="vrf-image" />
                
                {/* <Stepper /> */}

                <span className="box-heading">
                  <ArrowForwardIosRoundedIcon className="arrow"/>
                  Formula Bharat 2025
                </span>
                <span className="box-footer"><span className="large">02<sup className="super">nd</sup></span> Overall</span>
              </div>
              <Link to="/series/F/" className="page-link">
                <InfoBox
                  title="F Series"
                  info="Explore Velocita Racing's Formula Student Series"
                />
              </Link>
              <StyledCharacter title={"xx00xx"} />
            </div>
          </div>
        </section>

        {/* Home Page - Section Two */}

        <section id="section-two">
          <div className="main-container">
            <div className="block">
              <span></span>
            </div>
            <img src={Gear} className="gear-image-small" alt="" />
            <img src={Gear} className="gear-image-large" alt="" />
            <div className="circle"></div>
            <div className="left">
              <Typography variant="h3" className="heading">
                velocita
                <br /> racing
              </Typography>
              <Typography variant="subtitle1" className="sub-title">
                Official combustion class FSAE team of <br></br>Ramaiah
                Institute of Technology
              </Typography>
            </div>
            <div className="right">
              <div className="side-line"></div>
              <Typography variant="body1" className="section-information">
                Velocita Racing came to life around a small table at the MSRIT
                canteen, where a group of students from the first year found
                themselves in the midst of fellow automobile enthusiasts. Since
                then, we’ve come a long way. Having designed and fabricated a
                race kart while we were still freshers, we came among the top
                teams in the country.
              </Typography>
            </div>
          </div>
        </section>

        {/* Home Page | Section Three */}

        <section id="section-three">
          <div className="main-container">
            <StyledCharacter title={"vrf xx 5"} />
            <img src={Maya} className="maya" alt="" />

            <div className="left">
              <img src={Car} className="car-image" id="car-image" alt="" />
              <a
                target="_blank"
                href={"https://www.youtube.com/watch?v=IAXib4TBBrE"}
              >
                <InfoBox
                  title="Watch her in action!"
                  info="Watch Maya perform some doughnuts from sponsor unveil 2021"
                />
              </a>
            </div>
            <div className="right">
              <InfoBox
                click="no-click"
                title="MAYA > VRF 5"
                info='We went from MAYA to VRF5 in a span of few years. VRF5 is the latest creation of Velocita Racing for the season 2023-24. It&apos;s compact, lighter and faster than ever.'
              />
              {/* <div className="neo-block"><img src={Arrow} alt="" className='arrow-large'/></div> */}
            </div>
          </div>
          <EndsGrey className="end-bot" />
        </section>
       


        {/* Home Page | Section Four One */}

        <section id="section-four-one">
          <div className="main-container">
            <StyledCharacter title={"XX - team - XX"} />
            <div className="left">
              <div className="block"></div>
              <StyledHeading title={"explore -"} />
              <Typography variant="h2" className="section-title">
                The Turbocharged <br />
                team
              </Typography>
              <Typography variant="subtitle1" className="section-title">
                Get started with your career at velocita racing. <br></br> Work
                with us as a powertrain engineer
              </Typography>
              <Link to={"/our-team/"} className="sub-info">
               <Button variant="outlined" endIcon={<OpenInNewRoundedIcon className="arrow" />}> Current Season Team {" "}</Button>
              </Link>
              <div className="neo-block">
                <ArrowLargeSvg />
              </div>
              {/* <InfoBox click='no-click'  title='FSAE' info='There are over 600+ combustion class teams and 200+ electric teams over the world! That makes over 25,000 members.' /> */}
            </div>
            <div className="right">
              {/* <div className="block"><span className="side-line"></span></div> */}
              <img src={Turbo} className="turbo" alt="" />

              <InfoBox
                click="no-click"
                title="Did you know?"
                info="Did you know that VRF 2 is Turbocharged?"
              />
            </div>
          </div>
        </section>
        
        {/* Home Page | Section Four */}

        <section id="section-four">
          <div className="main-container">
            <StyledCharacter title={"XX - careers - XX"} />
            <div className="left">
              <div className="block"></div>
              <StyledHeading title={"explore -"} />
              <Typography variant="h2" className="section-title">
                Student Careers <br />
                at Velocita
              </Typography>
              <Link to={"/careers/"} className="sub-info">
                Get started <OpenInNewRoundedIcon className="arrow" />{" "}
              </Link>
              <InfoBox
                click="no-click"
                title="FSAE"
                info="There are over 600+ combustion class teams and 200+ electric teams over the world! That makes over 25,000 members."
              />
            </div>
            <div className="right">
              <div className="neo-block">
                <ArrowLargeSvg />
              </div>
              <img src={Robot} className="turbo" alt="" />
              <Link to={"/careers/"} className="apply-block">
                <div className="block"></div>
                <div className="block-info">
                  <Typography variant="h6" className="title">
                    Open Position
                  </Typography>
                  <Typography variant="subtitle2">
                    Click here to view open positions available for current season
                  </Typography>
                </div>

                <ArrowForwardIosRoundedIcon className="arrow" />
              </Link>
              <Link to={"/careers/recruitment/"} className="apply-block">
                <div className="block"></div>
                <div className="block-info">
                  <Typography variant="h6" className="title">
                    Recruitment Drive 2025
                  </Typography>
                  <Typography variant="subtitle2">
                    Register here for participating in the recruitment drive for
                    season 2025
                  </Typography>
                </div>
                <ArrowForwardIosRoundedIcon className="arrow" />
              </Link>
            </div>
          </div>
          <EndsTopArrow className="end-bottom" />
        </section>
      
        {/* Home Page | Section Five */}

        <section id="home-five">
          <div className="main-container">
            <img src={RandD} className="rnd-image" alt="" />
            <div className="left">
              <div className="neo-block">
                <ArrowLargeSvg />
              </div>
              <StyledCharacter title={"XX - R & D - XX"} />
              <InfoBox
                click="no-click"
                title="R &amp; D at Velocita"
                info="Introducing R&amp;D segment of Velocita Racing, focused on innovating and finding possibilities and developing new products and processes to create competitive advantage, better environmental performance and enhanced sustainability."
              />
            </div>
            <div className="right">
              <div className="block"></div>
              <StyledHeading title={"explore -"} />
              <Typography variant="h2" className="section-title">
                Research &amp; <br></br>Development
              </Typography>
              <Link to={"/research-and-development/"} className="sub-info">
                Learn More <OpenInNewRoundedIcon className="arrow" />{" "}
              </Link>

              <StyledCharacter title={"xx - new - xx"} />
              <Link to={"/research-and-development/"}>
                <InfoBox
                  title="Explore Projects"
                  info="R and D projects at Velocita, find a career possibility with velocita."
                />
              </Link>
            </div>
          </div>
          <Ends className="end-bottom" />
        </section>

        {/* Home Page | Section Six */}

        <section id="section-six">
          <div className="main-container">
            <div className="left">
              <StyledCharacter title={"XX - partner - XX"} />
              <div className="block">
                <div className="sub-block"></div>
              </div>
              <StyledHeading title={"explore-"} />
              <Typography variant="h2" className="section-title">
                Partner Programs <br/>at Velocita
              </Typography>
              <Typography variant="h5" className="section-subtitle">
              </Typography>
              <Link to={"/partner-with-us/"} className="sub-info">
                Get started <OpenInNewRoundedIcon className="arrow" />{" "}
              </Link>
              <Link to={"/partner-with-us/"}>
                <InfoBox
                  title="Learn more"
                  info="Want to support our projects? Here's how you can."
                />
              </Link>
            </div>
            <div className="right">
              <div className="block"></div>
              <img src={Partner} className="partner-image" alt="" />
            </div>
          </div>
        </section>

        {/* Home Page | Section Seven */}

        <section id="section-seven">
          <div className="main-container">
            <div className="left">
              <div className="block">
                <div className="sub-block"></div>
              </div>
              <StyledHeading title={"sponsors -"} />
              <Typography variant="h2" className="section-title">
                Join Our Racing <br />
                Community
              </Typography>
              <Typography variant="subtitle1" className="section-subtitle">
                Be a part of our journey in developing an engineering masterpiece.
                Join us today as a sponsor and get exclusive benefits.

              </Typography>
              <Link to={"/sponsors/"} className="sub-info">
              <Button variant="outlined" endIcon={<OpenInNewRoundedIcon className="arrow" />}>
                View Sponsors {" "}
              </Button>
              </Link>
            </div>

            <div className="right">
              <NewSponsors />
            </div>
          </div>
        </section>

        {/*  */}
        
        {/* <section id='more-velocita'>
          <div className="main-container">
            <div className="banner">
              <Typography className="title" variant='h3'>
                We're <span className="text-color">more</span> than Racing
              </Typography>
              <Typography className="sub-title" variant='subtitle1'>
                Clothing &nbsp;&nbsp;<span className="text-color">|</span>&nbsp;&nbsp; Podcast &nbsp;&nbsp;<span className="text-color">|</span>&nbsp;&nbsp; Workshops &nbsp;&nbsp;<span className="text-color">|</span>&nbsp;&nbsp; Quizzes and more
              </Typography>
            </div>
          </div>
        </section> */}

        {/*  */}

        {/* Home Page | Section Eight */}

        <section id="section-eight">
          <EndsTop className="end-top" />
          <div className="main-container">
            <div className="left">
              <div className="block"></div>
              <StyledHeading title="also explore -" />
              <Typography variant="h2" className="section-title">
                The Official Store
              </Typography>
              <span className="sub-title">Created with life in mind</span>
              <span className="sub-title-info">
              </span>
              <Button variant='outlined'>VELOCITA50</Button>
            </div>
            <div className="right">
              <div className="sub-container">
                <div className="link-block">
                  <Link to="/shop/stickers/" className="in-page-link">
                    <div className="block"></div>
                    <div className="block-info">
                      <Typography variant="h6" className="link-title">
                        Bumper Stickers
                      </Typography>
                      <Typography variant='subtitle2' className='sub-title'>
                        I'll be back in stock soon
                      </Typography>
                    </div>
                    <ArrowForwardIosRoundedIcon className="arrow" />
                  </Link>
                </div>

                {/* <div className="link-block">
                  <a className="in-page-link">
                    <div className="block"></div>
                    <div className="block-info">
                      <Typography variant="h6" className="link-title">
                        Wall Papers
                      </Typography>
                    </div>
                    <ArrowForwardIosRoundedIcon className="arrow" />
                  </a>
                </div> */}
                {/* <img src={Clothes} className="clothes" alt="" /> */}
              </div>
            </div>
          </div>
        </section>

        {/* Home Page | Section Nine  */}

        <section id="section-nine">
          <div className="main-container">
            <div className="left">
              <div className="block"></div>
              <StyledHeading title="explore -" />
              <Typography variant="h3" className="section-title">
                The Racing Journey podcast
              </Typography>
              <Typography variant="h6" className="sub-title">  
                Hey Automotive enthusiasts!
              </Typography>
              <span className="sub-title-info">
                Racing Journey is a podcast that talks about everything in the
                world of racing and specifically, Formula Student. Here, we
                bring you all the stories, experiences and science that makes
                working in an FSAE or Formula Student team so exciting.
              </span>
              <a target='_blank' href="https://anchor.fm/pranay-ketineni" className="sub-info">
              <Button variant="outlined" endIcon={<OpenInNewRoundedIcon className="arrow" />}> Listen Now {" "}</Button>
              </a>
            </div>
            <div className="right">
              <Card className="podcast-card">
                <iframe
                  className="podcast-spotify"
                  src="https://open.spotify.com/embed/episode/6jZCvz4UCbBXkK4zaFi9jx?theme=0"
                  width=""
                  height="232"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
              </Card>

              <Card className="link-card">
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined-button-group"
                >
                  <a target='_blank' href="https://podcasts.apple.com/us/podcast/racing-journey-formula-student/id1538823215">
                  <Button>
                    <img className="podcast-logo" src={Apple} alt="" />
                  </Button>
                  </a>
                  <a target='_blank' href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8zYzkwYmZhMC9wb2RjYXN0L3Jzcw==">
                  <Button>
                    <img className="podcast-logo" src={Google} alt="" />
                  </Button>
                  </a>
                  <a target='_blank' href="https://open.spotify.com/show/0QOz83KZmGgEZM395NqANE">
                  <Button>
                    <img className="podcast-logo" src={Spotify} alt="" />
                  </Button>
                  </a>
                  <a target='_blank' href="https://www.breaker.audio/racing-journey-formula-student">
                  <Button>
                    <img className="podcast-logo" src={Beaker} alt="" />
                  </Button>
                  </a>
                  {/* <Button>
                    <img className="podcast-logo" src={Pocketcast} alt="" />
                  </Button> */}
                  <a target='_blank' href="https://radiopublic.com/racing-journey-formula-student-WoLjkm">
                  <Button>
                    <img className="podcast-logo" src={Radiopublic} alt="" />
                  </Button>
                  </a>
                </ButtonGroup>
              </Card>
              {/* <img src={Podcast} className="podcast" alt="" /> */}
            </div>
          </div>
        </section>

        {/* Home Page | Section Ten */}

        {/* <section id="section-ten">
          <div className="main-container">
            <div className="left">
              <div className="block"></div>
              <StyledHeading title="explore -" />
              <Typography variant="h2" className="section-title">
                Events &amp; More
              </Typography>
              <span className="sub-title">Fun activities every month!</span>
              <span className="sub-title-info">
                Participate in quizes, workshops, gaming and more. Also win exciting prizes!
              </span>
              <Link to={'/events/'} className="sub-info">
              <Button variant="outlined" endIcon={<OpenInNewRoundedIcon className="arrow" />}> Explore Events {" "}</Button>
              </Link>
            </div>
            <div className="right">
              <Card className="event-box">
                <CardMedia
                  className="event-image"
                  component="img"
                  height="170"
                  image={Event}
                  alt=""
                />
                <div className="event-info">
                  <Typography variant="h5" className="section-title">
                    12<br></br> JUN
                  </Typography>
                  <Typography variant="subtitle1" className="section-subtitle">
                    The Motorsport Quiz in association with QC Msrit
                  </Typography>
                  <ArrowForwardIosRoundedIcon className="arrow" />
                </div>
              </Card>
            </div>
          </div>
        </section> */}
      </ThemeProvider>
    </div>
  );
};

export default Home;
