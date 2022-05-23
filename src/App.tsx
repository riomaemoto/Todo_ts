import { Text } from "@chakra-ui/react";
import { TodoList } from "./components/todo_list";

export const App = () => {
  return (
    <>
      <Text align={"center"}>ToDo App</Text>
      <TodoList />
    </>
  );
};
