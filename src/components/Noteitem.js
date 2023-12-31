import React from 'react'

export const Noteitem = (props) => {
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <img className='mx-2' src="https://cdn-icons-png.flaticon.com/128/484/484662.png" alt="" width={18} />
                    <img className='mx-2' src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" alt="" width={18} />
                </div>
            </div>
        </div>
    )
}
