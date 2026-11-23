import React from "react";
import "./style/register/register.scss";
import RegisterForm from "../components/form/Registerform25";
import { ThemeProvider } from "@mui/material";
import { theme } from "../components/theme";
import Banner from "../assets/Banner/solid-works.png";
import Cad from "../assets/Banner/3d-cad.png";
import Helmet from "react-helmet";
import SecFooter from "../components/footer/SecFooter";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const Register25 = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register | Velocita Racing</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <section id="section-one-register">
          <div className="header">
            <Link to={"/careers"} className="sub-info">
              <Button variant="outlined">
                <ArrowBackRoundedIcon className="icon" />
              </Button>
            </Link>
            <div className="header-info">
              <span className="heading">Registration for season 2025 - 26</span>
              <span className="sub-heading">
                Do not forget to join the Recruitment Drive WhatsApp Group for updates.
              </span>
            </div>
          </div>
          <div className="main-container">
            <div className="form-container">
              Registrations Closed.
            </div>
            <img className="register-banner" src={Banner} alt="" />
            {/* <img className='register-banner-cad' src={Cad} alt="" /> */}
          </div>
        </section>
      </ThemeProvider>
      <SecFooter />
    </div>
  );
};

export default Register25;
