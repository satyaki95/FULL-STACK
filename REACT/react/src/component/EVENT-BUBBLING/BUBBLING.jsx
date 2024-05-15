import React from 'react';

const BUBBLING = () => {

    const handleParentClick = (event) => {
        console.log("Parrent", event);
    }

    const handleChildClick = (event) => {
        event.stopPropagation(); // stop Event Bubbling using on child 
        console.log("Child", event);
    }
    const newDiv = {
        backgroundColor : "beige"
    }
  return (
    <div onClick={handleParentClick} style={newDiv}>
        <h1>Welcome</h1>
        <button onClick={handleChildClick}>+</button>
    </div>
  )
}

export default BUBBLING;