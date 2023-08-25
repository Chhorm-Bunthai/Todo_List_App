import React, { useState } from "react";
import TaskForm from "./TaskForm";

function Taskwrapper() {
    const [todos, setTodos] = useState([]);
    const addForm = (todo) => {
        setTodos([
          ...todos,
          { id: Math.round(Math.random()*9999), task: todo, completed: false, isEditing: false },
        ]);
      }
    return (
        <div className="TaskWrapper">
            <h1>TO DO APP</h1>
            <TaskForm  addForm={addForm}/>
        </div>
  )
}

export default Taskwrapper;