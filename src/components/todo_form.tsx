import React, { useState, FC } from "react";

export const TodoForm: FC<{ onSubmit: (item: any) => void }> = (
  TodoFormProps
) => {
  const { onSubmit } = TodoFormProps;
  const [input, setInput] = useState("");

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });
    setInput("");
  };

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type={"text"}
          placeholder={"add ToDo"}
          value={input}
          name={"text"}
          className="todo_input"
          onChange={handleChange}
        />
        <button className="todo_btn">Add ToDo</button>
      </form>
    </>
  );
};
