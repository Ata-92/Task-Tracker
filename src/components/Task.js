import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const Task = ({ task, dayTime }) => {
  const [marked, setMarked] = useState(false);
  const [finished, setFinished] = useState(false);

  return (
    !finished && (
      <div
        className={`Task ${marked}`}
        onClick={() => !finished && setMarked(!marked)}
      >
        <h3 className="task">
          {task} <RiCloseLine className="text-danger closeIcon" onClick={() => setFinished(true)} />
        </h3>
        <p className="dayTime">{dayTime}</p>
      </div>
    )
  );
};

export default Task;
