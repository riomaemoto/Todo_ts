import { Text } from "@chakra-ui/react";
import { TodoForm } from "./components/todo_form";

export const App = () => {
  return (
    <>
      <Text align={"center"}>ToDo App</Text>
      <TodoForm
        onSubmit={function (item: any): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};
