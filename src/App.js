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
      title: 'Second todo',
      isComplete: false,
    },
    {
      id: 3,
      title: 'Third todo',
      isComplete: true,
    },
  ]);

  const taskElements = task.map((task) => {
    return <Task task={task} handleChange={handleChange} key={task.id} />;
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

  return (
    <div className='App container'>
      <Header />
      {taskElements}
    </div>
  );
}

export default App;
