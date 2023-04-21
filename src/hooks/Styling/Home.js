import { makeStyles } from "@mui/styles";

export const homeStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  image: {
    width: "100%",
    maxWidth: "100%",
  },
}));
