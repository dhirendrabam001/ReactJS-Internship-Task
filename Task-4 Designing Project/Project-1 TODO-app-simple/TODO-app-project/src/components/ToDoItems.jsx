import ToDoItem from "./toDoItem";
const ToDoItems = ({ toDoItemsList }) => {
  return (
    <div className="container">
      {toDoItemsList.map((items) => {
        return <ToDoItem toDoName={items.name} toDoDate={items.date} />;
      })}
    </div>
  );
};

export default ToDoItems;
