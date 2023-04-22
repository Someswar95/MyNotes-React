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
  Avatar,
} from "@mui/material";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import NavbarDrawer from "./NavbarDrawer";
import { doLogout, isLoggedIn } from "../authorization/auth";
import { navbarStyle } from "../hooks/Styling/useStyle";

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
  const [login, setLogin] = React.useState();
  const navigate = useNavigate();
  const classes = navbarStyle();
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
      text: "Add note",
      path: "/addNote",
    },
  ];
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar>
            <Toolbar>
              <Avatar
                className={classes.avatar}
                alt="brand-icon"
                src="/notebook_icon.png"
                component={Link}
                to="/"
              />
              <Typography
                className={classes.title}
                color="primary.dark"
                variant="h6"
              >
                My Notes
              </Typography>
              {isMobile ? (
                <NavbarDrawer />
              ) : (
                <>
                  {!login && (
                    <>
                      {authItems.map((item) => {
                        return (
                          <Button
                            color="secondary"
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
                            color="secondary"
                            key={item.text}
                            onClick={() => navigate(item.path)}
                          >
                            {item.text}
                          </Button>
                        );
                      })}
                      <Button
                        color="secondary"
                        component={Link}
                        to="/"
                        onClick={logout}
                      >
                        Logout
                      </Button>
                      <Button color="secondary">Mode</Button>
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
