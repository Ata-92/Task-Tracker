import React, { useState } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";

const Button = () => {
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = (task, dayTime) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    setTasks([...tasks, {id, task, dayTime }]);
  };

  const deleteTask = (id) => {
    console.log(id);
    setTasks(tasks.filter((task) => (task.id !== id)));
  }

  const openClose = () => {
    setShow(!show);
  };

  return (
    <div className="Button">
      {show ? (
        <div className="container">
          <button
            className="btn btn-danger px-3 text-light d-block mx-auto closeButton"
            onClick={openClose}
          >
            Close Add Task Bar
          </button>
          <AddTask addTask={addTask} />
          <Tasks tasks={tasks} deleteTask={deleteTask}/>
        </div>
      ) : (
        <div className="container">
          <button
            className="btn text-light px-3 d-block mx-auto showButton"
            onClick={openClose}
          >
            Show Add Task Bar
          </button>
          <Tasks tasks={tasks} deleteTask={deleteTask}/>
        </div>
      )}
    </div>
  );
};

export default Button;
