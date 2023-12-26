import AppName from "./components/AppName"
import TodoAdd from "./components/TodoAdd"
import TodoItem1 from "./components/TodoItem1"
function App() {

  return (
    <center class='todo-container'>
      <AppName></AppName>
      <TodoAdd></TodoAdd>
      <TodoItem1></TodoItem1>
      <TodoItem1></TodoItem1>
    </center>
  )
}

export default App
