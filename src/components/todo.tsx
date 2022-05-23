import React, { useState } from "react";
import { TodoForm } from "./todo_form";
import { TodoList } from "./todo_list";

export const Todo = () => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  return todos.map((todo, index) => {
    <div
      className={todo.isComplete ? "todo_row complete" : "todo_row"}
      key={index}
    >

      <div key={todo.id} onClick{()=> completeTodo(todo.id)}>
      {todo.text}
      </div>

    </div>
  })
}
