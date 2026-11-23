import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../components/theme";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Team from "../components/teamcard/Team";
import "./style/team/teampage.scss";
import Helmet from "react-helmet";
import ArrowMultiple from "../assets/Home/arrow-multiple-new.png";

const TeamPage = ({ match }) => {
  // console.log(match)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Team | Velocita Racing</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <section id="section-one-teampage">
          <div className="main-container">
            <Typography variant="h3">Team {match.params.id}</Typography>
            <div className="underline"></div>
            <Typography variant="subtitle1" className="section-subtitle">
              Team from previous years
            </Typography>

            <div className="more-links">
              <Typography variant="h6">Also View</Typography>
              <div className="underline-small"></div>
              <ButtonGroup
                variant="text"
                aria-label="outlined button group"
                className="button-group"
              >
                 <Button className="link-button">
                  <NavLink to={"/our-team/2025"} activeClassName="is-active"  className="page-link">
                    2025
                  </NavLink>
                </Button>
                <Button className="link-button">
                  <NavLink to={"/our-team/2024"} activeClassName="is-active"  className="page-link">
                    2024
                  </NavLink>
                </Button>
                <Button className="link-button">
                  <NavLink to={"/our-team/2023"}  className="page-link">
                    2023
                  </NavLink>
                </Button>
                 <Button className="link-button">
                  <NavLink to={"/our-team/2022"}  className="page-link">
                    2022
                  </NavLink>
                </Button>
                <Button className="link-button">
                  <NavLink to={"/our-team/2021"} className="page-link">
                    2021
                  </NavLink>
                </Button>
                <Button className="link-button">
                  <NavLink
                    to={"/our-team/2020"}
                    activeClassName="is-active"
                    className="page-link"
                  >
                    2020
                  </NavLink>
                </Button>
                <Button className="link-button">
                  <NavLink
                    to={"/our-team/2019"}
                    activeClassName="is-active"
                    className="page-link"
                  >
                    2019
                  </NavLink>
                </Button>
                
              </ButtonGroup>
            </div>
          </div>
        </section>
        <section id="section-two-team">
          <div className="main-container">
            <div className="card-container">
              <Team year={match.params.id} />
            </div>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default TeamPage;
