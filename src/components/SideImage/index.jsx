/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Title } from "constants/font";
import { Pink50 } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    height: `100vh`,
    width: `42%`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    position: `relative`,
    backgroundColor: `${Pink50}`,
    [theme.breakpoints.down("md")]: {
      display: `none`,
    },
  },
  headerText: {
    width: `60%`,
    textAlign: `center`,
    marginTop: `1em`,
  },
  textWrapper: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    height: `20vh`,
    marginBottom: `15vh`,
    width: `20vw`,
    zIndex: 2,
  },
  photo: {
    width: `120px`,
    height: `120px`,
  },
}));

const SideImageContainer = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.textWrapper}>
        <img
          src={props.primaryImage}
          alt={"voting icon"}
          className={classes.photo}
        />
        <div className={classes.headerText}>
          <Title>{props.marketingText}</Title>
        </div>
      </div>
    </div>
  );
};

export default SideImageContainer;
