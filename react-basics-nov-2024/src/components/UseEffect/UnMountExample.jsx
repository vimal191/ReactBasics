import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [incrementor,setIncrementor] = useState(0);
  useEffect(() => {
    console.log('Timer Component Mounted');

    let i=0;

    const interval = setInterval(() => {
      setIncrementor(i++);
      console.log('Timer running...');
    }, 1000);

    // Cleanup function to clear the timer on unmount
    return () => {
      console.log('Timer Component Unmounted');
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures this runs only once (on mount and unmount)

  return <div>Timer is running. Check the console! {incrementor}</div>;
};

const UnMountExample = () => {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? 'Stop Timer' : 'Start Timer'}
      </button>
      {showTimer && <Timer />}
    </div>
  );
};

export default UnMountExample;