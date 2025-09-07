import ToDoItem from "./toDoItem";
const ToDoItems = ({ toDoItemsList, onDeleteClick }) => {
  return (
    <div className="container">
      {toDoItemsList.map((items) => {
        return (
          <ToDoItem
            key={items.name}
            toDoName={items.name}
            toDoDate={items.date}
            onDeleteClick={onDeleteClick}
          />
        );
      })}
    </div>
  );
};

export default ToDoItems;
