import React from "react";
import { theme } from "../components/theme";
import SponsorDetails from "./SponsorDetails";
import { ThemeProvider } from "@mui/material/styles";

const SponsorPage = ({match}) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SponsorDetails id={match.params.id} />

      </ThemeProvider>
    </div>
  );
};

export default SponsorPage;
