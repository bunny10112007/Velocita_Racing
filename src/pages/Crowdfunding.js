import React, { useEffect } from "react";
import { useState } from "react";
import { CardActionArea, CircularProgress, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../components/theme";
import { InfoBox } from "../components/infoBox/InfoBox";
import { StyledHeading } from "../components/styledHeading/StyledHeading";
import { StyledCharacter } from "../components/styledCharacter/StyledCharacter";
import Partner from "../assets/Home/partner-light.png";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { HashLink } from "react-router-hash-link";
import EndsTop from "../components/Svgs/EndsTop";
import Ends from "../components/Svgs/HomeEnds";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Razorpay from "../assets/Home/razorpay.webp";
import Upi from "../assets/Home/upi.webp";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import ArrowMultiple from "../assets/Home/arrow-multiple-new.png";
import "./style/crowdfunding/crowdfunding.scss";
import { Link } from "react-router-dom";
import NavbarSecondary from "../components/navbar/NavbarSecondary";
import { AbcOutlined, InfoOutlined, SettingsRemoteSharp } from "@mui/icons-material";
import { Helmet } from "react-helmet";
import { Card } from "@mui/material";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import StepOne from "../assets/Banner/step-one.png";
import StepTwo from "../assets/Banner/step-two.png";
import StepThree from "../assets/Banner/step-three.png";
import StepFour from "../assets/Banner/step-four.png";
import EndsGrey from "../components/Svgs/EndsGrey";
import EndsTopArrow from "../components/Svgs/EndsTopArrow";
import StepFive from "../assets/Banner/step-five.png";
import StepSix from "../assets/Banner/step-six.png";
import StepSeven from "../assets/Banner/step-seven.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Contribute from "../assets/Home/contribute-two.png";

function createData(name, amount, pay) {
  return { name, amount, pay };
}

const Crowdfunding = () => {
  useEffect(() => {
    getData();
  }, []);

  const [isActive, setActive] = useState(1);
  const toggleClass = (index) => {
    setActive(index);
  };

  const [isActiveNew, setActiveNew] = useState(1);
  const toggleClassNew = (index) => {
    setActiveNew(index);
  };

  const [expandedPanel, setExpandedPanel] = useState(true);
  const handleAccordionChange = () => {
    if (expandedPanel == true) setExpandedPanel(false);
    else setExpandedPanel(true);
  };

  const [expandedPanelTwo, setExpandedPanelTwo] = useState(true);
  const handleAccordionTwoChange = () => {
    if (expandedPanelTwo == true) setExpandedPanelTwo(false);
    else setExpandedPanelTwo(true);
  };

  const [isLoading, setLoading] = useState(true);

  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  

  const rows = [
    createData(
      "Twin Cylinder | V2",
      "500.00",
      <Button onClick={handleToggle} className="pay-button">
        {" "}
        pay <ArrowForwardRoundedIcon className="arrow" />{" "}
      </Button>
    ),
    createData(
      "Inline 3 | I3",
      "1,000.00",
      <Button onClick={handleToggle} className="pay-button">
        {" "}
        pay <ArrowForwardRoundedIcon className="arrow" />{" "}
      </Button>
    ),
    createData(
      "Inline 4 | I4",
      "1,500.00",
      <Button onClick={handleToggle} className="pay-button">
        {" "}
        pay <ArrowForwardRoundedIcon className="arrow" />{" "}
      </Button>
    ),
    createData(
      "V6 Engine",
      "3,000.00",
      <Button onClick={handleToggle} className="pay-button">
        {" "}
        pay <ArrowForwardRoundedIcon className="arrow" />{" "}
      </Button>
    ),
    createData(
      "V8 Engine",
      "5,000.00",
      <Button onClick={handleToggle} className="pay-button">
        {" "}
        pay <ArrowForwardRoundedIcon className="arrow" />{" "}
      </Button>
    ),
    createData(
      "V12 Engine",
      "10,000.00",
      <Button onClick={handleToggle} className="pay-button">
        {" "}
        pay <ArrowForwardRoundedIcon className="arrow" />{" "}
      </Button>
    ),
    // createData(
    //   "Rotary Engine | Open Slab",
    //   "ANY",
    //   <Button onClick={handleToggle} className="pay-button">
    //     {" "}
    //     pay <ArrowForwardRoundedIcon className="arrow" />{" "}
    //   </Button>
    // ),
  ];

  const [items, setItems] = useState([]);

  const [supporterName, setSupporterName] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1nd2XTvJUMapYRcpaLeX3Sgo0tM9LdkUvhMiVAMhvEcw/values/Sheet1?alt=json&key=AIzaSyAOhitHkJEz_XL4-eDBxaM_ndUaQjEE_8c"
    );

    const items = await response.json();
    setItems(items.values);
    setLoading(false);

    const data = await fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1zB52YS8CeXJuyG0syOU3vUTXCqZxckh8I6w9S42xGE0/values/Sheet1?alt=json&key=AIzaSyAOhitHkJEz_XL4-eDBxaM_ndUaQjEE_8c"
    );

    const supporterName = await data.json();
    setSupporterName(supporterName.values);
  };

  // console.log(items);

  let amtRaised = "";
  let contrBut = "";
  let daysUp = "";
  let widthValue = "";
  let rangeOne = "";
  let rangeTwo = "";

  if (items != "") {
    amtRaised = items[1][0];
    contrBut = items[1][1];
    daysUp = items[1][2];
    rangeOne = items[1][3];
    rangeTwo = items[1][4];
    widthValue = items[1][5];
    // console.log(1)
  }

  // console.log(amtRaised);

  // function Raised() {
  //   let crowdArray=[];
  //   let Contributors = "";
  //   let Days= "";
  //   let Raise = "";
  //   for(let i=0;i<3;i++){
  //     crowdArray[i]=items[1][i];
  //   }
  //   console.log(crowdArray);

  //   Contributors=items.values(1,1);
  //   console.log(Contributors);
  //   Raise=crowdArray[1,0];
  //   Days=crowdArray[1,2];
  //   return Raise;
  //   //document.getElementById("amount").textContent = Raise;
  //   //document.getElementById("day").textContent = Days;
  //   //document.getElementById("contribute").textContent = Contributors;
  // };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Crowdfunding | Velocita Racing</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <section id="section-one-crowd">
          <div className="main-container">
            <StyledCharacter title="xx00340" />
            <div className="left">
              <Typography variant="h2" className="section-title">
                <span className="change-color">VRF6 </span>
                Crowdfunding
              </Typography>
              <div className="underline"></div>
              <Typography variant="h5" className="section-subtitle">
                <img className="arrow" src={ArrowMultiple} alt="" />
                Season 2024-25
              </Typography>

              <Typography variant="h4" className="section-subtitle-small">
                Velocita Racing is back with it's crowdfunding campaign for the
                season 2024-25. Contribute now and be a part of making VRF6 a
                success. Every contribution means a lot to us.
              </Typography> 

              <div className="button-group">
                
                <Link to={"/crowdfunding/upi/checkout/"} className="sub-info">
                  <Button
                    // className="sub-info"
                    variant="outlined"
                    endIcon={<OpenInNewRoundedIcon className="arrow" />}
                  >
                    {" "}
                    Contribute Now{" "}
                  </Button>
                </Link>
              </div>

              {/* <div className="underline"></div> */}
              {/* <Typography className='get-started' variant='subtitle1'>Get Started <OpenInNewRoundedIcon  className='arrow'/> </Typography> */}
              {/* <HashLink className="page-link" smooth to={"#slabs"}> */}
              {/* <InfoBox
                  // click="no-click"
                  title="Know the Slabs"
                  info="Learn about the slabs and payment methods"
                /> */}
              {/* </HashLink> */}
            </div>
            <div className="right">
              <div className="link-block">
                <HashLink
                  smooth
                  className="in-page-link"
                  to={"/crowdfunding/#why-velocita"}
                >
                  <div className="block"></div>
                  <div className="block-info">
                    <Typography variant="h6" className="title">
                      Why Velocita ?
                    </Typography>
                    <Typography variant="subtitle2">
                      Learn why fund Velocita Racing and how your support helps
                      us
                    </Typography>
                  </div>

                  <ArrowForwardIosRoundedIcon className="arrow" />
                </HashLink>
              </div>
              <div className="link-block">
                <HashLink
                  smooth
                  className="in-page-link"
                  to={"/crowdfunding/upi/checkout/"}
                >
                  <div className="block"></div>
                  <div className="block-info">
                    <Typography variant="h6" className="title">
                      Pay Using UPI
                    </Typography>
                    <Typography variant="subtitle2">
                      New : Now pay directly to our bank account using UPI{" "}
                    </Typography>
                  </div>
                  <ArrowForwardIosRoundedIcon className="arrow" />
                </HashLink>
              </div>
            </div>
          </div>
          {/* <EndsGrey /> */}
        </section>


        {/* <section id="slabs" className="section-three-crowd">
           <EndsTop /> 
          <div className="main-container">
            <div className="left">
              <div className="header heading">
                <Typography variant="h2" className="section-title">
                  Know the <br /> <span className="change-color">Slabs</span>{" "}
                  <br />
                </Typography>
                <div className="underline"></div>
                <Typography variant="h5" className="section-subtitle">
                  Slabs are named based on engine types. They start from INR
                  500. You can also pay any amount by paying through 'Open
                  Slab'.
                </Typography>

                <Link to={"/crowdfunding/"} className="sub-info">
                  <Button
                    className="sub-info"
                    variant="outlined"
                    endIcon={<OpenInNewRoundedIcon className="arrow" />}
                  >
                    {" "}
                    more About Slabs{" "}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="right">
              <TableContainer className="paper" component={Paper}>
                <Table className="table" aria-label="simple table">
                  <TableHead className="table-head">
                    <TableRow>
                      <TableCell className="cell">Slab Name</TableCell>
                      <TableCell className="cell" align="right">
                        Amount (INR)
                      </TableCell>
                      <TableCell className="cell" align="right">
                        Checkout
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="table-body">
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell className="cell" component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell className="cell" align="right">
                          {row.amount}
                        </TableCell>
                        <TableCell className="cell" align="right">
                          {row.pay}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          <Ends className="ends-crowd" />
        </section>
               */}

        <section
          id="faq-in-crowd"
          className="section-three-three-crowd section-three-four-crowd"
        >
          <div id="why-velocita" className="main-container">
            <div className="left">
              <div className="header heading">
                <Typography variant="h2" className="section-title">
                  Every Contribution counts
                  {/* <span className="change-color"></span>{" "} */}
                </Typography>
                <div className="underline"></div>
                <Typography
                  variant="h5"
                  className="section-subtitle"
                ></Typography>
              </div>
              <div className="container">
                <Card className="card">
                  <div className="card-area">
                    {/* <div className="line">
                      <div className="inner-line"></div>
                    </div> */}
                    {/* <img src={Contribute} alt="" /> */}
                    <Typography className="card-title" variant="h6">
                      Want to know more about us ?
                    </Typography>

                    <Typography className="card-sub-title" variant="subtitle1">
                      Get in touch right away !
                    </Typography>
                    <div className="button-group">
                      <Link to={"/connect/contact-us/"} className="sub-info">
                        <Button
                          // className="sub-info"
                          variant="contained"
                          endIcon={<OpenInNewRoundedIcon className="arrow" />}
                        >
                          {" "}
                          Contact Team{" "}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="right">
              <Accordion
                expanded={expandedPanelTwo}
                onChange={handleAccordionTwoChange}
                className="accordion first-accordion"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="icon" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="accordion-heading"
                >
                  <Typography>Why fund Velocita ?</Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-content">
                  <Typography>
                    Over the past decades, there has been substantial headway in
                    the automobile industry, automobiles have become an integral
                    part of the world’s development. They have become a
                    necessity rather than a commodity, and there is always room
                    for more growth. Stagnation in the automobile industry will
                    guarantee stagnation in every other field or industry. Your
                    support can help us create a better future where millions of
                    ingenious ideas can be turned into a magnificent reality
                    that can inspire a generation of you.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="icon" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="accordion-heading"
                >
                  <Typography>Where do the funds go ?</Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-content">
                  <Typography>
                    Our Vision is to develop a well-engineered car that will
                    provide the ultimate driving experience with top-notch
                    creativity and innovation which is cost-efficient with an
                    advanced manufacturing process and modular design. Your
                    contributed amount will be used to acquire all the necessary
                    parts and materials, undergo different manufacturing phases,
                    logistic purposes and reaserch work.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion className="accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="icon" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="accordion-heading"
                >
                  <Typography>What did we achieve last season ?</Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-content">
                  <Typography>
                    Velocita Racing comes 2nd overall in Formula Bharat 2025.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </section>

       

        <section id="faq-in-crowd" className="section-three-three-crowd">
          <div className="main-container">
            <div className="left">
              <div className="header heading">
                <Typography variant="h2" className="section-title">
                  Find the answers you need
                  {/* <span className="change-color"></span>{" "} */}
                </Typography>
                <div className="underline"></div>
                <Typography
                  variant="h5"
                  className="section-subtitle"
                ></Typography>
              </div>
              <div className="container">
                <Card className="card">
                  <div className="card-area">
                    {/* <div className="line">
                      <div className="inner-line"></div>
                    </div> */}
                    <Typography className="card-title" variant="h6">
                      Didn't find what you were looking for ?
                    </Typography>
                    <Typography className="card-sub-title" variant="subtitle1">
                      Get in touch right away !
                    </Typography>
                    <Link to={"/connect/contact-us/"} className="sub-info">
                      <Button
                        className="sub-info"
                        variant="outlined"
                        endIcon={<OpenInNewRoundedIcon className="arrow" />}
                      >
                        {" "}
                        Contact Support{" "}
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            </div>
            <div className="right">
              <Accordion
                expanded={expandedPanel}
                onChange={handleAccordionChange}
                className="accordion first-accordion"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="icon" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="accordion-heading"
                >
                  <Typography>
                    The transaction failed but the amount got deducted from the
                    bank account. What do i do ?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-content">
                  <Typography>
                    Banks usually take up to 3 business days to add money back
                    to your account. Please wait for your bank to complete the
                    reversal. Refer to the bank account statement to verify if
                    your transaction has been reversed.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              
            </div>
          </div>
          <EndsTopArrow />
        </section>

        {/* <section id="why-velocita" className="section-four-crowd">
          <div className="main-container">
            <div className="left">
              <Typography variant="h2" className="section-title">
                Every contribution
                <br /> <span className="change-color">Counts</span>
              </Typography>
              <div className="underline"></div>
              <Typography variant="h5" className="section-subtitle">
                Every little contribution you make, brings us a step closer to
                our dream vehicle.
              </Typography>

              <HashLink
                className="page-link"
                smooth
                to={"/crowdfunding/#slabs"}
              >
                <InfoBox
                  // click="no-click"
                  title="Know the Slabs"
                  info="Learn about the slabs and payment methods"
                />
              </HashLink>
            </div>
            <div className="right">
              <Typography variant="h5" className="section-title">
                Why <span className="change-color">Velocita?</span> <br />
              </Typography>
              <div className="underline-small"></div>
              <Typography variant="subtitle1" className="section-subtitle">
                Over the past decades, there has been substantial headway in the
                automobile industry, automobiles have become an integral part of
                the world’s development. They have become a necessity rather
                than a commodity, and there is always room for more growth.
                Stagnation in the automobile industry will guarantee stagnation
                in every other field or industry. Your support can help us
                create a better future where millions of ingenious ideas can be
                turned into a magnificent reality that can inspire a generation
                of youth.
                We believe in being the innovator rather than being
                the imitator which drives us to work on our ideas and make them
                a reality that is near perfect. Oursss Vision is to develop a
                well-engineered car that will provide the ultimate driving
                experience with top-notch creativity and innovation which is
                cost-efficient with an advanced manufacturing process and
                modular design.
              </Typography>
              <Button
                className="read-more"
                variant="outlined"
                endIcon={<OpenInNewRoundedIcon className="arrow" />}
              >
                {" "}
                Read More{" "}
              </Button>
            </div>
          </div>
        </section> */}

        <section id="contributor" className="section-five-crowd">
          <div className="main-container">
            <div className="left">
              <Typography variant="h2" className="section-title">
                Thanks to the
                <span className="change-color"> Contributors !</span>
              </Typography>
              <div className="underline"></div>
            </div>

          
          </div>
        </section>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="payment-dialogue"
        >
          <DialogTitle id="alert-dialog-title">
            {"Make Payment using"}
          </DialogTitle>
          <DialogContent className="content" id="alert-dialog-description">
            <div className="buttons">
              <Link to={"/crowdfunding/upi/checkout/"}>
                <Button>
                  <img className="payment-image" src={Upi} alt="" />
                </Button>
              </Link>
            </div>
            <div className="text">
              <Typography>What's the difference ?</Typography>
              <Typography variant="subtitle2">
                Paying through UPI, sends money directly to our bank account by
                which we save on transaction charges charged by the payment
                platforms
              </Typography>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
        >
          <Alert
            onClose={handleCloseAlert}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Sorry we're not accepting payments through Razorpay due to some
            issues.
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </div>
  );
};

export default Crowdfunding;
