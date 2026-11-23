import React from "react";
import "./style/sponsors/sponsors.scss";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../components/theme";
import Typography from "@mui/material/Typography";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";
import { StyledHeading } from "../components/styledHeading/StyledHeading";
import { InfoBox } from "../components/infoBox/InfoBox";

import Ends from "../components/Svgs/Ends";
import GoldOne from "../assets/Partners/Gold/Gowri-Shankar.webp";
import GoldTwo from "../assets/Partners/Gold/Juno.webp";
import Narkha from "../assets/Partners/narkha.png";
import ArrowLargeSvg from "../components/Svgs/ArrowLarge";
import SilverOne from "../assets/Partners/mipox.png";
import {
  SponsorDriven,SponsorPower,SponsorAssociation
} from "../components/footersponsors/SponsorItems";
import { Button, Card, CardActionArea } from "@mui/material";
import { CardContent } from "@mui/material";
import ArrowMultiple from "../assets/Home/arrow-multiple-new.png";
import { typography } from "@mui/system";
import { HashLink } from "react-router-hash-link";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import SolidWorks from "../assets/Partners/garrett-full.png";

const OurSponsors = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sponsors | Velocita Racing</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <section id="section-one-our-sponsors">
          <div className="main-container">
            <StyledCharacter title="xx00340" />
            {/* <div className="neo-block">
              <ArrowLargeSvg />
            </div> */}

            <div className="left">
              <Typography variant="h2" className="section-title">
                Our <span className="change-color">Sponsors</span>
              </Typography>
              <div className="underline"></div>
              <Typography variant="h5" className="section-subtitle">
                <img className="arrow-multiple" src={ArrowMultiple} alt="" />
                SEASON 2025
              </Typography>

              <Typography variant="subtitle1" className="section-text">
                Much gratitude to all the sponsors for supporting us this
                season.
                <br /> We had a good season, and more to come !
              </Typography>

              <div className="button-group">
                <HashLink
                  className="sub-info page-link"
                  smooth
                  to={"#our-sponsors"}
                >
                  <Button
                    // className="sub-info"
                    variant="outlined"
                    endIcon={<InfoOutlined className="arrow" />}
                  >
                    {" "}
                    all sponsors{" "}
                  </Button>
                </HashLink>
                <Link to={"/partner-with-us/contact-team/"} className="sub-info">
                  <Button
                    // className="sub-info"
                    variant="outlined"
                    endIcon={<OpenInNewRoundedIcon className="arrow" />}
                  >
                    {" "}
                    Contact team{" "}
                  </Button>
                </Link>
              </div>
              {/* <div className="neo-block">
                <ArrowLargeSvg />
              </div> */}

              {/* <HashLink className="page-link" smooth to={"#our-sponsors"}>
                <InfoBox
                  title="View Sponsors"
                  info="View all sponsors for season 2020. One of the best in their domain."
                />
              </HashLink> */}
            </div>
            <div className="right">
              
            </div>
          </div>
        </section>

        <div className="sponsor-container">
          

          

          <section
            id="section-three-our-sponsors"
            className="section-sponsor-details"
          >
            <div className="main-container">
              <div className="sub-container">
                <Typography variant="h2" className="section-title">
                  Powered By
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  {/* SEASON 2021 */}
                </Typography>
              </div>
              <div className="card-container">
                {SponsorPower.map((item, index) => {
                  return (
                    <Card key={item.title} className="sponsor-card-main">
                      {/* <CardActionArea> */}
                      <CardContent className="sponsor-card">
                        <img className="image" src={item.image} alt="" />
                        <div className="about-sponsor">
                          <Typography
                            className="sponsor-name"
                            variant="subtitle1"
                          >
                            {item.title}
                          </Typography>
                          <div className="underline-small"></div>
                        </div>
                        <Button
                          className="link-button"
                          size="small"
                          variant="text"
                        >
                          Learn more
                        </Button>
                      </CardContent>
                      {/* </CardActionArea> */}
                    </Card>
                  );
                })}
              </div>
            </div>
            <div className="main-container">
              <div className="sub-container">
                <Typography variant="h2" className="section-title">
                  Driven By
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  {/* SEASON 2021 */}
                </Typography>
              </div>
              <div className="card-container">
                {SponsorDriven.map((item, index) => {
                  return (
                    <Card key={item.title} className="sponsor-card-main">
                      {/* <CardActionArea> */}
                      <CardContent className="sponsor-card">
                        <img className="image" src={item.image} alt="" />
                        <div className="about-sponsor">
                          <Typography
                            className="sponsor-name"
                            variant="subtitle1"
                          >
                            {item.title}
                          </Typography>
                          <div className="underline-small"></div>
                        </div>
                        <Button
                          className="link-button"
                          size="small"
                          variant="text"
                        >
                          Learn more
                        </Button>
                      </CardContent>
                      {/* </CardActionArea> */}
                    </Card>
                  );
                })}
              </div>
            </div>
            <div className="main-container">
              <div className="sub-container">
                <Typography variant="h2" className="section-title">
                  In Association With
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  {/* SEASON 2021 */}
                </Typography>
              </div>
              <div className="card-container">
                {SponsorAssociation.map((item, index) => {
                  return (
                    <Card key={item.title} className="sponsor-card-main">
                      {/* <CardActionArea> */}
                      <CardContent className="sponsor-card">
                        <img className="image" src={item.image} alt="" />
                        <div className="about-sponsor">
                          <Typography
                            className="sponsor-name"
                            variant="subtitle1"
                          >
                            {item.title}
                          </Typography>
                          <div className="underline-small"></div>
                        </div>
                        <Button
                          className="link-button"
                          size="small"
                          variant="text"
                        >
                          Learn more
                        </Button>
                      </CardContent>
                      {/* </CardActionArea> */}
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          
        </div>
      </ThemeProvider>
    </div>
  );
};

export default OurSponsors;
