import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/noteContext";
import NoteCard from "../components/NoteCard";
import { Container } from "@mui/material";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  const [note, setNote] = useState({
    id: "",
    title: "",
    description: "",
    tag: "",
  });

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <Container sx={{ padding: "500px" }}>
      {notes.map((note) => {
        return <NoteCard key={note._id} note={note} />;
      })}
    </Container>
  );
};

export default Notes;
