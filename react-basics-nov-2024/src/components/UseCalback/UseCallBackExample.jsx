import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
    console.log("Child rendered");
    return <button onClick={onClick}>Click Me</button>;
  });

function UseCallBackExample() {
  const [count, setCount] = useState(0);

  // Memoize the handleClick function
  const handleClick = useCallback(() => {
    console.log('Child button clicked');
  }, []); // Empty dependency array means `handleClick` never changes.

//    // Memoize the handleClick function
//    const handleClick = () => {
//     console.log('Child button clicked');
//   }; 

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default UseCallBackExample;