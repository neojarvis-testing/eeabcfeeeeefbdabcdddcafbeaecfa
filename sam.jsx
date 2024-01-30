// Sample React Component for IntelliSense Testing

import React, { useState } from 'react';

const MyComponent = () => {
  // State using React Hooks
  const [count, setCount] = useState(0);

  // Event handler function
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // JSX rendering
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default MyComponent;
