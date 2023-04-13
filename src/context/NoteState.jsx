import { useState } from "react";
import NoteContext from "./noteContext";
import { privateAxios } from "../services/Helper";

const Notestate = (props) => {
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

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

export default Notestate;
