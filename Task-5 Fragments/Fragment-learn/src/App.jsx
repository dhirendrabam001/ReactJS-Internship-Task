import "./App.css";

function App() {
  // return (
  //   <div>
  //     <h1>Learn Fragments</h1>;
  //     <ul class="list-group">
  //       <li class="list-group-item">An item</li>
  //       <li class="list-group-item">A second item</li>
  //       <li class="list-group-item">A third item</li>
  //       <li class="list-group-item">A fourth item</li>
  //       <li class="list-group-item">And a fifth one</li>
  //     </ul>
  //   </div>     // avoid unneccessary div use fragment and remove unneccessary div
  // );

  // using fragment remove unneccessary div first method
  // return (
  //   <React.Fragment>
  //     <h1>Learn Fragments</h1>;
  //     <ul class="list-group">
  //       <li class="list-group-item">An item</li>
  //       <li class="list-group-item">A second item</li>
  //       <li class="list-group-item">A third item</li>
  //       <li class="list-group-item">A fourth item</li>
  //       <li class="list-group-item">And a fifth one</li>
  //     </ul>
  //   </React.Fragment>
  // );

  // using fragment remove unneccessary div second method using <>
  // also using map
  let footItems = ["daal", "rooti", "rice", ",milk", "dahi"];
  return (
    <>
      <h1>Learn Fragments</h1>;
      <ul className="list-group">
        {footItems.map((items) => {
          return (
            <li key={items} className="list-group-item">
              {items}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
