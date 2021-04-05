/** @format */

import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { fontWeightBold } from "constants/font";
import { HeaderOptions } from "constants/general";
import GoogleLogout from "components/GoogleLogout";

const useStyles = makeStyles((theme) => ({
  root: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
    paddingRight: `2vw`,
  },
  acionText: {
    fontWeight: fontWeightBold,
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
      {HeaderOptions.map((element) => {
        return element.title === "LOGOUT" ? (
          <GoogleLogout key={element.title} />
        ) : (
          <Button
            className={classes.headerButton}
            color="primary"
            onClick={props.onClick}
            key={element.route}
          >
            {element.title}
          </Button>
        );
      })}
    </div>
  );
};

export default Header;
