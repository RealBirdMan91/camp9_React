import { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

function Todo() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [todo, setTodo] = useState<Todo[]>([]);

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      try {
        const { data } = (await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        )) as { data: Todo[] };
        console.log(data);
        setTodo(data);
      } catch (err) {
        const error = err as string;
        setIsError(true);
        setError(error);
      }
    }

    getData();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <h1>is Loading</h1>;
  }

  if (isError) {
    console.log(error);
    return <h1>something went wrong</h1>;
  }

  return (
    <div>
      {todo.map((item) => (
        <h2>{item.title}</h2>
      ))}
    </div>
  );
}

export default Todo;
