import React, { useState } from "react";
import './dynamic.module.css';

const DYNAMIC = () => {
    const [error, setError] = useState(false);
  return (
    <div>
        <button onClick={()=>{setError(!error)}}>Change</button>
      <h1 className= {`${error ? "valid" : "invalid"}`}>DYNAMIC</h1>
    </div>
  );
};

export default DYNAMIC;


// Check video no 47 