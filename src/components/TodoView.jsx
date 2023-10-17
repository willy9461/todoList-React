import React from "react";
import { useState } from "react";
import Task from "./Task/Task";
import Form from "./Form/Form";
import Title from "./Title/TItle";




const TodoView = () => {
  // tareas
  const [tasks, setTasks] = useState([]);

  const createTask = (title) => ({
    id: window.crypto.randomUUID(),
    title: title,
    completed: false,
  });

  //formulario
  

  return (
    <div>
      <Title><h1>Lista de tareas</h1></Title>
      <Form 
      createTask={createTask}
      setTasks={setTasks}
      tasks={tasks}
      />
      <section>
        {tasks.map((task) => {
          return (
            <Task 
            key={task.id}
            title={task.title}
            completed={task.completed}/>
          );
        })}
      </section>
    </div>
  );
};

export default TodoView;
