import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  // Increment the counter
  const increment = () => setCount((prevCount) => prevCount + 1);

  // Decrement the counter
  const decrement = () => setCount((prevCount) => prevCount - 1);

  // Reset the counter
  const reset = () => setCount(initialValue);

  // Return the counter value and controls
  return { count, increment, decrement, reset };
}

export default useCounter;