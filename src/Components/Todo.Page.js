import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useAddTodoData,
  useTodoListsData,
} from "../QueryHooks/useTodoListsData";

function TodoPage() {
  // set state for new todo (add todo)
  const [todo, setTodo] = useState("");
  const [note, setNote] = useState("");

  const onSuccess = (data) => {
    console.log("data - ", data);
  };

  const onError = (error) => {
    console.log("error - ", error);
  };

  // fetch all todos
  const { isLoading, isFetching, data, isError, error } = useTodoListsData(
    onSuccess,
    onError
  );

  // add todo
  const handleAddTodo = () => {
    console.log("todo -", todo);
    addTodo({ todo, note });
    setTodo("");
    setNote("");
  };

  const { mutate: addTodo } = useAddTodoData();

  // delete a todo
  const handleDeleteTodo = (todoId) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      axios
        .delete(`http://localhost:4001/todolist/${todoId}`)
        .then((res) => res.data)
        .catch((error) => error.message);
    }
    console.log("deleted!");
  };

  // ***
  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="bg-[url('https://tailwindcss.com/_next/static/media/docs-dark@tinypng.a8984b7fb44a4f8232d04de50220ab31.png')] h-full w-full bg-cover bg-center m-x-30 pl-4 pt-3">
      <div>
        <form>
          <label
            for="search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="search"
              class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div>
        <label
          for="Update your Todo"
          className="block mb-2 pt-7 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Update your TodoList
        </label>
        <div className="flex">
          <form>
            <input
              onChange={(e) => setTodo(e.target.value)}
              type="text"
              id="input"
              value={todo}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="type your todo here"
              required
            />

            <label
              for="note"
              className="block mb-2 pt-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Notes:
            </label>
            <textarea
              onChange={(e) => setNote(e.target.value)}
              type="text"
              id="note"
              value={note}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              rows="10"
              cols="70"
              required
            />

            <button
              type="submit"
              onClick={() => {
                handleAddTodo();
              }}
              className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 mr-2 mb-0.9 "
            >
              Add Todo
            </button>
          </form>
        </div>
      </div>
      {data?.data.map((todolist) => {
        return (
          <div key={todolist.id} className="flex ">
            <ul>
              <li className="text-black mt-3 mb-2 w-full rounded-md p-2 font-medium  hover:bg-sky-blue/[0.8] hover:text-white ">
                <Link to={`/todolist/${todolist.id}`}>{todolist.todo}</Link>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => handleDeleteTodo(todolist.id)}
              className="text-gray-900 bg-gradient-to-r from-teal-100 to-lime-100 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-100 dark:focus:ring-teal-400 font-medium rounded-lg text-sm px-2 py-2 ml-4 mr-2 mb-3 mt-3 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoPage;
