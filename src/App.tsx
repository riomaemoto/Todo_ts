import { ChangeEvent, useState } from "react";
import "./App.css";

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <h2>Todo list</h2>
        <form onSubmit={() => {}}>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            className="inputText"
          />
          <input type="submit" value="Add" className="submitButton" />
        </form>
      </div>
    </div>
  );
};
