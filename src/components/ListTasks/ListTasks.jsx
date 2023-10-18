import React from "react";

const ListTasks = ({ tasks, renderTask }) => {
  return (
    <div>
      <section>
        {tasks.map((task) => {
          return renderTask(task); // aca uso el render Prop 
        })}
      </section>
    </div>
  );
};

export default ListTasks;
