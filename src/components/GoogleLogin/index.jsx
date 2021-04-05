/** @format */

import React from "react";
import { useGoogleLogin } from "react-google-login";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";
import { useHistory } from "react-router-dom";

const refreshTokenSetup = (res) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    localStorage.setItem("authToken", newAuthRes.id_token);
    setTimeout(refreshToken, refreshTiming);
  };
  setTimeout(refreshToken, refreshTiming);
};

const clientId =
  "1021955233686-g2cksio0gofnbvvmj0top1i2mfgon0i7.apps.googleusercontent.com";

function LoginHooks() {
  const history = useHistory();
  const onSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    refreshTokenSetup(res);
    history.push("/home");
  };

  const onFailure = (res) => {
    console.log("Login failed: :", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <Button
      variant="outlined"
      color="primary"
      size="large"
      startIcon={<EmailIcon />}
      onClick={signIn}
    >
      Sign in with Google
    </Button>
  );
}

export default LoginHooks;
