import { useEffect, useState } from "react";
import Button from "../shared/Button";
import axios from "axios";

interface Post {
  id: string;
  title: string;
  completed: boolean;
}

function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [inputVal, setInputVal] = useState({ email: "", password: "" });

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(inputVal);
    // doing some axios post
  }

  return (
    <div>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <input
          value={inputVal.email}
          type="text"
          placeholder="email"
          onChange={(e) => setInputVal({ ...inputVal, email: e.target.value })}
        />
        <input
          value={inputVal.password}
          type="text"
          placeholder="password"
          onChange={(e) =>
            setInputVal({ ...inputVal, password: e.target.value })
          }
        />
        <Button variant="primary" type="submit" />
      </form>
      {posts.map((post) => {
        return <h2>{post.title}</h2>;
      })}
    </div>
  );
}

export default Blog;
