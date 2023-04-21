import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Switch,
} from "@mui/material";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { doLogout, isLoggedIn } from "../authorization/auth";
import DrawerNav from "./DrawerNav";
import themeContext from "../context/theme/themeContext";

const ElevationScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Navbar = (props) => {
  const themeObject = React.useContext(themeContext);
  const { isDarkMode, colorMode } = themeObject;
  const [login, setLogin] = React.useState();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  React.useEffect(() => {
    setLogin(isLoggedIn());
  });

  const logout = () => {
    doLogout(() => {
      setLogin(false);
      if (localStorage.getItem()) {
        window.location.reload();
      }
    });
  };

  const authItems = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Login",
      path: "/login",
    },
    {
      text: "Register",
      path: "/register",
    },
  ];

  const menuItems = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Add note",
      path: "/addNote",
    },
  ];
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            sx={{
              bgcolor: "white",
            }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                color="black"
                sx={{ flexGrow: 1 }}
              >
                <span style={{ color: "#d32f2f" }}>M</span>y N
                <span style={{ color: "#d32f2f" }}>o</span>tes
              </Typography>
              {isMobile ? (
                <DrawerNav />
              ) : (
                <>
                  {!login && (
                    <>
                      {authItems.map((item) => {
                        return (
                          <Button
                            color="error"
                            key={item.text}
                            onClick={() => navigate(item.path)}
                          >
                            {item.text}
                          </Button>
                        );
                      })}
                    </>
                  )}
                  {login && (
                    <>
                      {menuItems.map((item) => {
                        return (
                          <Button
                            color="error"
                            key={item.text}
                            onClick={() => navigate(item.path)}
                          >
                            {item.text}
                          </Button>
                        );
                      })}
                      <Button
                        color="error"
                        component={Link}
                        to="/"
                        onClick={logout}
                      >
                        Logout
                      </Button>
                      {/* <Switch defaultChecked /> */}
                      <Button color="error" onClick={colorMode.toggleColorMode}>
                        Mode
                      </Button>
                    </>
                  )}
                </>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </ElevationScroll>
    </React.Fragment>
  );
};

export default Navbar;
