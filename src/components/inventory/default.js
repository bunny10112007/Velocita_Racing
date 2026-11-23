import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Helmet } from "react-helmet";
import { theme } from "../../components/theme";
import Typography from "@mui/material/Typography";
import { StyledCharacter } from "../../components/styledCharacter/StyledCharacter";
import { Button, Divider } from "@mui/material";


const DefaultPage = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <section id="sec-main">
          <div className="heading">
            <Typography variant="h4">Version 1.0</Typography>
          </div>
          <Divider />
          <div className="text">
            <Typography variant="subtitle1">Welcome to Velocita Racing Inventory Management System Beta.</Typography>
            <Typography variant="subtitle1">The following functions are available</Typography>
            <ul className="func-list">
              <li>Searching</li>
              <li>Adding New Item</li>
              <li>Adding Existign Item</li>
            </ul>
          </div>

          <div className="form-controls">
            {/* <Button variant='contained' startIcon={<SearchRounded />}> Search</Button> */}
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default DefaultPage;
