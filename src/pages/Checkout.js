import React, { useState } from "react";
import { Button, Typography, TextField, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "../components/theme";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "./style/checkout/checkout.scss";
import Helmet from "react-helmet";
import SecFooter from "../components/footer/SecFooter";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import QR from "../assets/UPI/new-qr.png";
import budget from "../assets/UPI/budget(1).png";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reference: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSfd-9J0SCPHWEMyqa4miRoRjMW6NyCY5lajBKDMRpoq9PbwiQ/formResponse";
    const nameId = "1667006960";
    const emailId = "918113189";
    const referenceId = "1776235684";
    const phoneId = "1480962796";
  
    // Construct the URL with form data
    const formDataUrl = `${formLink}?entry.${nameId}=${encodeURIComponent(formData.name)}&entry.${emailId}=${encodeURIComponent(formData.email)}&entry.${phoneId}=${encodeURIComponent(formData.phone)}&entry.${referenceId}=${encodeURIComponent(formData.reference)}`;
  
    // Send the form data using an HTTP request
    fetch(formDataUrl, {
      method: "POST",
      mode: "no-cors"
    })
    .then(() => {
      // Handle success
      console.log("Form data submitted successfully");
      // Reset the form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        reference: ""
      });
      // Show confirm prompt
      window.confirm("Details recorded! We thank you for your contribution!");
    })
    .catch((error) => {
      // Handle error
      console.error("Error submitting form data:", error);
    });
  };

  return (
    <div>
      <Helmet>
        <title>Pay using UPI | Velocita Racing</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <section id="section-one-checkout">
          <Link to={"/crowdfunding/"} className="sub-info">
            <Button variant="outlined">
              <ArrowBackRoundedIcon className="icon" />
            </Button>
          </Link>

          <div className="main-container">
            <div className="left">
              <Typography variant="h2" className="section-title">
                <span className="change-color">Pay</span> using UPI
              </Typography>
              <Typography variant="h5" className="section-subtitle">
                Support us directly from here!
              </Typography>
              <Typography>
                Where the funds go:
              </Typography>
              <img className="responsive-image" src={budget} alt="Image" />
              
            </div>
            <div className="right">
              <div className="link-block">
                <div className="block"></div>
                <div className="block-info">
                  <Typography>
                    Account Name: Pramath Umesh Sangurmath <br />
                    IFSC: KKBK0008045 <br />
                    Account Number: 2111903782 <br />
                    <br />
                    UPI ID: pramathumesh@okicici
                  </Typography>
                </div>
              </div>
              <div className="link-block"></div>
              <div className="link-block">
                <div className="block"></div>
                <div className="block-info">
                  <img src={QR} alt="Image" /><br />
                  <a href="upi://pay?pa=pramathumesh@okaxis">PAY BY LINK</a>
                </div>
              </div>

              {/* Form */}
              <div className="link-block">
              <form onSubmit={handleSubmit}>
                <TextField
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  type="text"
                  name="reference"
                  placeholder="Through which member?"
                  value={formData.reference}
                  onChange={handleChange}
                  style={{ marginBottom: '10px' }}
                />
                <br />
                <Button type="submit">Submit</Button>
              </form>
              </div>
            </div>
          </div>
        </section>
      </ThemeProvider>
      <SecFooter />
    </div>
  );
};

export default Checkout;
