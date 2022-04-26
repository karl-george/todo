const Task = () => {
  return (
    <div>
      <div className='tasks'>
        <h3 className='task-title'>Do very important thing</h3>
        <input type='checkbox' name='isComplete' className="checkbox"/>
        <label className="checkbox-label" htmlFor="isComplete">Complete the task</label>
      </div>
      <div className='tasks'>
        <h3 className='task-title completed'>
          Do very important and very long task
        </h3>
        <input type='checkbox' name='isComplete' className="checkbox"/>
        <label className="checkbox-label" htmlFor="isComplete">Complete the task</label>
      </div>
    </div>
  );
};

export default Task;
