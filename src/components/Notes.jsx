import * as React from "react";
import noteContext from "../context/note/noteContext";
import NoteCard from "./NoteCard";
import { Container, Grid } from "@mui/material";
import { noteStyles } from "../hooks/Styling/Notes";

const Notes = () => {
  const context = React.useContext(noteContext);
  const { notes, getNotes } = context;

  const classes = noteStyles();

  React.useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <Container className={classes.root}>
        <Grid container spacing={2}>
          {notes.map((note, index) => (
            <Grid item xs={4} key={index}>
              <NoteCard key={index} note={note} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Notes;
