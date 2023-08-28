import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
function Task({task, deleteTodo,editTodo,toggleComplete}) {
  return (
    <div className="Task">
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div className='icons'>
          <FontAwesomeIcon className='edit' icon={faPenToSquare} onClick={() => editTodo(task.id)} />
          <FontAwesomeIcon className='delete' icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}
export default Task;