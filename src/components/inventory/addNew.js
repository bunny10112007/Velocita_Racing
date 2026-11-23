import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Helmet } from "react-helmet";
import { theme } from "../../components/theme";
import Typography from "@mui/material/Typography";
import { StyledCharacter } from "../../components/styledCharacter/StyledCharacter";

import TextField from "@mui/material/TextField";

import "./style/style.scss";
import { Button } from "@mui/material";
import { AddRounded } from "@mui/icons-material";
import FormControl from "@mui/material/FormControl";
import { Form, useForm } from "../form/useForm";
import Input from "../form/controls/Input";
import Select from "../form/controls/Select";

const initialFValues = {
  itemName: "",
  itemId: "",
  quantity: "",
  location: "",
  admin: "",
  specs: "",
};

const Data = () => [
  { id: 1, title: "Satvik" },
  { id: 2, title: "Vijay" },
  { id: 3, title: "Admin" },
  { id: 3, title: "Other" },
];

const AddNewPage = () => {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("itemName" in fieldValues)
      // temp.itemName =
      //   fieldValues.itemName && /$^|.+@.+..+/.test(fieldValues.itemName)
      //     ? ""
      //     : "itemName is not valid.";
      setErrors({
        ...temp,
      });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const Uid = generateUid(values.itemName);

  function generateUid(getItem) {
    const newItem = getItem.toString().replace(",", "").replace(".", "");
    const newId = values.itemName.toString().replace(" ", "");

    // console.log(newName)
    // .log(newAmount)

    const uniqueId = "VRIN" + newId;
    const newUniqueId = uniqueId.substring(0, 16);
    // const newUniqueIdRep = newUniqueIdRep.toString().replace('_', '')
    return newUniqueId.toUpperCase().replaceAll("_", "");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(validate());
    // console.log(values.itemName)

    if (validate()) {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwnl05elr7cBz2SRjBN_7ZQ7SUfeR9hsAJuvJ4dFSYxbWo9NnA5FXl7VBPrIbuWXJqZ/exec";
      const form = document.forms["google-sheet-add-new"];

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => alert(""))
        .catch((error) => console.error("Error!", error.message));

      resetForm();
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <section id="sec-main">
          <div className="heading">
            <Typography variant="h4">Add New</Typography>
          </div>

          <div className="inv-container">
            <Form
              method="post"
              name="google-sheet-add-new"
              onSubmit={handleSubmit}
              className="form-main"
            >
              <FormControl className="inv-form">
                <Input
                  id="outlined-basic"
                  label="Item Name"
                  variant="outlined"
                  className="text-box large"
                  name="itemName"
                  value={values.itemName}
                  onChange={handleInputChange}
                  error={errors.itemName}
                />

                <Input
                  id="outlined-basic"
                  label="Item ID"
                  variant="outlined"
                  className="text-box large"
                  name="itemId"
                  value={Uid}
                  // onChange={handleInputChange}
                  // error={errors.itemId}
                />

                <Input
                  id="outlined-basic"
                  label="Specifications"
                  variant="outlined"
                  className="text-box large"
                  name="specs"
                  value={values.specs}
                  onChange={handleInputChange}
                  error={errors.specs}
                />
                <Input
                  id="outlined-basic"
                  label="Quantity"
                  variant="outlined"
                  className="text-box small"
                  name="quantity"
                  value={values.quantity}
                  onChange={handleInputChange}
                  error={errors.quantity}
                />
                <Input
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                  name="location"
                  className="text-box large"
                  value={values.location}
                  onChange={handleInputChange}
                  error={errors.location}
                />
                <Select
                  className="text-box large"
                  id="outlined-basic"
                  name="admin"
                  label="Added BY"
                  variant="outlined"
                  margin="normal"
                  value={values.admin}
                  onChange={handleInputChange}
                  error={errors.admin}
                  options={Data()}
                />

                <div className="form-controls">
                  <Button
                    name="submit"
                    type="submit"
                    variant="contained"
                    startIcon={<AddRounded />}
                  >
                    {" "}
                    Add Item
                  </Button>
                </div>
              </FormControl>
            </Form>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default AddNewPage;
