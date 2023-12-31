import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "658eba00e563d48f7dcc9a38",
            "user": "658dabb4ac3a080329094358",
            "title": "My Title updated",
            "description": "Start CP updated",
            "tag": "personal",
            "date": "2023-12-29T12:22:24.862Z",
            "__v": 0
        },
        {
            "_id": "658eba00e563d48f7dcc9a38",
            "user": "658dabb4ac3a080329094358",
            "title": "My Title updated",
            "description": "Start CP updated",
            "tag": "personal",
            "date": "2023-12-29T12:22:24.862Z",
            "__v": 0
        },
        {
            "_id": "658eba00e563d48f7dcc9a38",
            "user": "658dabb4ac3a080329094358",
            "title": "My Title updated",
            "description": "Start CP updated",
            "tag": "personal",
            "date": "2023-12-29T12:22:24.862Z",
            "__v": 0
        },
        {
            "_id": "658eba00e563d48f7dcc9a38",
            "user": "658dabb4ac3a080329094358",
            "title": "My Title updated",
            "description": "Start CP updated",
            "tag": "personal",
            "date": "2023-12-29T12:22:24.862Z",
            "__v": 0
        },
        {
            "_id": "658eba00e563d48f7dcc9a38",
            "user": "658dabb4ac3a080329094358",
            "title": "My Title updated",
            "description": "Start CP updated",
            "tag": "personal",
            "date": "2023-12-29T12:22:24.862Z",
            "__v": 0
        },
        {
            "_id": "658eba00e563d48f7dcc9a38",
            "user": "658dabb4ac3a080329094358",
            "title": "My Title updated",
            "description": "Start CP updated",
            "tag": "personal",
            "date": "2023-12-29T12:22:24.862Z",
            "__v": 0
        },
        {
            "_id": "658eba00e563d48f7dcc9a38",
            "user": "658dabb4ac3a080329094358",
            "title": "My Title updated",
            "description": "Start CP updated",
            "tag": "personal",
            "date": "2023-12-29T12:22:24.862Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial);


    const addNote = (title, description, tag) => {
        //API Call pending
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

    const deleteNote = () => {

    }

    const editNote = () => {

    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children};
        </NoteContext.Provider>
    )
}

export default NoteState;