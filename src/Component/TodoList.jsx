import React from "react";
import List from "./List";
import uuid from "react-uuid";

function TodoList({ todoList, deleteTodo }) {
  console.log(todoList);

  const renderList = todoList.map((list, i) => {
    // console.log(uuid());
    return (
      <List deleteTodo={deleteTodo} key={uuid()} id={i} list={list}></List>
    );
  });
  console.log(renderList);

  return <ul className="flex flex-col mt-8">{renderList}</ul>;
}

export default TodoList;
