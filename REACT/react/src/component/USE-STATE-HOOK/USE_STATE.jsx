import React, { useState } from 'react';

const USE_STATE = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default USE_STATE;