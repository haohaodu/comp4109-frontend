/** @format */

import { createMuiTheme } from "@material-ui/core/styles";
import { Purple50 } from "./constants/colors";

export const primary = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: { 500: Purple50 },
  },
  overrides: {
    MuiButton: {
      text: {
        padding: "15px",
        paddingLeft: "50px",
        paddingRight: "50px",
        borderRadius: "5px",
      },
    },
  },
});
