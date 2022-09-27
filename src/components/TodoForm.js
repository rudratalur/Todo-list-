import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      //lots of todo items will be there no so we add id to them
      id:Math.floor(Math.random() * 10000),
      text: input
    });
      setInput("")
  };
  return(
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? ( 
        <>
          <input
          placeholder="update your item"
          name="text"
          className="todo-input edit"
          value={input}
          onChange={handleChange}
          ref={inputRef}
      />
      <button onClick={handleSubmit} className="todo-button">Update</button>
      </>
      ) : (
      <>
      <input
        placeholder="Add a ToDo"
        className="todo-input"
        value={input}
        onChange={handleChange}
        name='text'
        ref={inputRef}
      />
      <button onClick={handleSubmit} className="todo-button">Add ToDo</button>
      </>
      )}
      
    </form>
  );
}

export default TodoForm;
