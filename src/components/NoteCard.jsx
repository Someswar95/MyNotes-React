import * as React from "react";
import { DeleteOutlineOutlined, UpdateOutlined } from "@mui/icons-material";
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
import noteContext from "../context/note/noteContext";

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

  const context = React.useContext(noteContext);
  const { deleteNote } = context;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const classes = useStyles(note);

  return (
    <>
      {isMobile ? (
        <Card elevation={1}>
          <CardHeader
            action={
              <IconButton
                onClick={() => {
                  deleteNote(note._id);
                }}
              >
                <UpdateOutlined />
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
        <Card elevation={1}>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar}>
                {note.tag[0].toUpperCase()}
              </Avatar>
            }
            action={
              <IconButton
                onClick={() => {
                  deleteNote(note._id);
                }}
              >
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
