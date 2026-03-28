import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <div className="Add-container">
          <AddTodo />
        </div>

        <div className="item-container">
          <TodoItems />
        </div>
      </center>
    </div>
  );
}

export default App;
