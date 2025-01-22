import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  //functions to be used when this provider is consumed
  function handleInputChange(e) {
    setNewTask(e.target.value);
  }  

  const addOrEditTask = () => {
    if (newTask.trim() === '') {
      return;
    } 
    if (isEditing) {
        // if the user is editing a note get the updated task and then set that task
      const updatedTasks = tasks.map((task, index) => index === editingIndex ? newTask : task);
      setTasks(updatedTasks);
      setIsEditing(false);
    } else {
      setTasks((prev) => [...prev, newTask]);
    }
    setNewTask(''); //clears out the new tasks whenever the function is called
  };

// function that allows the editing process
  const startEditingTask = (index) => {
    setNewTask(tasks[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const deleteTask = (idx) => {
    setTasks(tasks.filter((_, index) => index !== idx)); //removes the task from the state based on its index
    setNewTask('');
  };

  return (
    // providing the necessary functions and/or state for the consumer
    <TodoContext.Provider
      value={{
        tasks,
        newTask,
        isEditing,
        handleInputChange,
        addOrEditTask,
        startEditingTask,
        deleteTask,
      }}>
      {children}
    </TodoContext.Provider>
  );
}
