import React from "react";

const ListTasks = ({ tasks, renderTask }) => {
  return (
    <div>
      <section>
        {tasks.map((task) => {
          return renderTask(task);
        })}
      </section>
    </div>
  );
};

export default ListTasks;
