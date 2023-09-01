import React,{useState} from 'react'

function TaskForm({addForm}) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
          addForm(value);
          setValue('');
        };
      };
      const handleChange = function(e){
        setValue(e.target.value)
      };
  return (
    <form onSubmit={handleSubmit} className='task-form'>
        <input type='text' value={value} onChange={handleChange} className='input' placeholder='Add your task' />
        <button type='submit' className='btn'>Add</button>
    </form>
  );
};

export default TaskForm;