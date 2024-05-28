import React, { useEffect, useState } from "react";

const USE_EFFECT = () => {
  const [count, setCount] = useState(0);
  const [isLoadding, setIsLoadding] = useState(false);
  
  useEffect(() => {
    console.log(`Rendering`);
  },[count])

  return (
    <div>
        {console.log(`-->`)}
      <h1>Use Effect</h1>
      <h1>Count = {count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setIsLoadding(!isLoadding);
        }}
      >
        isLoading
      </button>
    </div>
  );
};

export default USE_EFFECT;
