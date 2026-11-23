import React from "react";
import { Link } from "react-router-dom";

import { FooterSocialItems } from "./FooterSocialItems";
import { FooterQuickLinks } from "./FooterQuickLinks";
import { FooterMoreLinks } from "./FooterMoreLinks";

import Button from "@mui/material/Button";

import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

import Logo from "../../assets/Logo/vr-new-logo-white.webp";

import ArrowMultiple from "../../assets/Home/arrow-multiple-new.png";

import "./style/secfooter.scss";

const SecFooter = () => {
  return (
    <div>
      <div className="sec-footer-container">
        <div className="content-bottom">
          <p className="copy-right">
            COPYRIGHT &copy; 2024 <span className="dark">VELOCITA RACING</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;ALL RIGHTS RESERVED
          </p>
          <p className="terms">
            <Link to={"/privacy"}>PRIVACY</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to={"/terms-of-use"}>TERMS OF USE</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecFooter;
