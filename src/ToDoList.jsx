function ToDoList({tasksList}) {   
  return (
    <>
        <h1>My To Do List</h1>
        <h2>Using index</h2>
        <ol>
            <li>{tasksList[0].task} - {tasksList[0].isCompleted ? "Done" : "To Do!"}</li>
            <li>{tasksList[1].task} - {tasksList[1].isCompleted ? "Done" : "To Do!"}</li>
            <li>{tasksList[2].task} - {tasksList[2].isCompleted ? "Done" : "To Do!"}</li>
        </ol>

        <h2>Using .map()</h2>
        <ol>
            {tasksList.map((item) => (
                <li key={item.id}>{item.task} - {item.isCompleted ? "Done" : "To Do!"}</li>
            ))}
        </ol>
    </>
  )
};


export default ToDoList;