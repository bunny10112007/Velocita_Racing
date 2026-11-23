import React from "react";
import { Link, NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../components/theme";
import Garrett from "../assets/Partners/garrett-full.png";
import { SponsorItems } from "../components/footersponsors/SponsorItems";
import LinkIcon from "@mui/icons-material/Link";
import "./style/sponsordetails/sponsordetails.scss";

const SponsorDetails = (props) => {
  function SortArray(x) {
    var SponDet = [];
    var l = SponsorItems.length;
    for (let i = 0; i < l; i++) {
      // console.log(SponsorItems[i].id);
      // console.log(x);
      if (SponsorItems[i].id === x) {
        SponDet = SponsorItems[i];

        break;
      }
    }
    // console.log(SponDet);
    // console.log(x);
    return SponDet;
  }

  var ArraySorted = SortArray(props.id);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <section id="sponsor-details-one">
          <div className="main-container">
            <div className="sponsor-title block">
              <div className="image-block block">
                <img className="sponsor-image" src={ArraySorted.image} alt="" />
              </div>
              <Typography className="title-content" variant="h5">
                {ArraySorted.title}
              </Typography>
              <div className="underline"></div>
            </div>
            <div className="links block">
              <span className="weblink">
                <LinkIcon className="arrow" />
                <a href={ArraySorted.web} target="_blank">
                  {ArraySorted.webText}
                </a>
              </span>
              <span className="weblink">
                <Typography className="sponsor-about">
                  Sponsor Level : {ArraySorted.level}
                </Typography>
              </span>
            </div>
            <div className="sponsor-about-container block">
              <Typography variant="h6">About</Typography>
              <div className="underline-small"></div>
              <Typography className="sponsor-about">
                {" "}
                {ArraySorted.about}
              </Typography>
            </div>
          </div>
        </section>

        {/* <section id='sponsor-details-two'>
            <div className="main-container">
                
            </div>
        </section> */}
      </ThemeProvider>
    </div>
  );
};

export default SponsorDetails;
