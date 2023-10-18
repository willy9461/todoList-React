import React from "react";

const Task = ({ title, completed, onCompleted, onDeleted}) => {

    const handleDelete = () => {
        onDeleted();
    };

    const handleComplete = () => {
        onCompleted();
    };

  return (
    <div>
      <p>
        <span>{title}</span>
        <span>{completed ? " completada" : " a completar"}</span>
      </p>
      <button onClick={handleComplete}>✅</button>
      <button onClick={handleDelete}>❌</button>
    </div>
  );
};

export default Task;
