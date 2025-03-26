function TodoItem1 (){
    let todoName = "Buy Milk";
    let todoDate = "2/2/2025";

    return <div class="container ">
    <div className="row js">
    <div className="col-6 ">{todoName}</div>
    <div className="col-4 ">{todoDate}</div>
       <div className="col-2 "><button type="button js-button" class="btn btn-danger">Remove</button></div>
  </div>
  </div>
}
export default TodoItem1;