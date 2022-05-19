import { useState } from "react";
import { TodoForm } from "./todo_form";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo: any) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos: any = [todo, ...todo];
    setTodos(newTodos);
  };
  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  );
};
