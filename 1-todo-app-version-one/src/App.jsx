function App() {

  return (
    <center class='todo-container'>
      <h1>TODO-APP</h1>
      <div class='container text-center'>
       <div class='row'>
        <div class='col-6'>
          <input type='text' placeholder="Enter Todo Here"></input>
        </div>
         <div class='col-4'>
         <input type='date'/>
         </div>
         <div class='col-2'>
          <button type='button' class='btn btn-success'>ADD</button>
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
