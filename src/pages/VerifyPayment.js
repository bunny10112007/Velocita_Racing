import React, { useEffect, Component } from "react";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../components/theme";
import { Button, TextField, Typography } from "@mui/material";

import "./style/crowdfunding/verifypayment.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Helmet from "react-helmet";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Link } from "react-router-dom";
import SecFooter from "../components/footer/SecFooter";
import CircularProgress from "@mui/material/CircularProgress";
import InputAdornment from "@mui/material/InputAdornment";

import { PDFDownloadLink } from "@react-pdf/renderer";
import Letter from "../components/pdf/Letter";

const VerifyPayment = () => {
  useEffect(() => {
    getData();
  }, []);

  const [inputValue, setinputValue] = useState([]);

  const [items, setItems] = useState([]);
  // const [userName, setuserName] = useState([]);
  // const [userAmount, setuserAmount] = useState([]);
  // const [userNumber, setuserNumber] = useState([]);
  // const [userStatus, setuserStatus] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const [isButton, setButton] = useState(true);

  function getClicked() {
    setButton(false);
    // getData();
  }

  const [userArray, setuserArray] = useState([]);

  const getData = async () => {
    const data = await fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/11A5yiDMBFjT8sWMBSTp0g1kaygAuDvxcY4cBQI1BblA/values/Sheet1?alt=json&key=AIzaSyAOhitHkJEz_XL4-eDBxaM_ndUaQjEE_8c"
    );

    const items = await data.json();
    setItems(items.values);

    setSuccess(true);
  };

  // console.log(userArray)

  function placeData() {
    let arraylength = items.length;
    let userName = "";
    let userAmount = "";
    let userNumber = "";
    let userStatus = "";
    let downStat = "";
    let userArray = [];
    let count = 0;
    let i = 0;
    // console.log(userName)

    const newArray = [];
    newArray[0] = ["data not found", "--", "--", "--", "--"];

    for (let index = 1; index < arraylength; index++) {
      if (items[index][2] === inputValue) {
        userName = items[index][1];
        userNumber = items[index][2];
        userAmount = items[index][3];
        userStatus = items[index][4];
        if (userStatus != "Successful") {
          downStat = true;
        }

        userArray[i] = [userName, userNumber, userAmount, userStatus, downStat];
        // setuserArray(userArray);
        // setuserName(userNumber);
        // setuserName(userAmount);
        // setuserName(userStatus);
        i++;
      }

      // else{
      //   userArray[i] = ['data not found', '--' , '--', '--', '--']
      //   console.log('im here')
      // }
      if (userArray != 0) {
        setuserArray(userArray);
      } else setuserArray(newArray);
    }
  }

  console.log(userArray);

  function handleClick() {
    setLoading(true);
    setClicked(true);
    placeData();
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Payment Status | Velocita Racing</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <section id="section-one-verify">
          <Link to={"/crowdfunding/upi/checkout/"} className="sub-info">
            <Button variant="outlined">
              <ArrowBackRoundedIcon className="icon" />
            </Button>
          </Link>
          <div className="main-container">
            <div className="left">
              <Typography variant="h3" className="section-title">
                Verify Payment
              </Typography>
              <div className="underline"></div>
              <p className="section-info">
                Enter Mobile number / Unique Reference ID{" "}
              </p>

              {isSuccess ? (
                isButton ? (
                  <div className="text-field-button">
                    <Button
                      onClick={getClicked}
                      variant="outlined"
                      disableElevation
                    >
                      Verify with Phone Number
                    </Button>
                  </div>
                ) : (
                  <div className="text-field">
                    <TextField
                      id="outlined-basic"
                      label="Mobile Number"
                      variant="outlined"
                      inputMode="numeric"
                      onChange={(event) => {
                        setinputValue(event.target.value);
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">+91</InputAdornment>
                        ),
                      }}
                    />
                    <Button
                      onClick={handleClick}
                      variant="contained"
                      disableElevation
                    >
                      Go
                    </Button>
                  </div>
                )
              ) : (
                <div className="text-field-button">
                  <CircularProgress />
                </div>
              )}
            </div>
            <div className="right">
              {isClicked ? (
                isLoading ? (
                  <CircularProgress className="loader" />
                ) : (
                  <TableContainer className="table-container" component={Paper}>
                    <Table className="table" aria-label="simple table">
                      <TableHead className="table-head">
                        <TableRow className="table-row">
                          <TableCell className="cell">Name</TableCell>
                          <TableCell className="cell" align="right">
                            Mobile Number
                          </TableCell>
                          <TableCell className="cell" align="right">
                            Amount INR
                          </TableCell>
                          <TableCell className="cell" align="right">
                            Status
                          </TableCell>
                          <TableCell className="cell" align="right">
                            Download
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {userArray.map((row) => (
                          <TableRow
                            className="table-row"
                            key={row[2] + row[1]}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row[0]}
                            </TableCell>
                            <TableCell align="right">{row[1]}</TableCell>
                            <TableCell align="right">{row[2]}</TableCell>
                            <TableCell align="right">{row[3]}</TableCell>
                            <TableCell align="right">
                              <Button variant="outlined" disabled={row[4]}>
                                <PDFDownloadLink
                                  document={
                                    <Letter
                                      name={row[0]}
                                      amt={row[2]}
                                      status={row[3]}
                                    />
                                  }
                                  fileName="letter"
                                >
                                  {({ loading }) =>
                                    loading ? (
                                      <Button variant="text">Loading Document...</Button>
                                    ) : (
                                      <Button variant="text">Download</Button>
                                    )
                                  }
                                </PDFDownloadLink>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )
              ) : (
                <div className="right-container">
                  <Typography variant="subtitle2">
                    [ data will appear here ]
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </section>
      </ThemeProvider>
      <SecFooter />
    </div>
  );
};

export default VerifyPayment;
