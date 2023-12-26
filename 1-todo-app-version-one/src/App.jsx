import AppName from "./components/AppName"
import TodoAdd from "./components/TodoAdd"
import TodoItem1 from "./components/TodoItem1"
import TodoItem2 from "./components/TodoItem2"
import "./App.css";
function App() {

  return (
    <center class='todo-container'>
      <AppName></AppName>
      <TodoAdd></TodoAdd>
      <TodoItem1></TodoItem1>
      <TodoItem2></TodoItem2>
    </center>
  )
}

export default App
