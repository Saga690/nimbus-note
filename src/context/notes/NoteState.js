import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    const host = "http://localhost:5000";

    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial);


    const getNotes = async () => {

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZGFiYjRhYzNhMDgwMzI5MDk0MzU4In0sImlhdCI6MTcwMzgwNDY3OH0.azNIR9QpOzXq1VkiuZDlxwn7iy7We-u6bNgLXaRvrTo'
            },
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    }




    const addNote = async (title, description, tag) => {

        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZGFiYjRhYzNhMDgwMzI5MDk0MzU4In0sImlhdCI6MTcwMzgwNDY3OH0.azNIR9QpOzXq1VkiuZDlxwn7iy7We-u6bNgLXaRvrTo'
            },
            body: JSON.stringify({ title, description, tag })
        });

        const note = {
            "_id": "658eba00e563d48f7dcc9a38",
            "user": "658dabb4ac3a080329094358",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-12-29T12:22:24.862Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }

    const deleteNote = async (id) => {

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZGFiYjRhYzNhMDgwMzI5MDk0MzU4In0sImlhdCI6MTcwMzgwNDY3OH0.azNIR9QpOzXq1VkiuZDlxwn7iy7We-u6bNgLXaRvrTo'
            },
        });
        const json = response.json();

        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    const editNote = async (id, title, description, tag) => {

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4ZGFiYjRhYzNhMDgwMzI5MDk0MzU4In0sImlhdCI6MTcwMzgwNDY3OH0.azNIR9QpOzXq1VkiuZDlxwn7iy7We-u6bNgLXaRvrTo'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children};
        </NoteContext.Provider>
    )
}

export default NoteState;