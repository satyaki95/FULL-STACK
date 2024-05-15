import React from 'react';
import { useState } from 'react';

const UPDATE = () => {
    const [count,setCount] = useState(0);

    const handleClick = () => {
        setCount((prevCount) => prevCount + 1); // 0 + 1 = 1
        setCount((prevCount) => prevCount + 1); // 2 + 1 = 3
        setCount((prevCount) => prevCount + 1); // 1 + 1 = 2
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleClick}>+</button>
    </div>
  )
}

export default UPDATE;