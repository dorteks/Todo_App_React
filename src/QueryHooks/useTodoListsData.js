import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { data } from "autoprefixer";
import axios from "axios";

// fetch or get all todos
const fetchTodoLists = () => {
  return axios.get("http://localhost:4001/todolist");
};

export const useTodoListsData = (onSuccess, onError) => {
  return useQuery(["todo-lists"], fetchTodoLists, {
    onSuccess: onSuccess,
    onError: onError,
  });
};

// post or add a single todo
const addTodos = (todo, note) => {
  return axios.post("http://localhost:4001/todolist", todo, note);
};

export const useAddTodoData = () => {
  const queryClient = useQueryClient();
  return useMutation(addTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todo-lists"]);
    },
  });
};

// delete a single todo with use mutation
// const deleteSingleTodo = (todoId) => {
//   return axios.delete(`http://localhost:4001/todolist/${todoId}`);
// };

// export const useDeleteTodoData = (todoId) => {
//   const queryClient = useQueryClient();
//   return useMutation(deleteSingleTodo, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(["todo-lists"]);
//     },
//   });
// };
