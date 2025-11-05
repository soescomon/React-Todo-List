import TodoListItem from "./todoListItem";

export default function TodoListWrapper({tasksList}) {
    return (
    <div>
      <h2>My To Do List</h2>
      {tasksList.map((item) => (
        <TodoListItem
          key={item.id}
          task={item.task}
          bgColor={item.isCompleted ? "lightgreen" : "lightcoral"}
          isBold={item.isCompleted ? "bold" : "normal"}
        />
      ))}
    </div>
  );
};