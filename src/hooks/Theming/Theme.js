import * as React from "react";
import { createTheme } from "@mui/material";

export const Theme = () => {
  const theme = React.useMemo(
    () =>
      createTheme({
        components: {
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: "#F6F6F6",
              },
            },
          },
        },
        palette: {
          primary: {
            main: "#9FD02E",
          },
          secondary: {
            main: "#7B7D7D",
            dark: "#222222",
          },
        },
        typography: {
          button: { textTransform: "none", textDecoration: "none" },
          h1: { fontWeight: 700 },
          fontFamily: "sans-serif",
          fontWeightLight: 800,
          fontWeightRegular: 500,
          fontWeightMedium: 600,
          fontWeightBold: 700,
        },
      }),
    []
  );

  console.log(theme);

  return [theme];
};
