
// import React, { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // Initialize state
//     this.state = {
//       count: 0,
//     };
//   }

//   // Increment the count
//   increment = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };

//   // Decrement the count
//   decrement = () => {
//     this.setState((prevState) => ({
//       count: prevState.count - 1,
//     }));
//   };

//   // Reset the count
//   reset = () => {
//     this.setState({ count: 0 });
//   };

//   render() {
//     return (
//       <div>
//         <p>Current Count: {this.state.count}</p>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>
//         <button onClick={this.reset}>Reset</button>
//       </div>
//     );
//   }
// }

// export default Counter;


import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  
  const decrement = () => {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}


// import React, { useReducer } from "react";

// // Define the reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return  state + 1 ;
//     case "decrement":
//       return state - 1 ;
//     case "reset":
//       return  0 ;
//     default:
//       throw new Error("Invalid action type");
//   }
// }

// export default function Counter() {
//   const [state, dispatch] = useReducer(reducer, 0);

//   return (
//     <div>
//       <p>Current Count: {state}</p>
//       <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </div>
//   );
// }
