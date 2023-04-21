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
  return (
    <NoteContext.Provider value={{ notes, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
