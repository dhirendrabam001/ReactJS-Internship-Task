import AppName from "./components/AppName";

function App() {
  return (
    <div>
      <center className="center-content">
        <AppName />
        <div class="row">
          <div class="col-5">
            <input type="text" placeholder="Enter TODO Here..." />
          </div>
          <div class="col-5">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>

        {/* second */}
        <div class="row">
          <div class="col-5">
            <h6>Milk Buy</h6>
          </div>
          <div class="col-5">06/05/2025</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>

        {/* third */}
        <div class="row">
          <div class="col-5">
            <h6>Go TO College</h6>
          </div>
          <div class="col-5">04/08/2025</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
