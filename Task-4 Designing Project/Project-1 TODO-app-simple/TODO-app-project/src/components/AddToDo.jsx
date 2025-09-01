function AddToDo() {
  return (
    <div className="container text-center">
      <div className="row info-row">
        <div className="col-5">
          <input type="text" placeholder="Enter TODO Here..." />
        </div>
        <div className="col-5">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success btn-info">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
