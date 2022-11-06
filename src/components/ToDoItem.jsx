import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    console.log("handleClick got called");
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
