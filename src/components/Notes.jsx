import * as React from "react";
import noteContext from "../context/note/noteContext";
import NoteCard from "./NoteCard";
import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import { noteStyles } from "../hooks/Styling/useStyle";

const Notes = () => {
  const context = React.useContext(noteContext);
  const { notes, getNotes } = context;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const classes = noteStyles();

  React.useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      {isMobile ? (
        <Container className={classes.root}>
          <Grid container spacing={2}>
            {notes.map((note, index) => (
              <Grid item xs={6} key={index}>
                <NoteCard key={index} note={note} />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <Container className={classes.root}>
          <Grid container spacing={2}>
            {notes.map((note, index) => (
              <Grid item xs={4} key={index}>
                <NoteCard key={index} note={note} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Notes;
