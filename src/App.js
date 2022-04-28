import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Header from './components/Header';
import Task from './components/Task';
import './App.css';

function App() {
  const [task, setTask] = useState(
    () => JSON.parse(localStorage.getItem('tasks')) || []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task));
  }, [task]);

  const taskElements = task.map((task) => {
    return (
      <Task
        task={task}
        handleChange={handleChange}
        deleteTask={deleteTask}
        key={task.id}
      />
    );
  });

  function handleChange(event, id) {
    const { name, value, type, checked } = event.target;

    setTask((prevData) => {
      return prevData.map((task) => {
        return task.id === id
          ? {
              ...task,
              [name]: type === 'checkbox' ? checked : value,
            }
          : task;
      });
    });
  }

  function deleteTask(id) {
    setTask((prevData) => {
      return prevData.filter((task) => {
        if (task.id !== id) {
          return true;
        }
      });
    });
  }

  function addTask() {
    console.log(nameValue.value);
    setTask((prevData) => {
      return [
        ...prevData,
        {
          id: nanoid(),
          title: nameValue.value,
          isComplete: false,
        },
      ];
    });
  }

  let nameValue;

  return (
    <div className='App container'>
      <Header />
      {taskElements}
      <input type='text' name='newTask' ref={(el) => (nameValue = el)} />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default App;
