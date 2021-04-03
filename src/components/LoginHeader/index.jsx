/** @format */

import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { brandGrey } from "constants/colors";
import { fontWeightBold } from "constants/font";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    right: "0",
    top: "0",
    marginRight: "8em",
    marginTop: "2em",
    width: "25vw",
    [theme.breakpoints.down("md")]: {
      width: "50vw",
    },
  },
  acionText: {
    fontWeight: fontWeightBold,
  },
  fadedText: {
    color: brandGrey,
  },
  headerButton: {
    fontWeight: "bold",
    fontSize: "14px",
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.fadedText}>{props.fadedText}</div>
      <Button
        className={classes.headerButton}
        color="primary"
        onClick={props.onClick}
      >
        {props.actionText}
      </Button>
    </div>
  );
};

export default Header;
