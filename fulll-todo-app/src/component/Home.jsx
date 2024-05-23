import React from 'react';
import Todos from './Todos';
import style from './home.module.css';
import NewTodo from './NewTodo';

const dummyTodos = [
    {
        id : 1,
        title : "Todo Title 1",
        desc : "Todo Desc 1"
    },
    {
        id : 2,
        title : "Todo Title 2",
        desc : "Todo Desc 2"
    }
]

const Home = () => {
  return (
    <div className={style.container}>
        <h1 style={{color: "white"}}>Todo App</h1>
        <NewTodo />
        <Todos todos = {dummyTodos}/>
    </div>
  )
}

export default Home;