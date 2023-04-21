import * as React from "react";
import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

export const Theme = () => {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#fafafa",
          },
          secondary: purple,
        },
        typography: {
          button: { textTransform: "none" },
          fontFamily: "Quicksand",
          fontWeightLight: 400,
          fontWeightRegular: 500,
          fontWeightMedium: 600,
          fontWeightBold: 700,
        },
      }),
    []
  );

  return [theme];
};
