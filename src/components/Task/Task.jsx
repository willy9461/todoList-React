import React from "react";

const Task = ({title, completed}) => {
  return (
    <div>
      <p>
        <span>{title}</span>
        <span>{completed ? " completada" : " a completar"}</span>
      </p>
    </div>
  );
};

export default Task;
