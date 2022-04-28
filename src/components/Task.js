const Task = ({ task, handleChange, deleteTask }) => {
  const styles = {
    color: task.isComplete ? 'rgb(196, 196, 196)' : 'rgb(86, 86, 86)',
  };

  return (
    <div className='tasks'>
      <h3 className='task-title' style={styles}>
        {task.title}
      </h3>
      <div className='task-buttons'>
        <button onClick={() => deleteTask(task.id)} className='task-delete'>
          X
        </button>
        <input
          type='checkbox'
          name='isComplete'
          className='checkbox'
          checked={task.isComplete}
          onChange={(event) => handleChange(event, task.id)}
        />
        <label className='checkbox-label' htmlFor='isComplete'>
          Complete the task
        </label>
      </div>
    </div>
  );
};

export default Task;
