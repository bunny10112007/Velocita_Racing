import React from "react";
import Feedback from "../components/form/Feedback";
import { ThemeProvider } from "@mui/material";
import { theme } from "../components/theme";
import "./style/feedback/feedback.scss";
import Helmet from "react-helmet";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Link } from "react-router-dom";
import SecFooter from "../components/footer/SecFooter";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

const InternalFeedback = () => {
  return (
    <div>
      <Helmet>
        <title>Payment Details - UPI | Velocita Racing</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <section id="section-one-feedback">
          <Link to={"/crowdfunding/upi/checkout/"} className="sub-info">
            <Button variant="outlined">
              <ArrowBackRoundedIcon className="icon" />
            </Button>
          </Link>
          <div className="main-container">
            <div className="feedback-form-container">
              <Typography variant="h3">Internal Feedback</Typography>
                <div className="underline"></div>
              <Feedback />
            </div>
            <div className="right"></div>
          </div>
        </section>
      </ThemeProvider>
      <SecFooter />
    </div>
  );
};

export default InternalFeedback;
