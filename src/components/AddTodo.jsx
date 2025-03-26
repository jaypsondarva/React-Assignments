function AddTodo (){

    return  <div class="container text-center">
     <div className="row js">
    <div className="col-6 "><input type="text" placeholder="Enter TaskHere"></input></div>
    <div className="col-4 "><input type="date"></input></div>
       <div className="col-2 "><button type="button js-button" class="btn btn-success">Add</button></div>
  </div></div>
}
export default  AddTodo;