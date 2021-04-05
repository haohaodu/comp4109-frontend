/** @format */

import React from "react";
import { useGoogleLogout } from "react-google-login";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const clientId =
  "1021955233686-g2cksio0gofnbvvmj0top1i2mfgon0i7.apps.googleusercontent.com";

function LogoutHooks() {
  const history = useHistory();

  const onLogoutSuccess = (res) => {
    console.log("Logged out Success");
    history.push("/");
  };

  const onFailure = () => {
    console.log("Log out Failure");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <Button color="primary" onClick={signOut}>
      LOGOUT
    </Button>
  );
}

export default LogoutHooks;
