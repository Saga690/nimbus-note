import React, { useContext } from 'react';
import noteContext from "../context/notes/NoteContext";


export const Noteitem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className="d-flex justify-content-end">
                        <img className='mx-2' src="https://cdn-icons-png.flaticon.com/128/484/484662.png" alt="" width={18} onClick={() => {deleteNote(note._id)}}/>
                        <img className='mx-2' src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" alt="" width={18} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {updateNote(note)}} />
                    </div>
                </div>
            </div>
        </div>
    )
}
