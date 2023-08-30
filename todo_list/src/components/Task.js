import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
function Task({task, deleteTodo,editTodo,toggleComplete}) {
  const handleChange = () => toggleComplete(task.id);
  const toggleChange = function(){
    editTodo(task.id)
  }
  const deleteTask = function(){
     deleteTodo(task.id)
  }
  return (
    <div className="Task">
      <div className='title'>
        <input className='checkbox' type='checkbox' checked = {task.completed} onChange={handleChange}/>
        <p className={`${task.completed ? 'completed' : ""}`} onClick={handleChange}>{task.task}</p>
      </div>
        <div className='icons'>
          <FontAwesomeIcon className='edit' icon={faPenToSquare} onClick={toggleChange} />
          <FontAwesomeIcon className='delete' icon={faTrash} onClick={deleteTask} />
        </div>
    </div>
  )
}
export default Task;