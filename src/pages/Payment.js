import React from "react";
import PaymentDetailsForm from "../components/form/PaymentDetailsForm";
import { ThemeProvider } from "@mui/material";
import { theme } from "../components/theme";
import "./style/checkout/payment.scss";
import Helmet from "react-helmet";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Link } from "react-router-dom";
import SecFooter from "../components/footer/SecFooter";
import { Button } from "@mui/material";

const Payment = () => {
  return (
    <div>
      <Helmet>
        <title>Payment Details - UPI | Velocita Racing</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <section id="section-one-payment">
          {/* <Link to={"/crowdfunding/upi/checkout/"} className="sub-info">
            <Button variant="outlined">
              <ArrowBackRoundedIcon className="icon" />
            </Button>
          </Link> */}
          <div className="main-container">
            <div className="payment-form-container">
              <PaymentDetailsForm />
            </div>
            <div className="right"></div>
          </div>
        </section>
      </ThemeProvider>
      {/* <SecFooter /> */}
    </div>
  );
};

export default Payment;