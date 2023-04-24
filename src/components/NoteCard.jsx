import * as React from "react";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blue, yellow } from "@mui/material/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.tag === "personal") {
        return blue[500];
      }
      return yellow[700];
    },
  },
});

const NoteCard = (props) => {
  const { note } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const classes = useStyles(note);
  return (
    <>
      {isMobile ? (
        <Card elevation={1} className={classes.test}>
          <CardHeader
            action={
              <IconButton onClick={() => console.log("kkk")}>
                <DeleteOutlineOutlined />
              </IconButton>
            }
            title={note.title}
            subheader={note.tag}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              {note.description}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Card elevation={1} className={classes.test}>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar}>
                {note.tag[0].toUpperCase()}
              </Avatar>
            }
            action={
              <IconButton onClick={() => console.log("kkk")}>
                <DeleteOutlineOutlined />
              </IconButton>
            }
            title={note.title}
            subheader={note.tag}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              {note.description}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default NoteCard;
