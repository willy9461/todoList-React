import React from "react";
import { useState } from "react";
import Task from "./Task/Task";
import Form from "./Form/Form";
import Title from "./Title/TItle";
import ListTasks from "./ListTasks/ListTasks";




const TodoView = () => {
  // tareas
  const [tasks, setTasks] = useState([]);

  const createTask = (title) => ({
    id: window.crypto.randomUUID(),
    title: title,
    completed: false,
  });


  // UNA FORMA DE PONER COMO COMPLETA LA TAREA (PERO NO LA IDEAL PORQUE CAMBIA OBJETO ORIGINAL TASK)
  // const completeTask = (id) => {
  //   const newTask = tasks.map((task) => {
  //     if(task.id === id) {
  //       task.completed = !task.completed;
  //     }
  //     return task;
  //   });
  //   setTasks(newTask);
  //   };

  //OTRA FORMA MEJOR DE HACER LO ANTERIOR ES CON STRUCTURED CLONE

  const completeTask = (id) => {
    const draft = structuredClone(tasks);
    const task = draft.find((task) => task.id === id); 
    task.completed = !task.completed;
    setTasks(draft);
  }
  
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }; 
  

  return (
    <div>
      <Title><h1>Lista de tareas React</h1></Title>
      <Form 
      createTask={createTask}
      setTasks={setTasks}
      tasks={tasks}
      />
      <ListTasks 
      tasks={tasks}
      renderTask={(task) => {
        return (
          <Task 
          key={task.id}
          title={task.title}
          completed={task.completed}
          onCompleted={() => {completeTask(task.id);}}
          onDeleted={() => {deleteTask(task.id);}}
          />
        )
      }} 
      />
      
    </div>
  );
};

export default TodoView;
