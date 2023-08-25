import React,{useState} from 'react'

function TaskForm({addForm}) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addForm(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TaskForm">
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="input" placeholder='Add your task' />
        <button type="submit" className='btn'>Add</button>
    </form>
  )
}

export default TaskForm;