import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems1 from "./components/ToDoItems1";
import ToDoItems2 from "./components/ToDoItems2";
import "./App.css";

function App() {
  return (
    <div className="main py-4">
      <center className="center-content">
        <AppName />
        <AddToDo />
        <div className="items-container">
          <ToDoItems1 />
          <ToDoItems2 />
        </div>
      </center>
    </div>
  );
}

export default App;
