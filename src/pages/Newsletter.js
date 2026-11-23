import React, { useState } from "react";
import "./style/newsletter/newsletter.scss";
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
import Form from "../components/form/Form";
import FlatEnd from "../components/Svgs/FlatEnd";
import { CardContent } from "@mui/material";
import { Card } from "@mui/material";
import SubscribeForm from "../components/form/SubscribeForm";
import NavbarSecondary from "../components/navbar/NavbarSecondary";
import Helmet from "react-helmet";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import SecFooter from '../components/footer/SecFooter'



const Newsletter = () => {
  const [formData, setFormData] = useState({
    email: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formLink = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSerrMs4no7wbODAQn8PWxqpvmXyhFjAsiHuXJFpBF4ZcCixoA/formResponse";
    const emailId = "1082632387";
  
    // Construct the URL with form data
    const formDataUrl = `${formLink}?entry.${emailId}=${encodeURIComponent(formData.email)}`;
  
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
        email: ""
      });
      // Show confirm prompt
      window.confirm("You are onto our mailing lists! You will receive our newsletter shortly!");
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
        <title>Newsletter | Velocita Racing</title>
      </Helmet>
      <NavbarSecondary />
      <ThemeProvider theme={theme}>
        <section id="section-one-newsletter">
          {/* <div className="top-block"></div> */}
          <div className="main-container">
            <StyledCharacter title={"xx0290"} />
            <div className="left">
              <div className="block">
                <div className="sub-block"></div>
              </div>
              <StyledHeading title={"Newsletter -"} />
              <Typography variant="h1" className="section-title">
                For latest updates
                <br />
                <span className="change-color">Subscribe</span>
              </Typography>
              <div className="underline"></div>
              <Typography variant="h4" className="section-subtitle">
                <img className="arrow" src={ArrowMultiple} alt="" />
                Subscribe to " Ignition Times " and don't miss the latest
                updates. Subscribe to get your copy.
              </Typography>
              <Typography variant="subtitle1" className="info"></Typography>

              <div className="form-container">
                <span className="border-top-left"></span>
                <span className="border-top-right"></span>
                <span className="border-bottom-left"></span>
                <span className="border-bottom-right"></span>
                <form onSubmit={handleSubmit}>
                <TextField
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ marginBottom: '10px' }}
                /><br />
                <Button type="submit">Submit</Button>
              </form>
              </div>
            </div>

            <div className="right">
              <div className="card-container">
                <div className="container-content">
                  <Typography variant="h6" className="card-title">
                    Get <span className="color-change">Exclusive</span> content on
                  </Typography>
                  <div className="line underline-small"></div>
                  <Typography
                    variant="subtitle1"
                    className="card-info"
                  ></Typography>
                  <ul>
                    <li className="card-info">
                      <Card className="card">
                        <CardContent className="card-content">
                          <ArrowForwardIosRoundedIcon className="arrow" />
                          Latest research work
                        </CardContent>
                      </Card>
                    </li>
                    <li className="card-info">
                      <Card className="card">
                        <CardContent className="card-content">
                          <ArrowForwardIosRoundedIcon className="arrow" /> 
                          Advanced fabrication techniques
                        </CardContent>
                      </Card>
                    </li>
                    <li className="card-info">
                      <Card className="card">
                        <CardContent className="card-content">
                          <ArrowForwardIosRoundedIcon className="arrow" />
                          Recent technical advances
                        </CardContent>
                      </Card>
                    </li>
                    <li className="card-info">
                      <Card className="card">
                        <CardContent className="card-content">
                          <ArrowForwardIosRoundedIcon className="arrow" />{" "}
                          Industry talks and workshops
                        </CardContent>
                      </Card>
                    </li>
                    <li className="card-info">
                      <Card className="card">
                        <CardContent className="card-content">
                          <ArrowForwardIosRoundedIcon className="arrow" />{" "}
                          Clothing and accessories
                        </CardContent>
                      </Card>
                    </li>
                    <li className="card-info">
                      <Card className="card">
                        <CardContent className="card-content">
                          <ArrowForwardIosRoundedIcon className="arrow" />{" "}
                          Gaming and more
                        </CardContent>
                      </Card>
                    </li>
                  </ul>
                </div>
              </div>
              <StyledCharacter title={"xx00xx"} />
            </div>
          </div>
        </section>
        <SecFooter />
      </ThemeProvider>
    </div>
  );
};

export default Newsletter;
