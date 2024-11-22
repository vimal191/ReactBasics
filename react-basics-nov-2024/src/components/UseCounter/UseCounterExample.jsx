import React from "react";
import useCounter from '../../hooks/useCounter.js' 

function UseCounterExample() {
  const { count, increment, decrement, reset } = useCounter(10); // Start at 10

  return (
    <div>
      <h1>Custom Hook Example: useCounter</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default UseCounterExample;