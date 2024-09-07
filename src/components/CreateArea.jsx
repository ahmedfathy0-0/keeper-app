import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab,Zoom,Collapse } from "@mui/material";

function CreateArea(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [isClicked, setIsClicked] = React.useState(false);
  const [typingTimeout, setTypingTimeout] = React.useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const newTimeout = setTimeout(() => {
      setIsClicked(false);
    }, 5000); 

    setTypingTimeout(newTimeout);
  }

  function onSubmit(event) {
    props.onAdd({ title, content });
    setTitle("");
    setContent("");
    event.preventDefault();
  }

  function handleonClick() {
    setIsClicked(true);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  }

  return (
    <div>
      <form className="create-note">
        <Collapse in={isClicked} timeout="auto">
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={title}
          />
        </Collapse>
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
          onChange={handleChange}
          value={content}
          onClick={handleonClick}
        />
        <Collapse in={isClicked} timeout="auto">
        <Zoom in={isClicked}>
          <Fab onClick={onSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
        </Collapse>
      </form>
    </div>
  );
}

export default CreateArea;
