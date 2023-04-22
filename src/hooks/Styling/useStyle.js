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
    marginTop: "100px",
  },
  avatar: {
    marginLeft: "80vh",
  },
  subHeader: {
    paddingLeft: "69vh",
    paddingTop: "5vh",
  },
  layoutPaper: {
    display: "flex",
    flexWrap: "wrap",
    "& > :not(style)": {
      m: 1,
      width: 300,
      height: 250,
      backgroundColor: grey[50],
      borderColor: "red",
      borderRadius: "5px",
    },
    marginTop: "3vh",
    marginLeft: "61vh",
  },
  innerPaper: {
    margin: "18px 0 0 15px",
  },
  textHeader: {
    color: "#262626",
  },
  input: {
    display: "block",
    width: "92%",
    height: "20px",
    margin: "8px 0 0 0",
    backgroundColor: "white",
    borderRadius: "5px",
    borderColor: "#e6e6e6",
    "&:hover": {
      borderColor: "red",
    },
  },
});

export const errorPageStyles = makeStyles({
  grid_left: {
    marginTop: "200px",
    marginLeft: "80px",
  },
  grid_right: {
    marginTop: "70px",
    marginLeft: "80px",
  },
  md_1: {
    marginTop: "20px",
  },
  avatar: {
    width: "100%!important",
    height: "100%!important",
  },
});
