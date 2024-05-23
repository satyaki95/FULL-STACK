import React, { useState } from 'react';
import TODOS from './TODOS';
import NEW_TODO from './NEW_TODO';

const HOME = () => {
    const [todos, setTodos] = useState([]);

    const handleNewTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    }
  return (
    <div>
        <NEW_TODO onTodo={handleNewTodo} />
        <TODOS todos={todos} />
    </div>
  )
}

export default HOME;