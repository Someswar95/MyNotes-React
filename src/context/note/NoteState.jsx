import * as React from "react";
import NoteContext from "./noteContext";
import { privateAxios } from "../../services/Helper";

const NoteState = (props) => {
  const notesInitial = [];
  const [notes, setNotes] = React.useState(notesInitial);

  const getNotes = async () => {
    const response = await privateAxios.get("/notes/fetchallnotes", notes);
    const note = await response.data;
    setNotes(note);
  };

  const addNote = async (note) => {
    const response = await privateAxios.post("/notes/addnote", note);
    return response.data;
  };

  return (
    <NoteContext.Provider value={{ notes, getNotes, addNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
