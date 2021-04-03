/** @format */

import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

export const fontWeightBold = "600";

export const Title = withStyles({
  root: {
    fontSize: `34px`,
    fontWeight: fontWeightBold,
    color: `black`,
  },
})(Box);

export const SubTitle = withStyles({
  root: {
    fontSize: `24px`,
    fontWeight: fontWeightBold,
    color: `black`,
    marginBottom: `1em`,
  },
})(Box);
