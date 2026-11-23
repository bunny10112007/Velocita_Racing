import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Helmet } from "react-helmet";
import { theme } from "../components/theme";
import Typography from "@mui/material/Typography";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";

import "./style/inventory/land.scss";
import ResponsiveDrawer from "../components/inventory/appbar";

const Inventory = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inventory | Velocita Racing</title>
      </Helmet>
      <ThemeProvider theme={theme}>

        <ResponsiveDrawer />

        <section id="section-one-about">
          
        </section>
      </ThemeProvider>
    </div>
  );
};

export default Inventory;
