import React from "react";

const TodoListItem = props => {
  return (
    <div>
      <input type="checkbox" checked={props.completed} />
      <span>{props.title}</span>
      <button onClick={() => props.deleteTodo(props.index)}>Delete Todo</button>
    </div>
  );
};

export default TodoListItem;
