import { useState } from 'react';
import Header from './components/Header';
import Task from './components/Task';
import './App.css';

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      title: 'First todo',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Second todo task that is very long',
      isComplete: false,
    },
    {
      id: 3,
      title: 'Third todo',
      isComplete: true,
    },
  ]);

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

  return (
    <div className='App container'>
      <Header />
      {taskElements}
    </div>
  );
}

export default App;
