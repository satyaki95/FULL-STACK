import React from 'react';
import TODO from './TODO';

const TODOS = (props) => {
  return (
    <div>
        {props.todos.map((todo,index) => (
            <TODO key={index} todo={todo} />
        ))}
    </div>
  )
}

export default TODOS;