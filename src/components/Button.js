import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";

const Button = () => {
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState([]);

  const baseUrl = "http://localhost:5000/tasks";

  const fetchTasks = async() => {
    const res = await fetch(baseUrl);
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
      fetchTasks();
  }, [])

  const addTask = async(task) => {
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)
    });
    await res.json();
    fetchTasks();
  }

  const deleteTask = async(id) => {
    await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    });
    fetchTasks();
  };

  // const addTask = (task, dayTime) => {
  //   const id = Math.floor(Math.random() * 1000) + 1;
  //   setTasks([...tasks, {id, task, dayTime }]);
  // };

  // const deleteTask = (id) => {
  //   setTasks(tasks.filter((task) => (task.id !== id)));
  // }

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
          {tasks.length === 0 ? <h6 className="m-3">No tasks to show</h6> : <Tasks tasks={tasks} deleteTask={deleteTask}/>}
        </div>
      ) : (
        <div className="container">
          <button
            className="btn text-light px-3 d-block mx-auto showButton"
            onClick={openClose}
          >
            Show Add Task Bar
          </button>
          {tasks.length === 0 ? <h6 className="m-3">No tasks to show</h6> : <Tasks tasks={tasks} deleteTask={deleteTask}/>}
        </div>
      )}
    </div>
  );
};

export default Button;
