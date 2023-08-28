import React, { useState } from "react";

function TaskEdit({ editTodo, task }) {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    editTodo(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="TaskForm">
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="input" placeholder='Add your task' />
        <button type="submit" className='btn'>Add</button>
    </form>
  );
}

export default TaskEdit;
