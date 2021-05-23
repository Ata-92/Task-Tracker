import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const Task = ({ task, deleteTask }) => {
  const [marked, setMarked] = useState(false);

  const closeTask = () => {
    deleteTask(task.id);
  };

  return (
    <div
      className={`Task ${marked} mx-2 mt-3`}
      onDoubleClick={() => setMarked(!marked)}
    >
      <h5 className="task px-2 pt-1">
        {task.task}{" "}
        <RiCloseLine
          className="text-danger closeIcon float-end"
          role="button"
          onClick={closeTask}
        />
      </h5>
      <p className="dayTime px-2 pb-1">{task.dayTime}</p>
    </div>
  );
};

export default Task;
