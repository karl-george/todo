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

  console.log(task);

  const taskElements = task.map((task) => {
    return <Task task={task} handleChange={handleChange} key={task.id} />;
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setTask((prevData) => {
      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      };
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
