import React, { useEffect } from "react";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Helmet } from "react-helmet";
import { theme } from "../../components/theme";
import Typography from "@mui/material/Typography";
import { StyledCharacter } from "../../components/styledCharacter/StyledCharacter";
import TextField from "@mui/material/TextField";

import "./style/style.scss";
import { Button } from "@mui/material";
import { AddRounded, SearchRounded } from "@mui/icons-material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputAdornment from "@mui/material/InputAdornment";
import CircularProgress from "@mui/material/CircularProgress";
import Autocomplete from "@mui/material/Autocomplete";

const SearchPage = () => {
  useEffect(() => {
    getData();
  }, []);

  const [inputValue, setinputValue] = useState([]);
  
  const [items, setItems] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const [isButton, setButton] = useState(true);

  function getClicked() {
    setButton(false);
    allData();
  }

  const [itemArray, setitemArray] = useState([]);

  const [allItems, setAllItems] = useState([]);

  const getData = async () => {
    const data = await fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1gVz9X2o7K6rjGKmdBz_exMrpDxj9htSR6-GsJwGoPrU/values/AddData?alt=json&key=AIzaSyAOhitHkJEz_XL4-eDBxaM_ndUaQjEE_8c"
    );

    const items = await data.json();
    setItems(items.values);

    setSuccess(true);
  };

  function allData() {
    let arraylength = items.length;
    let allItems = [];
    let i = 0;
    let itemName = "";
    const newAllArray = [];
    for (let index = 1; index < arraylength; index++) {
      itemName = items[index][1];
      allItems.push(itemName);
      // i++;
    }

    setAllItems(allItems);

    console.log(allItems);
  }

  const [value, setValue] = React.useState(allItems[0]);

  console.log(inputValue);

  function placeData() {
    let arraylength = items.length;
    let itemName = "";
    let itemAmount = "";
    let itemNumber = "";
    let itemStatus = "";
    let downStat = "";
    let itemArray = [];
    let count = 0;
    let i = 0;

    const newArray = [];
    newArray[0] = ["data not found", "--", "--", "--", "--"];

    for (let index = 1; index < arraylength; index++) {
      if (items[index][1] === inputValue) {
        itemName = items[index][1];
        itemNumber = items[index][3];
        itemAmount = items[index][4];
        itemStatus = items[index][5];

        console.log(itemName);
        if (itemStatus != "Successful") {
          downStat = true;
        }

        itemArray[i] = [itemName, itemNumber, itemAmount, itemStatus, downStat];
        i++;
      }
      if (itemArray != 0) {
        setitemArray(itemArray);
      } else setitemArray(newArray);
    }
  }

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
      <ThemeProvider theme={theme}>
        <section id="sec-main">
          <div className="heading">
            <Typography variant="h4">Search Item</Typography>
          </div>

          <div className="inv-form">
            {/* <TextField
              id="outlined-basic"
              label="Enter Item Name"
              variant="outlined"
              className="text-box large"
            /> */}
          </div>

          <div className="form-controls">
            {/* <Button variant="contained" startIcon={<SearchRounded />}>
              {" "}
              Search
            </Button> */}
          </div>

          <div className="data">
            {isSuccess ? (
              isButton ? (
                <div className="text-field-button">
                  <Button
                    onClick={getClicked}
                    variant="outlined"
                    disableElevation
                  >
                    Search Item
                  </Button>
                </div>
              ) : (
                <div className="text-field inv-form">
                  <Autocomplete
                    disablePortal
                    id="outlined-basic"
                    label="Item name"
                    variant="outlined"
                    className="text-box large"
                    options={allItems}
                    value={value}
                    onChange={(event, newValue) => {
                      setinputValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Enter Item Name" />
                    )}
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start"></InputAdornment>
                    //   ),
                    // }}
                  />

                  <Button
                    onClick={handleClick}
                    variant="contained"
                    disableElevation
                    className="search-button"
                  >
                    Search Item
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
                        <TableCell className="cell">Item Name</TableCell>
                        <TableCell className="cell" align="right">
                          Item Specs
                        </TableCell>
                        <TableCell className="cell" align="right">
                          Quantity
                        </TableCell>
                        <TableCell className="cell" align="right">
                          Location
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {itemArray.map((row) => (
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
        </section>
      </ThemeProvider>
    </div>
  );
};

export default SearchPage;
