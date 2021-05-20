import { useState } from 'react';
import { RiCloseLine} from 'react-icons';

const Task = ({task, dayTime}) => {


  return (
    <div>
      <h3>{task} <RiCloseLine /></h3>
      <p>{dayTime}</p>
    </div>
  )
}

export default Task;
