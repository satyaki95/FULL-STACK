import React from 'react';


const CHILD = (props) => {
    props.onHandleNewTodo({
        title : "Hello Todo"
    });
  return (
    <div>
        <h1>Hello</h1>
    </div>
  )
}

export default CHILD;