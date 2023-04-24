import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

export const navbarStyle = makeStyles(() => ({
  title: {
    flexGrow: 1,
    textDecoration: "none",
  },
  avatar: {
    padding: "5px",
    marginRight: "15px",
  },
}));

export const navDrawerStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export const noteStyles = makeStyles({
  root: {
    marginTop: "100px",
  },
});

export const homeStyles = makeStyles({
  root: {
    marginTop: "110px",
    maxWidth: "100%",
  },
});

export const loginStyles = makeStyles({
  root: {
    marginTop: "150px",
  },
});

export const signOutStyles = makeStyles({
  root: {
    marginTop: "70px",
  },
});

export const errorPageStyles = makeStyles({
  root: {
    marginTop: "80px",
  },
  grid_left: {
    marginTop: "140px",
    marginLeft: "80px",
  },
  grid_right: {
    marginLeft: "80px",
  },
  avatar: {
    width: "100%!important",
    height: "100%!important",
  },
});
