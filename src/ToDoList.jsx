function ToDoList({tasksList, skipItem}) {   
  return (
    <>
        <h1>My To Do List</h1>
        
        <h2>Using .map()</h2>
        <ol>
            {tasksList.map((item) => (
                item.task === skipItem ? null :
                <li key={item.id}>{item.task} - {item.isCompleted ? "Done" : "To Do!"}</li>
            ))}
        </ol>
        <br/>
        <ol>
            {tasksList.map((item) => (
                item.task !== skipItem && 
                <li key={item.id}>{item.task} - {item.isCompleted ? "Done" : "To Do!"}</li>
            ))}
        </ol>

      
    </>
  )
};


export default ToDoList;