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

  const editNote = async (id, note) => {
    const response = await privateAxios.put(`/notes/updatenote/${id}`, note);
    let newNotes = JSON.parse(JSON.stringify(notes));

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  const deleteNote = async (id) => {
    const response = await privateAxios.delete(`/notes/deletenote/${id}`);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
