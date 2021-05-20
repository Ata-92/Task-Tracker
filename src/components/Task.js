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
        <h3>
          {task} <RiCloseLine onClick={() => setFinished(true)} />
        </h3>
        <p>{dayTime}</p>
      </div>
    )
  );
};

export default Task;
