/** @format */

import React from "react";
import Icon from "assets/voteIcon.png";
import SideImage from "components/SideImage";
import LoginHeader from "components/LoginHeader";
import LoginForm from "components/LoginForm";
import { Page } from "constants/general";
import GoogleCreate from "components/GoogleLogin";

import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/");
    GoogleCreate();
  };

  const handleCreate = (e) => {
    history.push("/home");
  };

  return (
    <Page>
      <SideImage primaryImage={Icon} marketingText={"SimplyVote"} />
      <LoginHeader
        fadedText="ALREADY HAVE ONE?"
        actionText="LOGIN TO YOUR ACCOUNT"
        onClick={handleLogin}
      />
      <LoginForm
        header="Welcome back!"
        showConfirmPassword={false}
        showUsername={false}
        onClick={handleCreate}
        loginText="Login"
        snackBar="Login Successful."
        login={false}
      />
    </Page>
  );
};

export default Login;
