import React from 'react';
import notes from '../note';



function Note() {

    return (
        <div>
            {notes.map(note => (
                <div key={note.key} className="note">
                    <h1>{note.title}</h1>
                    <p>{note.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Note;