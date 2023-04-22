import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { doLogout, isLoggedIn } from "../authorization/auth";
import { navDrawerStyles } from "../hooks/Styling/useStyle";

const NavbarDrawer = () => {
  const classes = navDrawerStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const navigate = useNavigate();
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

  const logout = () => {
    doLogout(() => {
      if (localStorage.getItem()) {
        window.location.reload();
      }
    });
  };

  return (
    <>
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          open={openDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={() => setOpenDrawer(false)}
        >
          {!isLoggedIn() ? (
            <List>
              {authItems.map((item) => {
                return (
                  <ListItem
                    button
                    onClick={
                      (() => setOpenDrawer(false), () => navigate(item.path))
                    }
                    key={item.text}
                  >
                    <ListItemText primary={item.text} />
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <List>
              {menuItems.map((item) => {
                return (
                  <ListItem
                    button
                    onClick={
                      (() => setOpenDrawer(false), () => navigate(item.path))
                    }
                    key={item.text}
                  >
                    <ListItemText primary={item.text} />
                  </ListItem>
                );
              })}
              <ListItem
                button
                onClick={(() => setOpenDrawer(false), logout)}
                component={Link}
                to="/"
              >
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          )}
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon />
        </IconButton>
      </div>
    </>
  );
};

export default NavbarDrawer;
