/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Title } from "constants/font";
import Icon from "assets/voteIcon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
    paddingLeft: "2vw",
  },
  headerText: {
    width: `60%`,
    textAlign: `center`,
  },
  photo: {
    width: `45px`,
    height: `45px`,
  },
}));

const SideImageContainer = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={Icon} alt={"voting icon"} className={classes.photo} />
      <div className={classes.headerText}>
        <Title>SimplyVote</Title>
      </div>
    </div>
  );
};

export default SideImageContainer;
