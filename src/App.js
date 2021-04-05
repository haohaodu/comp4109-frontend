import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";

import { primary } from "./theme";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <MuiThemeProvider theme={primary}>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={Home} />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
