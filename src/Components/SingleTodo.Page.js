import { useParams } from "react-router";
import { useSingleTodoData } from "../QueryHooks/useSingleTodoData";

function SingleTodo() {
  const { todoId } = useParams();
  console.log(todoId);

  const { isLoading, data, isError, error } = useSingleTodoData(todoId);
  console.log("data -", data);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className="p-8">
      {data.data.id}. {data.data.todo}
      <p className="text-lg">{data.data.note}</p>
    </div>
  );
}

export default SingleTodo;
