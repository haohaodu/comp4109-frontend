/** @format */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import crypto from "crypto";

import PrimaryButton from "components/PrimaryButton";
import { Page, Candidates } from "constants/general";
import Logo from "components/Logo";
import CandidateCard from "components/CandidateCard";
import MainHeader from "components/MainHeader";
import { SubTitle } from "constants/font";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    paddingTop: "3vh",
    top: "0",
  },
  candidateWrapper: {
    height: "60vh",
    overflow: "scroll",
    width: "70vw",
  },
  voteWrapper: {
    marginTop: "5vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const [candidate, setCandidate] = useState("");

  const handleVote = () => {
    const hash = crypto
      .createHash("sha1")
      .update(Math.random().toString() + candidate)
      .digest("hex");

    const voteData = {
      voter_addr: hash,
      candidate: candidate,
    };

    axios
      .post("http://localhost:5000/transactions/new", voteData, {
        headers: {
          crossDomain: true,
          "Access-Control-Allow-Origin": true,
        },
      })
      .then((res) => console.log("success: ", res))
      .catch((e) => console.log("error: ", e));
  };

  return (
    <Page>
      <div className={classes.header}>
        <Logo />
        <MainHeader />
      </div>
      <div className={classes.homeWrapper}>
        <div className={classes.candidateWrapper}>
          {Candidates.map((candidate) => (
            <CandidateCard
              key={candidate.name}
              name={candidate.name}
              handleSelect={setCandidate}
            />
          ))}
        </div>
        <div className={classes.voteWrapper}>
          <SubTitle>Selected Candidate: {candidate}</SubTitle>
          <PrimaryButton handleClick={handleVote} buttonText="Submit Vote" />
        </div>
      </div>
    </Page>
  );
};

export default Home;
