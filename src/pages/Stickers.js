import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { HashLink } from "react-router-hash-link";
import { theme } from "../components/theme";
import Typography from "@mui/material/Typography";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";
import { StyledHeading } from "../components/styledHeading/StyledHeading";
import "./style/shop/stickers.scss";
import { InfoBox } from "../components/infoBox/InfoBox";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import ArrowMultiple from "../assets/Home/arrow-multiple-new.png";
import Ends from "../components/Svgs/Ends";
import EndsTop from "../components/Svgs/EndsTop";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { Button, CardActionArea } from "@mui/material";
import {
    ArrowDownwardRounded,
  ArrowRight,
  ArrowRightAltRounded,
  GppGoodOutlined,
  InfoOutlined,
  InfoRounded,
  InsertEmoticonOutlined,
  LocalShippingOutlined,
  SecurityRounded,
  StarRateOutlined,
  StorefrontRounded,
} from "@mui/icons-material";
import SimpleAccordion from "../components/accordion/Accordion";
import CustomizedTimeline from "../components/timeline/Timeline";
import { Link } from "react-router-dom";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Helmet from "react-helmet";
import { StickerItems, comboPacks } from "../data/StickerItems";

import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

const Stickers = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shop - Bumper Stickers | Velocita Racing</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <section id="stickers-one">
          <div className="main-container">
            <StyledCharacter title="xx00340" />
            <div className="left">
              <Typography variant="h2" className="section-title">
                <span className="change-color">Stickers</span> by Velocita
              </Typography>
              {/* <div className="underline"></div> */}
              <Typography variant="h5" className="section-subtitle">
                <img className="arrow" src={ArrowMultiple} alt="" />
                Give a message with your bumper. Printed in a thick, durable
                vinyl, our custom car bumper stickers will endure long after
                your engine gives out. 
                
                Built for off-roading, the longest road
                trips and highway speeds, all our bumper stickers are made with
                a special laminate that protects from dirt, scratches, rain and
                sun.
              </Typography>
              {/* <div className="underline"></div> */}
              {/* <Typography className='get-started' variant='subtitle1'>Get Started <OpenInNewRoundedIcon  className='arrow'/> </Typography> */}
              {/* <HashLink className="page-link" smooth to={"#"}>
                <InfoBox
                  // click="no-click"
                  title="New Arrivals"
                  info="Check out what's new in the store"
                />
              </HashLink> */}
              <div className="button-group">
                <HashLink className="sub-info page-link" smooth to={"#stickers-two"}>
                  <Button
                    // className="sub-info"
                    variant="outlined"
                    endIcon={<ArrowDownwardRounded className="arrow" />}
                  >
                    {" "}
                    Explore Collection{" "}
                  </Button>
                </HashLink>
                {/* <Link
                  to={"/crowdfunding/upi/verify-payment/"}
                  className="sub-info"
                >
                  <Button
                    // className="sub-info"
                    variant="outlined"
                    endIcon={<OpenInNewRoundedIcon className="arrow" />}
                  >
                    {" "}
                    Track Order{" "}
                  </Button>
                </Link> */}
              </div>
            </div>
            <div className="right">
              <div className="card-container one">
                <Card className="info-card">
                  <StorefrontOutlinedIcon className="arrow" />
                  <Typography className="card-title" variant="h3">
                    130 +
                  </Typography>
                  <Typography className="card-sub-title" variant="subtitle2">
                    Stickers Sold
                  </Typography>
                </Card>
                <Card className="info-card">
                  <InsertEmoticonOutlined className="arrow" />
                  <Typography className="card-title" variant="h3">
                    90 +
                  </Typography>
                  <Typography className="card-sub-title" variant="subtitle2">
                    Happy Customers
                  </Typography>
                </Card>
              </div>
              <div className="card-container two">
                <Card className="info-card">
                  <LocalShippingOutlined className="arrow" />
                  <Typography className="card-title" variant="h3">
                    20 +
                  </Typography>
                  <Typography className="card-sub-title" variant="subtitle2">
                    Out of State Deliveries
                  </Typography>
                </Card>
                <Card className="info-card">
                  <GppGoodOutlined className="arrow" />
                  <Typography className="card-title" variant="h3">
                    ALL
                  </Typography>
                  <Typography className="card-sub-title" variant="subtitle2">
                    Transactions are secured
                  </Typography>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="stickers-two">
          <div className="main-container">
            <StyledHeading title={"explore -"} />
            <Typography gutterBottom variant="h3" component="div">
              Velocita Originals
            </Typography>
            <div className="underline"></div>
            <div className="item-container">
              {StickerItems.map((item, index) => (
                <Card className="item-card single-pack" key={item.itemCode}>
                  <CardMedia
                    component="img"
                    alt=""
                    height="180"
                    image={item.itemImage}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.itemName}
                    </Typography>
                    <Typography variant="body2" color="">
                      {item.itemAbout}
                    </Typography>
                  </CardContent>
                  <CardActions className="card-actions">
                    <Typography gutterBottom variant="h6" component="div">
                      ₹ {item.cost}
                    </Typography>
                    <Button size="" variant="contained">
                      SOLD OUT
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>

            <StyledHeading title={"explore -"} />
            <Typography gutterBottom variant="h3" component="div">
              Combo Packs
            </Typography>
            <div className="underline"></div>
            <div className="item-container">
              {comboPacks.map((item, index) => (
                <Card className="item-card" key={item.itemCode}>
                  <CardMedia
                    component="img"
                    alt=""
                    height="180"
                    image={item.itemImage}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.itemName}
                    </Typography>
                    <Typography variant="body2" color="">
                      {item.itemAbout}
                    </Typography>
                  </CardContent>
                  <CardActions className="card-actions">
                    <Typography gutterBottom variant="h6" component="div">
                      ₹ {item.cost}
                    </Typography>
                    <Button size="" variant="contained">
                      SOLD OUT
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default Stickers;
