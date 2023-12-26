import AppName from "./components/AppName"
import TodoAdd from "./components/TodoAdd"
function App() {

  return (
    <center class='todo-container'>
      <AppName></AppName>
      <TodoAdd></TodoAdd>
      <div class='container text-center'>
       <div class='row'>
        <div class='col-6'>GYM</div>
         <div class='col-4'>4/10/2023
          </div>
         <div class='col-2'>
          <button type='button' class='btn btn-danger'>DELETE</button>
          </div>
       </div>
      </div>
      <div class='container text-center'>
       <div class='row'>
        <div class='col-6'>GYM</div>
         <div class='col-4'>4/10/2023
          </div>
         <div class='col-2'>
          <button type='button' class='btn btn-danger'>DELETE</button>
          </div>
       </div>
      </div>
    </center>
  )
}

export default App
