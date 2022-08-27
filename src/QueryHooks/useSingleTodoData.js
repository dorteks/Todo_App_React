import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// fetch or get a single todo
const fetchSingleTodoData = (todoId) => {
  console.log("todoId -", todoId);
  return axios.get(`http://localhost:4001/todolist/${todoId}`);
};

export const useSingleTodoData = (todoId) => {
  const queryClient = useQueryClient();

  return useQuery(["todolist", todoId], () => fetchSingleTodoData(todoId), {
    initialData: () => {
      const todo = queryClient
        .getQueriesData("todo-lists")
        ?.data?.find((todo) => todo.id === parseInt(todoId));

      if (todo) {
        return { data: todo };
      } else {
        return undefined;
      }
    },
  });
};
