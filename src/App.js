import { useState } from "react";
import "./App.css";
import Input from "./Component/Input";
import TodoList from "./Component/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addListHandler = (newList) => {
    // console.log(newList);
    setTodoList((prevTodoList) => {
      return [newList, ...prevTodoList];
    });
  };

  const deleteTodo = (id) => {
    console.log(id);
    const updatedList = todoList.filter((elm, i) => {
      return i !== id;
    });
    // console.log(updatedList);
    setTodoList(updatedList);
  };

  return (
    <div className="bg-slate-200 h-[100%] p-8">
      <div className="rounded mx-auto max-w-[750px] min-h-[550px] p-12 shadow-2xl bg-slate-100 ">
        <h1 className="flex justify-center font-mono font-bold text-xl text-slate-600 mx-auto">
          My To-do
        </h1>
        <Input onAddTodo={addListHandler}></Input>
        <TodoList deleteTodo={deleteTodo} todoList={todoList}></TodoList>
      </div>
    </div>
  );
}

export default App;
