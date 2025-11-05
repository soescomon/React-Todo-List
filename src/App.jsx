import './App.css'
import ToDoList from './ToDoList'
import TodoListWrapper from './toDoListWrapper';

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
function App() {
   return (
    <>
      <ToDoList skipItem="Finish React homework" tasksList={ToDoList1}/>
      <ToDoList skipItem="Walk the dog" tasksList={ToDoList1}/>

      <TodoListWrapper tasksList={ToDoList1} />
    </>
  )
};

export default App;
