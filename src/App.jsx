import './App.css'
import ToDoList from './ToDoList'
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
      <ToDoList tasksList={ToDoList1}/>
    </>
  )
};

export default App
