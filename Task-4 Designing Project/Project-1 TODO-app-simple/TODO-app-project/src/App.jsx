import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems1 from "./components/ToDoItems1";
import ToDoItems2 from "./components/ToDoItems2";
import "./App.css";

function App() {
  return (
    <center className="todo-container py-4">
      <AppName />
      <div className="container">
        <AddToDo />
        <ToDoItems1 />
        <ToDoItems2 />
      </div>
    </center>
  );
}

export default App;
