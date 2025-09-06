import { useState } from "react";

function AddToDo({ addNewItems }) {
  const [toDoName, setToDoName] = useState("");
  const [toDoDate, setToDoDate] = useState("");

  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setToDoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    addNewItems(toDoName, toDoDate);
    setToDoName();
    setToDoDate();
  };

  return (
    <div className="row text-white justify-content-center align-items-center mt-5">
      <div className="col-lg-6 col-md-6">
        <input
          type="text"
          placeholder="Enter Your Name TODO Here..."
          value={toDoName}
          onChange={handleNameChange}
        />
      </div>
      <div className="col-lg-3 col-md-3">
        <input type="date" value={toDoDate} onChange={handleDateChange} />
      </div>
      <div className="col-lg-3 col-md-3">
        <button
          className="btn btn-success btn-info"
          onClick={handleAddButtonClicked}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddToDo;
