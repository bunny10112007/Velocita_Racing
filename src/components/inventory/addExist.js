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
import { AddRounded } from "@mui/icons-material";

import Autocomplete from "@mui/material/Autocomplete";

const AddExtPage = () => {
  useEffect(() => {
    getData();
  }, []);

  const [inputValue, setinputValue] = useState([]);
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

  const [itemArray, setitemArray] = useState([]);

  const getData = async () => {
    const data = await fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1gVz9X2o7K6rjGKmdBz_exMrpDxj9htSR6-GsJwGoPrU/values/AddData?alt=json&key=AIzaSyAOhitHkJEz_XL4-eDBxaM_ndUaQjEE_8c"
    );

    const items = await data.json();
    setItems(items.values);
  };

  function getAllData() {
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

  }


  const [value, setValue] = React.useState(allItems[0]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <section id="sec-main">
          <div className="heading">
            <Typography variant="h4">Add Existing</Typography>
          </div>

          <div className="inv-form">
            <Autocomplete
              disablePortal
              id="outlined-basic"
              label="Item name"
              variant="outlined"
              className="text-box large"
              options={allItems}
              onFocus={getAllData}
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
            <TextField
              id="outlined-basic"
              label="Item ID"
              variant="outlined"
              className="text-box large"
            />
            <TextField
              id="outlined-basic"
              label="Quantity"
              variant="outlined"
              className="text-box small"
            />
            <TextField
              id="outlined-basic"
              label="Location"
              variant="outlined"
              className="text-box large"
            />
            <TextField
              id="outlined-basic"
              label="Added By"
              variant="outlined"
              className="text-box large"
            />
          </div>

          <div className="form-controls">
            <Button variant="contained" startIcon={<AddRounded />}>
              {" "}
              Add Item
            </Button>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default AddExtPage;
