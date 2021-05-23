import Task from './Task';

function Tasks({tasks, deleteTask}) {
  return (
    <div className="Tasks">
      {tasks?.map((task, index) => (<Task key={index} task={task} deleteTask={deleteTask}/>))}
    </div>
  )
}

export default Tasks;
