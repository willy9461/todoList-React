import React from "react";
import { useState } from "react";
import Task from "./Task/Task";



const TodoView = () => {
  // tareas
  const [tasks, setTasks] = useState([]);

  const createTask = (title) => ({
    id: window.crypto.randomUUID(),
    title: title,
    completed: false,
  });

  //formulario
  const [form, setForm] = useState({
    title: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => setForm({ title: "" });

 

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = createTask(form.title);

    setTasks([...tasks, newTask]);

    resetForm();
  };

  return (
    <div>
      <section>
        <h1>Lista de tareas</h1>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          <button type="submit">agregar tarea</button>
        </form>
      </section>
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
