/** @format */

import React from "react";

import { lightGrey } from "constants/colors";
import PrimaryButton from "components/PrimaryButton";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `space-between`,
    width: `100%`,
    background: lightGrey,
    height: "15vh",
    marginTop: "2em",
  },
  headerText: {
    paddingLeft: "3em",
  },
  buttonText: {
    paddingRight: "3em",
  },
}));

const CandidateCard = (props) => {
  const classes = useStyles();

  const handleSelect = () => {
    props.handleSelect(props.name);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography component="h5" variant="h5" className={classes.headerText}>
          {props.name}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttonText}>
        <PrimaryButton handleClick={handleSelect} buttonText="Select" />
      </CardActions>
    </Card>
  );
};

export default CandidateCard;
