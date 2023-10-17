import React, { useState } from 'react'

const Form = ({createTask, setTasks, tasks }) => {

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
  )
}

export default Form