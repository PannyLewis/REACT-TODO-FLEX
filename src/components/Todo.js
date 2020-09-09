import React from "react";
import "./Todo.css";

const Todo = (props) => {
  return (
    <div
      className={`item${props.item.completed ? " completed" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.task}</p>
      <button onClick={() => props.startEdit(props.item)}>Edit</button>
      <button>X</button>
    </div>
  );
};

export default Todo;
