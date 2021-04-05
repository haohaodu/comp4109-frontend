/** @format */

import { useState } from "react";
import { brandBlack } from "constants/colors";
import { Title } from "constants/font";
import PrimaryButton from "components/PrimaryButton";
import {
  ValidatePassword,
  ValidateStudentNumber,
  ValidateLicense,
} from "./validate";

import Snackbar from "@material-ui/core/Snackbar";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import GoogleLogin from "components/GoogleLogin";
import store from "storejs";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  loginButtonWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5vh",
  },
  loginButton: {
    borderRadius: `3px`,
    fontWeight: `bold`,
    fontSize: `fontSizeNormal`,
  },
  wrapper: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`,
    height: `300px`,
    paddingLeft: `10vw`,
    paddingRight: `10vw`,
  },
}));

const LoginInfoWrapper = withStyles({
  root: {
    width: `100%`,
    marginTop: `5vh`,
    height: (props) => (props.username === "true" ? `450px` : `375px`),
  },
})(Box);

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [studentNumberError, setStudentNumberError] = useState("");
  const [license, setLicense] = useState("");
  const [licenseError, setLicenseError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [open, setOpen] = useState(false);
  const [snackBar, setSnackBar] = useState(props.snackBar);

  const handleSubmit = () => {
    let passwordValidation = ValidatePassword({ password });
    let studentNumberValidation = ValidateStudentNumber({ studentNumber });
    let licenseValidation = ValidateLicense({ license });

    setPasswordError(passwordValidation);
    setStudentNumberError(studentNumberValidation);
    setLicenseError(licenseValidation);

    return (
      licenseValidation.length === 0 &&
      studentNumberValidation.length === 0 &&
      passwordValidation.length === 0
    );
  };

  // clear errors on text fields as users type through the inputs
  const handleChange = (label) => (e) => {
    const textValue = e.target.value;
    if (label === "studentNumber") {
      if (ValidateStudentNumber({ studentNumber }).length === 0)
        setStudentNumberError("");
      setStudentNumber(textValue);
    } else if (label === "password") {
      if (ValidatePassword({ password }).length === 0) setPasswordError("");
      setPassword(textValue);
    } else if (label === "license") {
      if (ValidateLicense({ license }).length === 0) setLicenseError("");
      setLicense(textValue);
    } else if (label === "firstName") {
      setFirstName(textValue);
    } else if (label === "lastName") {
      setLastName(textValue);
    }
  };

  const handleLogin = () => {
    const condition = handleSubmit();

    if (condition) {
      const user = {
        firstName: firstName,
        lastName: lastName,
        license: license,
        studentNumber: studentNumber,
        password: password,
      };

      axios
        .post("http://localhost:5000/verify", user, {
          headers: {
            crossDomain: true,
            "Access-Control-Allow-Origin": true,
          },
        })
        .then(() => {
          setSnackBar(props.snackBar);
          setOpen(true);
          store.set("currentUser", user);
          props.onClick();
        })
        .catch((err) => {
          console.log("error: ", err);
          setSnackBar("User is unauthorized");
          setOpen(true);
        });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.loginContainer}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        message={snackBar}
      />

      <Title style={{ paddingLeft: `10vw` }} color={brandBlack}>
        {props.header}
      </Title>
      <LoginInfoWrapper username={props.showUsername.toString()}>
        <div className={classes.wrapper}>
          <TextField
            error={firstNameError.length !== 0}
            helperText={firstNameError}
            value={firstName}
            onChange={handleChange("firstName")}
            label="First Name"
          />
          <TextField
            error={lastNameError.length !== 0}
            helperText={lastNameError}
            value={lastName}
            onChange={handleChange("lastName")}
            label="Last Name"
          />
          <TextField
            error={studentNumberError.length !== 0}
            helperText={studentNumberError}
            value={studentNumber}
            onChange={handleChange("studentNumber")}
            label="Student Number"
          />
          <TextField
            error={licenseError.length !== 0}
            helperText={licenseError}
            value={license}
            onChange={handleChange("license")}
            label="Driver's License"
          />
          <TextField
            error={passwordError.length !== 0}
            helperText={passwordError}
            value={password}
            onChange={handleChange("password")}
            label="Password"
            type="password"
          />
        </div>
        <div className={classes.loginButtonWrapper}>
          {props.login ? (
            <PrimaryButton
              handleClick={handleLogin}
              buttonText={props.loginText}
            />
          ) : (
            // pass in snackbar so that google oauthentication can work display that we logged in
            <GoogleLogin />
          )}
        </div>
      </LoginInfoWrapper>
    </div>
  );
};

export default LoginForm;
