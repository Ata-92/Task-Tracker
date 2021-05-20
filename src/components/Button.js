import React, { useState } from "react";
import AddTask from './AddTask';

const Button = () => {
  const [show, setShow] = useState(false);

  const openClose = () => {
    setShow(!show);
  }

  return (
    <div className="Button">
      {show ? (
        <div className="container">
          <button className="btn btn-danger" onClick={openClose}>Close Add Task Bar</button>
          <AddTask />
        </div>
      ) : (
        <button className="btn showButton" onClick={openClose}>Show Add Task Bar</button>
      )}
    </div>
  );
};

export default Button;
