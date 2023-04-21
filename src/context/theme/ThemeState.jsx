import * as React from "react";
import ThemeContext from "./themeContext";
import { createTheme } from "@mui/material";

const ThemeState = (props) => {
  const [isDarkMode, setIsDarkMode] = React.useState("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setIsDarkMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ThemeContext.Provider value={{ isDarkMode, colorMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
