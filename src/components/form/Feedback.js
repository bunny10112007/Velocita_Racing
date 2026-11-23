import React, { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import { Button, TextField } from "@mui/material";
import Input from "./controls/Input";
import TextArea from "./controls/TextArea";
import ControlledInput from "./controls/ControlledInput";
import Select from "./controls/Select";
import AutocompleteInput from "./controls/Autocomplete";
import RadioGroup from "./controls/Radio";
import "./style/feedback.scss";
import { Form, useForm } from "./useForm";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import FormSuccess from "./FormSuccess";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { CodeTwoTone } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";

import GPay from "../../assets/Home/googlepay.svg";
import PhonePe from "../../assets/Home/phonepe.svg";
import AmazonPay from "../../assets/Home/amazonpay.svg";
import Paytm from "../../assets/Home/paytm.svg";

import { QRCode } from "react-qr-svg";
import { Link } from "react-router-dom";

const steps = ["Details", "Slab", "Pay", "Finish"];

const address = () => [
  {
    id: 1,
    title: "First address",
  },
  {
    id: 2,
    title: "Second address",
  },
];

const Names = () => [
  { id: 1, title: "Satvik S", role: "Captain" },
  { id: 2, title: "Sandesh" },
  { id: 3, title: "Shreyas SR" },
  { id: 4, title: "Soumyadeep" },
  { id: 5, title: "Vachan" },
  { id: 6, title: "Abdul" },
  { id: 7, title: "Amar" },
  { id: 8, title: "Keertith" },
  { id: 9, title: "Karthik Rakesh" },
  { id: 10, title: "Karthik Gowda" },
  { id: 11, title: "Hari Abhijith" },
  { id: 12, title: "Kishore" },
  { id: 13, title: "Tejas" },
  { id: 14, title: "Pranjal" },
  { id: 15, title: "Saikrishna P" },
  { id: 16, title: "Subhajji Suhas" },
  { id: 17, title: "Palak" },
  { id: 18, title: "Vijay Adithya" },
  { id: 19, title: "Mohammad Faizaan" },
  { id: 20, title: "Deepu" },
  { id: 21, title: "Chaitra" },
  { id: 22, title: "Adarsh Shanbhag" },
  { id: 23, title: "Anuj" },
  { id: 24, title: "Atharva" },
  { id: 25, title: "Chidananda" },
  { id: 26, title: "Sharadhi" },
  { id: 27, title: "B Kiran" },
  { id: 28, title: "Vinodkumar" },
];

const Roles = () => [
  { id: 1, title: "Team Captain / CTO / CFO / Manager" },
  { id: 2, title: "Subsysteam Lead" },
  { id: 3, title: "Subsystem Engineer" },
  { id: 4, title: "Technical Application Engineers" },
  { id: 5, title: "Business Plan / Sponsorship" },
  { id: 5, title: "Creative Team / Non Tech" },
];

const Events = () => [{ id: 1, title: "Mock Quiz 1" }];

const qOne = [
  {
    id: "Difficult",
    title: "Very difficult",
  },
  {
    id: "Moderate",
    title: "Moderate",
  },
  {
    id: "Easy",
    title: "Easy",
  },
];

const qTwo = [
  {
    id: "All of them",
    title: "All of them",
  },
  {
    id: "About half of them",
    title: "About half of them",
  },
  {
    id: "I need to revise",
    title: "I need to revise",
  },
];

const qThree = [
  {
    id: "I faced difficulty in understanding the questions",
    title: "I faced difficulty in understanding the questions",
  },
  {
    id: "I understood most of the questions",
    title: "I understood most of the questions",
  },
  {
    id: "I dont understand these",
    title: "I dont understand these",
  },
  {
    id: "I need to revise",
    title: "I need to revise",
  },
];

const qFour = [
  {
    id: "I am confident with 75% + of the rulebook.",
    title: "I am confident with 75% + of the rulebook.",
  },
  {
    id: "I am confident with 50% + of the rulebook.",
    title: "I am confident with 50% + of the rulebook.",
  },
  {
    id: "I am confident with 20% + of the rulebook.",
    title: "I am confident with 20% + of the rulebook.",
  },
  {
    id: "I just started",
    title: "I just started",
  },
];

const qFive = [
  {
    id: "Score 8+",
    title: "Score 8+",
  },
  {
    id: "Score 12+",
    title: "Score 12+",
  },
  {
    id: "Score 15",
    title: "Score 15",
  },
];

const qSix = [
  {
    id: "I had fun",
    title: "I had fun",
  },
  {
    id: "It was boring",
    title: "It was boring",
  },
  {
    id: "Need some entertainment",
    title: "Need some entertainment",
  },
  {
    id: "No Opinion",
    title: "No Opinion",
  },
];

const qSeven = [
  {
    id: "Excited for next event",
    title: "Excited for next event",
  },
  {
    id: "I have no opinion",
    title: "I have no opinion",
  },
  {
    id: "Dying to start working",
    title: "Dying to start working",
  },
];


const radioItems = [
  {
    id: "Yes",
    title: "Yes",
  },
  {
    id: "No",
    title: "No",
  },
];

const initialFValues = {
  name: "",
  event: "",
  email: "",
  address: "",
  pincode: "",
  mobile: "",
  state: "",
  city: "",
  name: "",
  role: "",
  qOne: "",
  qTwoc: "",
  qThree: "",
  qFour: "",
  qFive: "",
  qSix: "",
  qSeven: "",
  success: "Yes",
};

export default function Feedback() {
  // const handlePin = (props) => {
  // fetchPinCode(props);
  // }
  // let newpin = '560001'

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [submitted, setSubmitted] = React.useState(false);
  const [back, setback] = React.useState(false);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (validate()) {
      let newSkipped = skipped;

      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleNextNew = () => {
    // if(validate()){\
    let newSkipped = skipped;

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    // }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    resetForm();
    setback(false);
    setSubmitted(false);
  };

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
    if ("event" in fieldValues)
      temp.event = fieldValues.event ? "" : "This field is required.";
    if ("role" in fieldValues)
      temp.role = fieldValues.role ? "" : "Enter valid amount";

    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  function reRender() {
    setSuccess(false);
  }

  //   values.role = getValue(values.name);
  //   console.log(values.role);

  const [textdisabled, settextdisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(validate());

    // if (validate()) {
    setLoading(true);
    setback(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbx0o7dG9-j_h7ia-Te3yfIY7vlQ6rxONIwVpKEYP2tztfIlotVL2dvZvcaYs33DW3z4-g/exec";
    const form = document.forms["feedback-form"];

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => alert("Thank You for your feedback."))
      .then((response) => setLoading(false))
      .then((response) => setSuccess(true))
      .then((response) => setSubmitted(true))
      .catch((error) => console.error("Error!", error.message));

    resetForm();
    // }
  };

  return (
    <div className="feedback-form">
      {success ? (
        <FormSuccess functionName={reRender} />
      ) : loading ? (
        <CircularProgress />
      ) : (
        <div className="container">
          <Form
            method="post"
            name="feedback-form"
            onSubmit={handleSubmit}
            className="payment-form"
          >
            <FormControl className="form-control">
              <Select
                className="text-field"
                id="outlined-basic-one"
                name="event"
                label="Event"
                variant="outlined"
                margin="normal"
                onChange={handleInputChange}
                error={errors.event}
                options={Events()}
                value={values.event}
              />

              <Select
                className="text-field"
                id="outlined-basic"
                name="name"
                label="Name"
                variant="outlined"
                margin="normal"
                onChange={handleInputChange}
                error={errors.name}
                options={Names()}
                value={values.name}
              />

              <Select
                className="text-field"
                id="outlined-basic-one"
                name="role"
                label="Role"
                variant="outlined"
                margin="normal"
                onChange={handleInputChange}
                error={errors.role}
                options={Roles()}
                value={values.role}
              />

              <div className="questions-container">
                <div className="questions">
                  <Typography className="question-text" variant="h6">
                    1. Question difficulty level
                  </Typography>
                  <RadioGroup
                    name="qOne"
                    label=""
                    value={values.qOne}
                    onChange={handleInputChange}
                    items={qOne}
                  />
                </div>

                <div className="questions">
                  <Typography className="question-text" variant="h6">
                    2. I could answer
                  </Typography>
                  <RadioGroup
                    name="qTwo"
                    label=""
                    value={values.qTwo}
                    onChange={handleInputChange}
                    items={qTwo}
                  />
                </div>

                <div className="questions">
                  <Typography className="question-text" variant="h6">
                    3. Understanding
                  </Typography>
                  <RadioGroup
                    name="qThree"
                    label=""
                    value={values.qThree}
                    onChange={handleInputChange}
                    items={qThree}
                  />
                </div>

                <div className="questions">
                  <Typography className="question-text" variant="h6">
                    4. Rulebook
                  </Typography>
                  <RadioGroup
                    name="qFour"
                    label=""
                    value={values.qFour}
                    onChange={handleInputChange}
                    items={qFour}
                  />
                </div>

                <div className="questions">
                  <Typography className="question-text" variant="h6">
                    5. Next Target
                  </Typography>
                  <RadioGroup
                    name="qFive"
                    label=""
                    value={values.qFive}
                    onChange={handleInputChange}
                    items={qFive}
                  />
                </div>

                <div className="questions">
                  <Typography className="question-text" variant="h6">
                    6. Today's session
                  </Typography>
                  <RadioGroup
                    name="qSix"
                    label=""
                    value={values.qSix}
                    onChange={handleInputChange}
                    items={qSix}
                  />
                </div>

                <div className="questions">
                  <Typography className="question-text" variant="h6">
                    7. I'm
                  </Typography>
                  <RadioGroup
                    name="qSeven"
                    label=""
                    value={values.qSeven}
                    onChange={handleInputChange}
                    items={qSeven}
                  />
                </div>
              </div>

              <div className="buttons">
                <Button
                  variant="contained"
                  size="large"
                  name="submit"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </FormControl>
          </Form>
        </div>
      )}
    </div>
  );
}
