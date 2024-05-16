import React from 'react';
import CHILD from './CHILD';


const STATE_PARENT = () => {
    const handleNewTodo = (newTodo) => {
        console.log(newTodo);
    }
  return (
    <div>
    <CHILD onHandleNewTodo={handleNewTodo}/>
    </div>
  )
}

export default STATE_PARENT;