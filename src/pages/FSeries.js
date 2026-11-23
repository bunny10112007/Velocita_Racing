import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../components/theme";
import "./style/Series/fseries.scss";
import { InfoBox } from "../components/infoBox/InfoBox";
import { Typography } from "@mui/material";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";
import Fseries from '../assets/Home/fseries.png' 

const FSeries = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <section id="section-one-fseries">
          <StyledCharacter title="xx00340" />
          <div className="main-container">
            <div className="left">
              <Typography variant="h2" className="section-title">
                <span className="change-color">VRF 6</span><br /> Coming Soon       </Typography>
              <Typography variant="h5" className="section-subtitle">
                Stay tuned for the latest make of Velocita Racing - 
                VRF 6 - faster, lighter and better than ever !                           
                <br /><br />
               
              
              </Typography>
              {/* <InfoBox
                // click="no-click"
                title="Explore Programs"
                info="Contact our sponsorship team today to know more"
              />
             */}
            </div>
            <div className="right">
                <img className='page-image' src={Fseries} alt="" />
            </div>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default FSeries;
