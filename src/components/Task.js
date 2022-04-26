const Task = ({ task, handleChange }) => {
  const styles = {
    color: task.isComplete ? 'rgb(196, 196, 196)' : 'rgb(86, 86, 86)',
  };

  return (
    <div className='tasks'>
      <h3 className='task-title' style={styles}>
        {task.title}
      </h3>
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
  );
};

export default Task;
