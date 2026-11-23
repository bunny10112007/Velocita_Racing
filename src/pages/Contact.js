import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";
import { StyledHeading } from "../components/styledHeading/StyledHeading";
import { InfoBox } from "../components/infoBox/InfoBox";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../components/theme";
import ArrowMultiple from "../assets/Home/arrow-multiple-new.png";
import TextField from "@mui/material/TextField";
import ContactForm from "../components/form/ContactForm";
import { Button } from "@mui/material";
import Plane from "../assets/Home/plane.png";
import "./style/contact/contact.scss";
import Form from "../components/form/Form";
import FlatEnd from "../components/Svgs/FlatEnd";
import NavbarSecondary from "../components/navbar/NavbarSecondary";
import Helmet from "react-helmet";
import SecFooter from "../components/footer/SecFooter";
import Message from "react-pdf/dist/umd/Message";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formLink = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSd36RJM2GFFjhcW2DY29Q5hJoHZ10HUx-tnIHz-11zUCmjugA/formResponse";
    const nameId = "506749435";
    const emailId = "929034303";
    const messageId = "888021058";
  
    // Construct the URL with form data
    const formDataUrl = `${formLink}?entry.${nameId}=${encodeURIComponent(formData.name)}&entry.${emailId}=${encodeURIComponent(formData.email)}&entry.${messageId}=${encodeURIComponent(formData.message)}`;
  
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
        message: ""
      });
      // Show confirm prompt
      window.confirm("We will reach out to you shortly!");
    })
    .catch((error) => {
      // Handle error
      console.error("Error submitting form data:", error);
    });
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us | Velocita Racing</title>
      </Helmet>
      <NavbarSecondary />
      <ThemeProvider theme={theme}>
        <section id="section-one-contact">
          {/* <div className="top-block"></div> */}
          {/* <FlatEnd /> */}
          <div className="main-container">
            <StyledCharacter title={"xx0290"} />
            <div className="left">
              <div className="block">
                <div className="sub-block"></div>
              </div>
              <StyledHeading title={"Contact -"} />
              <Typography variant="h1" className="section-title">
                Get in Touch
                <br />
                {/* <span className="change-color">Touch</span> */}
              </Typography>
              <div className="underline"></div>
              <Typography variant="h4" className="section-subtitle">
                {/* <img className="arrow" src={ArrowMultiple} alt="" /> */}
                <img className="arrow" src={ArrowMultiple} alt="" />
                Ask us anything and we'll get back to you as soon as we can. You
                can also send us an email or dm through Instagram.
              </Typography>
              <Typography variant="subtitle1" className="info">
                Email : velocitaracing.rit@gmail.com
                <br />
                Instagram : @officialvelocitaracing
              </Typography>
              {/* <InfoBox
                click="no-click"
                title="Registrations Open"
                info="You can now submit your applications for season 2022"
              /> */}
            </div>
            <div className="right">
              <div className="form-container">
                {/* <img className='plane' src={Plane} alt="" /> */}
                <span className="border-top-left"></span>
                <span className="border-top-right"></span>
                <span className="border-bottom-left"></span>
                <span className="border-bottom-right"></span>
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
                  name="message"
                  placeholder="Mesage"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ marginBottom: '10px' }}
                />
                <Button type="submit">Submit</Button>
              </form>
              </div>
            </div>
          </div>
        </section>
        <section id="section-two-contact"></section>
      </ThemeProvider>
      <SecFooter />
    </div>
  );
};

export default Contact;
