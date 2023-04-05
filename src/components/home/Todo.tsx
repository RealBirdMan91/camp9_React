import { useQuery } from "../../hook/useQuery";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

function Todo() {
  const { isError, error, responseVal, isLoading } = useQuery<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const {
    isError: isUserError,
    error: userError,
    responseVal: user,
    isLoading: isUserLoading,
  } = useQuery<User>("https://jsonplaceholder.typicode.com/user");

  if (isLoading) {
    return <h1>is Loading</h1>;
  }

  if (isError) {
    console.log(error);
    return <h1>something went wrong</h1>;
  }

  return (
    <div>
      {responseVal?.map((item) => (
        <h2>{item.title}</h2>
      ))}
    </div>
  );
}

export default Todo;
