import AddTodo from "./components/AddTodo";
import AppName from "./components/Appname";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    
        <center class="todo-container">
     
       <AppName/>
        <AddTodo/>
        <div className="Item-container">
      <TodoItem1/>
      <TodoItem2/>
      </div>
    </center>
  );
}

export default App;




