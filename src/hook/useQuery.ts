import { useState, useEffect } from "react";
import axios from "axios";

export function useQuery<T>(url: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [responseVal, setResponseVal] = useState<T | null>(null);

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      try {
        const { data } = (await axios.get(url)) as { data: T };
        console.log(data);
        setResponseVal(data);
      } catch (err) {
        const error = err as string;
        setIsError(true);
        setError(error);
      }
    }

    getData();
    setIsLoading(false);
  }, []);

  return { isLoading, responseVal, error, isError };
}
