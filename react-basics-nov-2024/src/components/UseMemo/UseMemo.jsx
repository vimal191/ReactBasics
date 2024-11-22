import React, { useState, useMemo } from "react";

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

//   Expensive computation with use Memo
  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += 1;
    }
    return result;
  }, [count]); // Recomputed only when 'count' changes

// Expensive computation without use Memo
//   const calcuate=() => {
//     console.log("Calculating...");
//     let result = 0;
//     for (let i = 0; i < 1000000000; i++) {
//     result += 1;
//     }
//     return result;
//   }; // Recomputed only when 'count' changes
//   const expensiveValue = calcuate();

  const inexpensiveValue = input;

  return (
    <div>
      <h1>Expensive Calculation Example</h1>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Expensive Count</button>
      <p>Count: {count}</p>
      <p>InExpensive Value: {inexpensiveValue}</p>
      <button onClick={() => setInput(input + 1)}>Increment Inexpensive Count</button>
    </div>
  );
}

export default UseMemoExample;
