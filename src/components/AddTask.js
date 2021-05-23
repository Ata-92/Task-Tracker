import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [dayTime, setDayTime] = useState("");

  const saveTask = () => {
    addTask(task, dayTime);
    setTask("");
    setDayTime("");
  }

  return (
    <div className="AddTask">
      <form className="form" action="/" method="get">
        <div className="container">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <input
            id="task"
            className="form-control"
            type="text"
            value={task}
            onChange={e => setTask(e.target.value)}
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
            value={dayTime}
            onChange={e => setDayTime(e.target.value)}
            placeholder="Add Day & Time"
          />
        </div>
        <div className="container">
          <button
            className="btn text-light w-100 saveButton"
            type="button"
            onClick={saveTask}
          >
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
