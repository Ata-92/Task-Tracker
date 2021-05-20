import React, { useState } from "react";
import AddTask from './AddTask';

const Button = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="Button">
      {show ? (
        <div className="wrapper">
          <button onClick={showClose}>Close Add Task Bar</button>
          <AddTask />
        </div>
      ) : (
        <button onClick={showClose}>Show Add Task Bar</button>
      )}
    </div>
  );
};

export default Button;
