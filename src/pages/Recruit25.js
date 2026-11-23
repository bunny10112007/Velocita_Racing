import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { HashLink } from "react-router-hash-link";
import { theme } from "../components/theme";
import Typography from "@mui/material/Typography";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";
import { StyledHeading } from "../components/styledHeading/StyledHeading";
import "./style/recruit/recruit.scss";
import { InfoBox } from "../components/infoBox/InfoBox";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import ArrowMultiple from "../assets/Home/arrow-multiple-new.png";
import Ends from "../components/Svgs/Ends";
import EndsTop from "../components/Svgs/EndsTop";

import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import { ArrowRight, ArrowRightAltRounded } from "@mui/icons-material";
import SimpleAccordion from "../components/accordion/Accordion";
import CustomizedTimeline from "../components/timeline/Timeline";
import { Link } from "react-router-dom";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Helmet from "react-helmet";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Recruit25 = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [openNew, setOpenNew] = React.useState(false);
  const handleClickNew = () => {
    setOpenNew(true);
  };

  const handleCloseNew = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenNew(false);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Recruitment | Velocita Racing</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <section id="section-one-recruit">
          {/* <div className="nav-cover"></div> */}
          <div className="main-container">
            <StyledCharacter title={"xx0290"} />
            <div className="left">
              <div className="block">
                <div className="sub-block"></div>
              </div>
              {/* <StyledHeading title={'Recruitment -'} /> */}
              <Typography variant="h1" className="section-title">
                We<span className="change-color">'</span>re looking
                <br />
                for <span className="change-color">you !</span>
              </Typography>
              <Typography variant="h4" className="section-subtitle">
                <img className="arrow" src={ArrowMultiple} alt="" />
                {/* Annual Recruitment Drive<br></br>
                Season 2022 */}
                Recruitment Drive<br></br>
                Season 2025
              </Typography>
              <InfoBox
                click="no-click"
                title="Registrations Closed"
                info="We will get back to you soon!"
              />
            </div>

            <div className="right">

              

              <Card className="card">
                <div className="date">
                  <Typography variant="h6" className="card-title">
                    22 <br />
                    NOV
                  </Typography>
                </div>
                <Typography variant="subtitle1" className="card-subtitle">
                  Orientation at ESB Seminar Hall I
                </Typography>
                {/* <div className="underline-small"></div> */}
              </Card>

              <Card className="card">
                <div className="date">
                  <Typography variant="h6" className="card-title">
                    23 <br />
                    NOV
                  </Typography>
                </div>
                <Typography variant="subtitle1" className="card-subtitle">
                  Registration Opens
                </Typography>
                {/* <div className="underline-small"></div> */}
              </Card>

              <Card className="card">
                <div className="date">
                  <Typography variant="h6" className="card-title">
                    29 <br />
                    NOV
                  </Typography>
                </div>
                <Typography variant="subtitle1" className="card-subtitle">
                  Registration Closes
                </Typography>
                {/* <div className="underline-small"></div> */}
              </Card>

              <Card className="card">
                <div className="date">
                  <Typography variant="h6" className="card-title">
                    03 <br />
                    DEC
                  </Typography>
                </div>
                <Typography variant="subtitle1" className="card-subtitle">
                  Interaction Session Commences
                </Typography>
                {/* <div className="underline-small"></div> */}
              </Card>

              <Link
                className="page-link"
                to={"/careers/recruitment/2025/register/"}
              >
                <Button
                  onClick={handleClick}
                  className="register-button"
                  variant="contained"
                  size="large"
                >
                  Registerations Closed
                </Button>
              </Link>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="warning"
                  sx={{ width: "100%" }}
                >
                  We will start accepting responses soon!
                </Alert>
              </Snackbar>

              <Snackbar
                open={openNew}
                autoHideDuration={6000}
                onClose={handleCloseNew}
              >
                <Alert
                  onClose={handleCloseNew}
                  severity="warning"
                  sx={{ width: "100%" }}
                >
                  Tasks will open after orientation.
                </Alert>
              </Snackbar>
            </div>
          </div>
        </section>

        <section id="section-two-recruit">
          {/* <Ends /> */}
          <div className="main-container">
            <div className="sec-navbar">
              <ul>
                <HashLink smooth to={"#overview"} className="page-link">
                  Overview
                </HashLink>
                <HashLink smooth to={"#orientation"} className="page-link">
                  Orientation
                </HashLink>
                <HashLink smooth to={"#registration"} className="page-link">
                  Registration
                </HashLink>
                <HashLink smooth to={"#task"} className="page-link">
                  Task/Test
                </HashLink>
                <HashLink smooth to={"#interview"} className="page-link">
                  Interaction Session
                </HashLink>
                <HashLink smooth to={"#roles"} className="page-link">
                  roles &amp; responsibilities
                </HashLink>
                <HashLink smooth to={"#faqs"} className="page-link">
                  faq's
                </HashLink>
              </ul>
            </div>

            <div className="wrapper">
              <div id="overview" className="sub-section section-overview">
                <div className="sticky-header">
                  <Typography variant="h3" className="section-title">
                    Overview
                  </Typography>
                  <div className="underline"></div>
                </div>

                <Typography className="section-content">
                  Velocita Racing is an exclusive combustion class Formula
                  Student team of Ramaiah Institue of Technology. The team
                  participates in Formula Bharat where student teams from around
                  India design, build, test, and race a small-scale formula
                  style racing car. The cars are judged on a number of
                  criterias.
                  {/* <br /><br /> */}
                  &nbsp;Velocita has multi-desciplinary students working on the
                  various subsystems.
                  <br />
                  {/*<br />
                  Annual recruitment drive is where we find new talents who have
                  the capacity to innovate and take the team further in coming
                  years.
                  <br />
                  <br /> */}
                  These subsystems are categorised under Technical, Non
                  Technical roles.
                  <br />
                  {/* Technical Roles: (Roles that will require the learning and
                  application of technical skills and knowledge eg: Aerodynamics
                  Engineer, Electrical Engineer etc.)
                  <br />
                  Non Technical Roles: (Roles such as Content Creator, Social
                  Media Handler, Sponsorship Team, Graphic Designer etc.) */}
                  <br />
                  <Link className="page-link" to={"/careers/"}>
                    <Button className="register-button" variant="outlined">
                      Learn more about roles{" "}
                      <OpenInNewRoundedIcon className="arrow" />
                    </Button>
                  </Link>
                  <br />
                  <br />
                  {/* <strong>
                    Note: 1st Year applicants are not expected to have any prior
                    knowledge for applying. Once you are a part of the team, you
                    will be learning through the journey.
                  </strong> */}
                  <strong>
                    <span style={{ color: "red" }}>Important:</span> This
                    recruitment drive is for 1st, 2nd and 3rd years only.
                  </strong>
                </Typography>
              </div>

              <div id="orientation" className="sub-section section-orientaion">
                <div className="sticky-header">
                  <Typography variant="h3" className="section-title">
                    Orientation
                  </Typography>
                  <div className="underline"></div>
                </div>

                <Typography className="section-content">
                  {/* The event where we all join in to interact with eachother. */}
                  {/* <br /> */}
                  Get to know more about Velocita, interact with team seniors,
                  ask out qustions and much more.
                  <br />
                  <br />
                  After orientation you will have a thorough idea how the team
                  works and what you choose to work on.
                  <br />
                  If you can't decide yet, dont worry! You can reach out to us
                  anytime during the recruitment drive.
                  <br></br>
                  <br></br>
                  <strong>
                    <span style={{ color: "red" }}>Date :</span> 22nd November 2024 <br />
                    <span style={{ color: "red" }}>Venue :</span> ESB Seminar
                    Hall I
                    <br />
                    <span style={{ color: "red" }}>Time :</span> 4:00PM
                    {/* No Orientation for this recruitment drive */}
                  </strong>
                </Typography>
              </div>

              <div id="registration" className="sub-section section-orientaion">
                <div className="sticky-header">
                  <Typography variant="h3" className="section-title">
                    Registration
                  </Typography>
                  <div className="underline"></div>
                </div>

                <Typography className="section-content">
                  <Link
                    className="page-link"
                    to={"/careers/recruitment/2025/register/"}
                  >
                  <Button
                    onClick={handleClick}
                    className="register-button"
                    variant="contained"
                    size="large"
                  >
                    Registerations Closed
                  </Button>
                  </Link>

                  <br />
                  <br />
                  <strong>
                    <span style={{ color: "red" }}>Important: </span>
                    The email id you provide will be used for communications
                    from the team.
                  </strong>
                </Typography>

                <Typography className="section-content">
                  <strong>
                    {/* Note: Join the recruitment drive WhatsApp group after
                    completion of registration */}
                  </strong>
                </Typography>
              </div>

              <div id="task" className="sub-section section-orientaion">
                <div className="sticky-header">
                  <Typography variant="h3" className="section-title">
                    Task / Test
                  </Typography>
                  <div className="underline"></div>
                </div>

                <Typography className="section-content">
                  {/* After the orientaion you will be assigned a task or have to
                  attend a general test or both depending on the number of
                  applicants.
                  <br />
                  <br />
                  */}
                  Task : A task may be Report writing / Research Work / Design
                  work , which you will have to submit in desired format within
                  a given time.
                  <br />
                  <br />
                  {/* <Link
                    className="page-link"
                    // to={"/careers/recruitment/2023/register/"}
                  > */}
                    <Button
                      onClick={handleClickNew}
                      className="register-button"
                      variant="outlined"
                      size=""
                    >
                      Get your task <OpenInNewRoundedIcon className="arrow" />
                    </Button>
                  {/* </Link> */}
                  <br />
                  <br />
                  {/* <Link
                    className="page-link"
                    to={"/careers/recruitment/2023/register/"}
                  > */}
                    <Button
                      onClick={handleClick}
                      className="register-button"
                      variant="outlined"
                      size=""
                    >
                      Submit Task <OpenInNewRoundedIcon className="arrow" />
                    </Button>
                  {/* </Link> */}
                  {/* <strong>
                    {" "}
                    Task questions will be given from all subsystem. You can
                    pick any one task from the given and submit the same.
                  </strong> */}
                  {/* <br />  */}
                  {/* Test : A test will be MCQ type based consisting of 15
                  questions separate for technial and non-technical subsystems.
                  */}
                  <br />
                  <br />
                  <strong>
                    <span style={{ color: "red" }}>Important : </span>
                    No Task / Test for this phase of recruitment drive.
                  </strong>
                  {/* <strong>Note: Task questions will be given from all the subsystem. You can pick any one task from the given and submit the same.</strong> */}
                </Typography>
              </div>

              <div id="interview" className="sub-section section-orientaion">
                <div className="sticky-header">
                  <Typography variant="h3" className="section-title">
                    Interaction Session
                  </Typography>
                  <div className="underline"></div>
                </div>

                <Typography className="section-content">
                  {/* We'd like to know you better. You'll have to attend an
                  interaction session/ interview after you're shortlisted.
                  Interaction session / Interview will be based on the task /
                  test undertaken.
                  <br />
                  <br /> */}
                  We would like to have a short interaction with you in order to
                  know you better.
                  {/* <br /> Direct interaction sessions for this recruitment drive. */}
                  <br />
                  <br />
                  What we'll be looking for :
                </Typography>
                <ul>
                  {/* <li>Understanding of task given</li>
                  <li>Determination to learn</li>
                  <li>Creativity</li> */}

                  <li>Understanding of basic concepts</li>
                  <li>Analytical skills</li>
                  <li>Application and Creativity</li>
                </ul>
                <Typography className="section-content-non">
                  <br />
                  <strong>
                    <span style={{ color: "red" }}>Important : </span>
                    Check the Recruitement Drive group for schedule. <br />
                    <span style={{ color: "red" }}>Venue : </span>Velocita Racing [ESB-113]
                    <br />
                    <span style={{ color: "red" }}>Time : </span>03:30 PM
                    <br />
                  </strong>
                </Typography>
              </div>

              <div id="roles" className="sub-section section-orientaion">
                <div className="sticky-header">
                  <Typography variant="h3" className="section-title">
                    Roles &amp; Responsibilities
                  </Typography>
                  <div className="underline"></div>
                </div>

                <Typography className="section-content">
                  {/* Congratulation and welcome to the team! */}
                  {/* <br />
                  <br /> */}
                  {/* You're now a member of Velocita's family. As a team member we */}
                  As a member of Velocita Racing we expect you to
                </Typography>
                <ul>
                  {/* <li>Follow instructions given from Team Captain/ Subsystem lead</li> */}
                  <li>Actively participate</li>
                  <li>Work collaboratively</li>
                  <li>Attend team meets regularly</li>
                  <li>Attend Learning sessions regularly ( for freshers )</li>
                  <li>
                    Complete given tasks / research work within time frame
                  </li>
                  <li>
                    Report any unethical behaviour / activity to team captain
                  </li>
                  <li>
                    Wear safety equipments while working with tools / on
                    machines
                  </li>
                </ul>
              </div>

              <div id="faqs" className="sub-section section-orientaion">
                <div className="sticky-header">
                  <Typography variant="h3" className="section-title">
                    FAQ's
                  </Typography>
                  <div className="underline"></div>
                </div>

                <Typography className="section-content">
                  We've answered most of them. Didn't find what you're looking
                  for? Get in touch right away!
                  <br />
                  <br />
                </Typography>
              </div>
              <div className="faq-accordion">
                <SimpleAccordion />
              </div>
            </div>
          </div>
        </section>

        <section id="section-three-recruit">
          {/* <EndsTop /> */}
          <div className="main-container"></div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default Recruit25;
