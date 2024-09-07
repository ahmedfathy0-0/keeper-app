import React from "react";

function CreateArea(props) {
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    
    function handleChange(event) {
        const {name, value} = event.target;
        
        if (name === "title") {
            setTitle(value);
        } else if (name === "content") {
            setContent(value);
        }
    }

    function onSubmit(event) {
        props.onAdd({title, content});
        setTitle("");
        setContent("");
        event.preventDefault();
    }



  return (
    <div>
      <form>
        <input name="title" placeholder="Title"
        onChange= {handleChange}
        value={title}
        />
        <textarea name="content" placeholder="Take a note..." rows="3" 
        onChange={handleChange}
        value={content}
        />
        <button
        onClick={onSubmit}
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
