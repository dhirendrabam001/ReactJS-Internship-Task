import AppName from "./components/AppName";
import "./App.css";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/toDoItems";
import { useState } from "react";

function App() {
  const toDoItemsList = [
    {
      name: "Dhirendra Bam",
      date: "04/05/2025",
    },
    {
      name: "Go To College",
      date: "06/06/2025",
    },
    {
      name: "From Nepal",
      date: "BscIT",
    },
  ];

  const [toDoItems, setToDoItems] = useState(toDoItemsList);

  const newItemsInfo = (itemsname, itemsdate) => {
    console.log(`New items is: ${itemsname} and ${itemsdate}`);
  };

  return (
    <center className="todo-container py-4">
      <div className="container">
        <AppName />
        <AddToDo addNewItems={newItemsInfo} />
        <ToDoItems toDoItemsList={toDoItemsList} />
      </div>
    </center>
  );
}

export default App;
