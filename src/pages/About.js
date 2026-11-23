import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Helmet } from "react-helmet";
import { theme } from "../components/theme";
import Typography from "@mui/material/Typography";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";

import "./style/about/section1.scss";

const About = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Velocita Racing</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <section id="section-one-about">
          <div className="main-container">
            <StyledCharacter title={"xx0290"} />
            <Typography variant="h3" className="section-title">
              About Us
            </Typography>
            <div className="underline"></div>
            <Typography variant="body1" className="section-info">
            Velocita Racing, the exclusive combustion class Formula Student team of Ramaiah Institute of Technology, Bengaluru,
             comprises 50  undergraduate students from diverse backgrounds. Our relentless dedication drives the continual refinement
              of high-performance racing vehicles for esteemed competitions across India. Platforms like Formula Bharat provide
               invaluable opportunities for us to explore diverse engineering practices
                crucial for our nation's progress. Beyond mere accolades, our ethos aims to innovate and expand young professionals'
                 horizons through creativity, ingenuity, and dexterity.
              <br />
              <br />
              Our journey commenced humbly at the MSRIT canteen, where first-year students united in their passion for automobiles.
               Since then, we've evolved continuously. From crafting a race kart in our freshman year, 
               propelling us to national competition acclaim, to recent endeavors.
              <br />
              <br />
              At the recent Formula Bharat event at Kari Motor Speedway, Velocita Racing showcased its prowess, securing 10th position overall.
               Notably, we excelled in cost and manufacturing, clinching 6th place, and were finalists in the engineering design presentation.
                These achievements testify to the unwavering dedication and meticulous craftsmanship of every team member.
              <br />
              <br />
              Reflecting on our journey, we're filled with pride and gratitude for our collective efforts. Yet, our resolve remains unwavering, 
              driven by a relentless pursuit of excellence and innovation. With each triumph and setback, we emerge stronger, more determined, 
              committed to pushing the boundaries of motorsport engineering.
              <br />
              <br />
              Velocita Racing stands poised on the precipice of greatness, fueled by a collective passion for excellence. 
              Together, we redefine innovation's limits, blazing a trail towards a future where creativity and ingenuity reign supreme.
            </Typography>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default About;
