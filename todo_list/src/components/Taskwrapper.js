import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import TaskEdit from "./TaskEdit";


function Taskwrapper() {
  const [todos, setTodos] = useState([]);
  const addForm = (todo) => {
    setTodos([
      ...todos,
      {
        id: Math.round(Math.random() * 9999),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) =>{
    setTodos(todos.map((todo) =>
      todo.id === id ? {...todo, task,isEditing : !todo.isEditing}:todo
    )
  );
  };



  return (
    <div className="TaskWrapper">
      <h1>TO DO APP</h1>
      <TaskForm addForm={addForm} />
      {todos.map((todo) =>
        todo.isEditing ? ( 
          <TaskEdit editTodo={editTask} task={todo} />
        ) : (
          <Task
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
}

export default Taskwrapper;
