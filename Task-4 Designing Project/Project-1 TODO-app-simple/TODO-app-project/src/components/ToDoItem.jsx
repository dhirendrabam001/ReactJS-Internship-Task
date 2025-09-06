function ToDoItem({ toDoName, toDoDate, onDeleteClick }) {
  return (
    <div className="row text-white justify-content-center align-items-center mt-4">
      <div className="col-lg-6 col-md-6">{toDoName}</div>
      <div className="col-lg-3 col-md-3">{toDoDate}</div>
      <div className="col-lg-3 col-md-3">
        <button className="btn btn-danger btn-info">Delete</button>
      </div>
    </div>
  );
}

export default ToDoItem;
