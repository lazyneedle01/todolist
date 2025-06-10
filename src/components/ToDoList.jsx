import { useState } from 'react';

import Task from './Task';
import TaskInputBox from './TaskInputBox';

export default function ToDoList() {
  const [tasks, setTasks] = useState([
    'Eat Breakfast',
    'Take a shower',
    'Walk the dog',
  ]);
  const [newTask, setNewTask] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks((t) => [...t, newTask]);
      setNewTask('');
    } else {
      setErrMsg('You need to add new Task');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="text-center text-xl tracking-normal w-1/3 mx-auto text-[#a89984]">
      <h1 className="text-3xl text-[#fbf1c7] uppercase tracking-wide mx-auto pb-1.5">
        List Your Tasks
      </h1>

      <TaskInputBox
        newTask={newTask}
        handleInputChange={handleInputChange}
        addTask={addTask}
        errMsg={errMsg}
      />

      <ul className="mt-8 space-y-3">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            moveTaskDown={moveTaskDown}
            moveTaskUp={moveTaskUp}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}
