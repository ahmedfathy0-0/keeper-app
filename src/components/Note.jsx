import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Zoom from '@mui/material/Zoom';

function Note(props) {
  return (
    <div className="note-container">
        {props.Notes.map((noteItem, index) => (
            <Zoom in={true}>
            <div className="note">
              <h1>{noteItem.title}</h1>
              <p>{noteItem.content}</p>
              <button
                onClick={() => {
                  props.onDelete(index);
                }}
              >
                <DeleteIcon sx={{ color: 'red' }} />
              </button>
            </div>
            </Zoom>
        ))}
    </div>
  );
}

export default Note;
