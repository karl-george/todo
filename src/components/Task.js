const Task = ({ task, handleChange }) => {
  return (
    <div className='tasks'>
      <h3 className='task-title'>{task.title}</h3>
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
