function ToDoList() {
      const ToDoList1 = [
    {
      id: 1,
      task: "Buy groceries",
      isCompleted: false,
    },
    {
      id: 2,
      task: "Finish React homework",
      isCompleted: true,
    },
    {
      id: 3,
      task: "Walk the dog",
      isCompleted: false,
    },
  ];
  return (
    <>
        <h1>My To Do List</h1>
        <h2>Using index</h2>
        <ol>
            <li>{ToDoList1[0].task} - {ToDoList1[0].isCompleted ? "Done" : "To Do!"}</li>
            <li>{ToDoList1[1].task} - {ToDoList1[1].isCompleted ? "Done" : "To Do!"}</li>
            <li>{ToDoList1[2].task} - {ToDoList1[2].isCompleted ? "Done" : "To Do!"}</li>
        </ol>

        <h2>Using .map()</h2>
        <ol>
            {ToDoList1.map((item) => (
                <li key={item.id}>{item.task} - {item.isCompleted ? "Done" : "To Do!"}</li>
            ))}
        </ol>
    </>
  )
};


export default ToDoList;