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
import "./style/contact/contactsponsor.scss";
import SponsorForm from "../components/form/SponsorForm";
import FlatEnd from "../components/Svgs/FlatEnd";
import NavbarSecondary from "../components/navbar/NavbarSecondary";
import Helmet from "react-helmet";
import SecFooter from "../components/footer/SecFooter";

const ContactSponsorTeam = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    org: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formLink = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdRi5E3fDz3tD6cvRS2DVVZwoiih7pwAOPhZEtrgM6BwbeQJw/formResponse";
    const nameId = "591493677";
    const emailId = "580405156";
    const mobileId = "482944135";
    const orgId = "1274790811";
    const messageId = "1587661928";
  
    // Construct the URL with form data
    const formDataUrl = `${formLink}?entry.${nameId}=${encodeURIComponent(formData.name)}&entry.${emailId}=${encodeURIComponent(formData.email)}&entry.${mobileId}=${encodeURIComponent(formData.mobile)}&entry.${orgId}=${encodeURIComponent(formData.org)}&entry.${messageId}=${encodeURIComponent(formData.message)}`;
  
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
        mobile: "",
        org: "",
        message: "",
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
        <title>Contact Sponsorship Team | Velocita Racing</title>
      </Helmet>
      <NavbarSecondary />
      <ThemeProvider theme={theme}>
        <section id="section-one-contact-sponsor">
          {/* <div className="top-block"></div> */}
          {/* <FlatEnd /> */}
          <div className="main-container">
            <StyledCharacter title={"xx0290"} />
            <div className="left">
              <div className="block">
                <div className="sub-block"></div>
              </div>
              <StyledHeading title={"Sponsor Query -"} />
              <Typography variant="h1" className="section-title">
                Contact our
                <br />
                <span className="change-color">Sponsorship</span> Team
              </Typography>
              <div className="underline"></div>
              <Typography variant="h4" className="section-subtitle">
                Get in touch with our sponsorship team and learn more about
                sponsorship and programs. Send us a message and we'll get back
                to you as soon as possible. You can also send us an email or dm
                through Instagram
              </Typography>
              <Typography variant="subtitle1" className="info">
                Email : velocitaracing.rit@gmail.com
                <br />
                Instagram : @officialvelocitaracing
              </Typography>
              {/* <InfoBox
                click="no-click"
                title="Registrations Open"
                info="You can now submit your applications for season 2025"
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
                  type="mobile"
                  name="mobile"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  type="org"
                  name="org"
                  placeholder="Organisation"
                  value={formData.org}
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
                <br />
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

export default ContactSponsorTeam;
