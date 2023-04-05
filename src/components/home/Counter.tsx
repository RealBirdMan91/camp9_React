import { useState } from "react";
import Button from "../shared/Button";

function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <div className="flex items-center justify-center mt-10">
      <Button
        type="submit"
        onClick={() => {
          setNumber((prevValue) => prevValue - 1);
          setNumber((prevValue) => prevValue - 1);
        }}
        variant="primary"
      >
        decrement
      </Button>
      <h2 className="font-bold text-3xl">{number}</h2>
      <Button onClick={() => setNumber(number + 1)} variant="primary">
        Increment
      </Button>
    </div>
  );
}

export default Counter;
