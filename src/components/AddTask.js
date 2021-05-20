const AddTask = () => {

  return (
    <div className="AddTask">
      <form className="form" action="/" method="get">
        <div className="container">
          <label htmlFor="task" className="form-label">Task</label>
          <input id="task" className="form-control" type="text" placeholder="AddTask"/>
        </div>
        <div className="container">
          <label htmlFor="dt" className="form-label">Day & Time</label>
          <input id="dt" className="form-control" type="text" placeholder="Add Day & Time"/>
        </div>
        <div className="container">
          <button className="btn saveButton" type="button" onClick={saveTask}>Save Task</button>
        </div>
      </form>
    </div>
  )
}

export default AddTask;
