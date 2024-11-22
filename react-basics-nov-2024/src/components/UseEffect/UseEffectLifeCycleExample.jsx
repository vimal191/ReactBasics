import React, { useState, useEffect } from 'react';

const UseEffectLifeCycleExample = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      // Runs on mount
      console.log('loading');
      document.title = `Count: ${count}`;
  
      return () => {
        // Runs on unmount
        console.log('Clearing');
        document.title = 'React App';
      };
    }, []); // Empty dependency array ensures this runs only once (on mount/unmount)
  
    useEffect(() => {
      // Runs whenever `count` changes
      console.log('updating');
      
      document.title = `Count: ${count}`;
    }, [count]); // Dependency array includes `count`
  
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  };;

export default UseEffectLifeCycleExample;