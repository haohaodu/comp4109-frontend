/** @format */

import { useState } from "react";
import { brandBlack } from "constants/colors";
import { Title } from "constants/font";
import PrimaryButton from "components/PrimaryButton";
import { ValidateEmail, ValidatePassword } from "./validate";

import Snackbar from "@material-ui/core/Snackbar";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

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
    height: `150px`,
    paddingLeft: `10vw`,
    paddingRight: `10vw`,
  },
}));

const LoginInfoWrapper = withStyles({
  root: {
    width: `100%`,
    marginTop: `5vh`,
    height: (props) => (props.username === "true" ? `450px` : `275px`),
  },
})(Box);

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [open, setOpen] = useState(false);
  const [snackBar, setSnackBar] = useState(props.snackBar);

  const handleSubmit = () => {
    const emailValidation = ValidateEmail({ email });
    let passwordValidation = ValidatePassword({ password });

    setPasswordError(passwordValidation);
    setEmailError(emailValidation);

    return emailValidation.length === 0 && passwordValidation.length === 0;
  };

  // clear errors on text fields as users type through the inputs
  const handleChange = (label) => (e) => {
    const textValue = e.target.value;
    if (label === "email") {
      if (ValidateEmail({ email }).length === 0) setEmailError("");
      setEmail(textValue);
    } else if (label === "password") {
      if (ValidatePassword({ password }).length === 0) setPasswordError("");
      setPassword(textValue);
    }
  };

  const handleLogin = () => {
    const condition = handleSubmit();

    if (condition) {
      setSnackBar(props.snackBar);
      setOpen(true);
      setTimeout(() => {
        props.onClick();
      }, 2000);
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
            error={emailError.length !== 0}
            helperText={emailError}
            value={email}
            onChange={handleChange("email")}
            label="E-mail address"
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
          <PrimaryButton
            handleClick={handleLogin}
            buttonText={props.loginText}
          />
        </div>
      </LoginInfoWrapper>
    </div>
  );
};

export default LoginForm;
