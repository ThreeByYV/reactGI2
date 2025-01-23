import React, { useContext } from 'react';
import { TodoContext } from './TodoProvider';

export default function TodoApp() {
    // consuming the state context from the todo provider for use in this TodoApp
  const {
    tasks,
    newTask,
    isEditing,
    handleInputChange,
    addOrEditTask,
    startEditingTask,
    deleteTask,
  } = useContext(TodoContext);

  return (
    <div className="w-screen h-screen flex flex-col align-center justify-center gap-8 absolute left-0 top-20">
      <h1>To-Do List</h1>
      <div>
        <input
          className="p-3 w-1/4 rounded-xl"
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
      </div>
      <button className="w-1/4 flex justify-end mx-auto" onClick={addOrEditTask}>
        {isEditing ? <p className="pr-4">Save</p> 
                : <p className="pr-4">Add Task</p>}
      </button>
      <ol>
        {tasks.map((task, index) => (
          <li className="w-1/4 mx-auto flex justify-between gap-5" key={index}>
            <span className="mr-4 whitespace-nowrap">{task}</span>
            <div className='flex justify-center align-center gap-3'>
                <button className="mr-4 bg-red-600 p-1 pr-2 pl-2" onClick={() => deleteTask(index)}>Delete</button>
                <button className="mr-4 bg-blue-500 p-1 pr-2 pl-2" onClick={() => startEditingTask(index)}>Edit</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
