/** @format */

import React from "react";
import Icon from "assets/voteIcon.png";
import SideImage from "components/SideImage";
import LoginHeader from "components/LoginHeader";
import LoginForm from "components/LoginForm";
import { Page } from "constants/general";

import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();

  const handleCreateAccount = () => {
    console.log("go to sign up page");
  };

  const handleNavLogin = (e) => {
    history.push("/home");
  };

  return (
    <Page>
      <SideImage primaryImage={Icon} marketingText={"SimplyVote"} />
      <LoginHeader
        fadedText="DON'T HAVE AN ACCOUNT?"
        actionText="CREATE ACCOUNT"
        onClick={handleCreateAccount}
      />
      <LoginForm
        header="Welcome back!"
        showConfirmPassword={false}
        showUsername={false}
        onClick={handleNavLogin}
        loginText="Login"
        snackBar="Login Successful."
      />
    </Page>
  );
};

export default Login;
