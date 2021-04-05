/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  loginButton: {
    borderRadius: `3px`,
    fontWeight: `bold`,
    fontSize: `fontSizeNormal`,
  },
}));
const PrimaryButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      onClick={props.handleClick}
      className={classes.loginButton}
    >
      {props.buttonText}
    </Button>
  );
};

export default PrimaryButton;
