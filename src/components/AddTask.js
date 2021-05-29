import { useRef } from "react";

const AddTask = ({ addTask }) => {
  const task = useRef();
  const dayTime = useRef();

  const saveTask = (e) => {
    e.preventDefault();
    addTask({task: task.current.value, dayTime: dayTime.current.value});
    task.current.value = "";
    dayTime.current.value = "";
  };

  return (
    <div className="AddTask">
      <form className="form" action="/" method="get" onSubmit={saveTask}>
        <div className="container">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <input
            id="task"
            className="form-control"
            type="text"
            ref={task}
            placeholder="AddTask"
            required
          />
        </div>
        <div className="container">
          <label htmlFor="dt" className="form-label">
            Day & Time
          </label>
          <input
            id="dt"
            className="form-control"
            type="text"
            ref={dayTime}
            placeholder="Add Day & Time"
            required
          />
        </div>
        <div className="container">
          <button className="btn text-light w-100 saveButton" type="submit">
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
