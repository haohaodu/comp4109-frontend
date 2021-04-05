/** @format */

import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

export const Page = withStyles({
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
})(Box);

export const Candidates = [
  { name: "Ash Ketchum" },
  { name: "HaoHao Du" },
  { name: "Alexa Liaskovski" },
  { name: "Justin Tran" },
  { name: "Alex 4109" },
];

export const HeaderOptions = [
  {
    title: "HOME",
    route: "home",
  },
  {
    title: "SETTINGS",
    route: "settings",
  },
  {
    title: "LOGOUT",
    route: "logout",
  },
];
