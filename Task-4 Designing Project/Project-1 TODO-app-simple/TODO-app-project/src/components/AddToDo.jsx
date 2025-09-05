function AddToDo() {
  return (
    <div className="row text-white justify-content-center align-items-center mt-5">
      <div className="col-lg-6 col-md-6">
        <input type="text" placeholder="Enter Your Name TODO Here..." />
      </div>
      <div className="col-lg-3 col-md-3">
        <input type="date" />
      </div>
      <div className="col-lg-3 col-md-3">
        <button className="btn btn-success btn-info">Add</button>
      </div>
    </div>
  );
}

export default AddToDo;
