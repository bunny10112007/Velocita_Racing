import React from "react";
import { theme } from "../components/theme";
import "./style/team/team.scss";
import { StyledHeading } from "../components/styledHeading/StyledHeading";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";
import { InfoBox } from "../components/infoBox/InfoBox";
import { Members } from "../components/teamcard/TeamDetails.js";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import EmailIcon from "@mui/icons-material/Email";
import Team from "../components/teamcard/Team";
import ArrowLargeSvg from "../components/Svgs/ArrowLarge";
import TeamImage from "../assets/Home/team.png";
import Ends from '../components/Svgs/Ends'
import Helmet from "react-helmet";
import ArrowMultiple from "../assets/Home/arrow-multiple-new.png";


const OurTeam = () => {
  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" />
        <title>Our Team | Velocita Racing</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <section id="section-one-team">
          <div className="main-container">
            <div className="left">
              <StyledHeading title={"Know -"} />
              <Typography variant="h1">The Team</Typography>

              <Typography variant="subtitle1" className="sub-heading">
              <img className="arrow" src={ArrowMultiple} alt="" /> Velocita has a team of excellent engineers who work with
                complete dedication to keep Velocita ahead in every aspect!
              </Typography>

              <div className="div-box-two"></div>

              <StyledCharacter title={""} />
              <InfoBox
                click="no-click"
              />

              {/* <div className="neo-block">
                <ArrowLargeSvg />
              </div> */}
            </div>
            <div className="right">
            <StyledCharacter title={""} />
              {/* <img src={TeamImage} alt="" className='team-image'/> */}
              <div className="sub-container">
                <div className="link-block">
                  <HashLink
                    smooth
                    to={"/our-team/#section-two-team"}
                    className="in-page-link"
                  >
                    <div className="block"></div>
                    <div className="block-info">
                      <Typography variant="h6" className="title">
                        Team 2025
                      </Typography>
                      {/* <Typography variant="subtitle1" className="sub-title">
                      Graphic Designer I
                    </Typography> */}
                      <Typography variant="subtitle2">
                        Current Season
                      </Typography>
                    </div>
                    <ArrowForwardIosRoundedIcon className="arrow" />
                  </HashLink>
                </div>

                <div className="link-block">
                  <Link to={"/our-team/2024"} className="in-page-link">
                    <div className="block"></div>
                    <div className="block-info">
                      <Typography variant="h6" className="title">
                        Team 2024
                      </Typography>
                      <Typography variant="subtitle2">Last season</Typography>
                    </div>
                    <ArrowForwardIosRoundedIcon className="arrow" />
                  </Link>
                </div>

                <div className="link-block">
                  <Link to={"/our-team/2023"} className="in-page-link">
                    <div className="block"></div>
                    <div className="block-info">
                      <Typography variant="h6" className="title">
                        Previous Seasons
                      </Typography>
                      <Typography variant="subtitle2">
                        Upto season 2019-23
                      </Typography>
                    </div>
                    <ArrowForwardIosRoundedIcon className="arrow" />
                  </Link>
                </div>
              </div>
            </div>
           
          </div>

        </section>

        <section id="section-two-team">
        {/* <Ends /> */}
          <div className="main-container">
            <div className="card-container">
              <Team year={"2025"} />
            </div>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default OurTeam;
