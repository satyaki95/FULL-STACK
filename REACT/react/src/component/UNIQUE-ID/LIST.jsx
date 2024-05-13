import React from 'react';
import { v4 as uuidv4 } from "uuid";

const todos = [
    {
        id: uuidv4(),
        title: "todo1",
        desc: "todo1 description 1"
    },
    {
        id: uuidv4(),
        title: "todo2",
        desc: "todo2 description 2"
    },
    {
        id: uuidv4(),
        title: "todo3",
        desc: "tod3 description 3"
    },
    {
        id: uuidv4(),
        title: "todo4",
        desc: "todo4 description 4"
    },
    {
        id: uuidv4(),
        title: "todo5",
        desc: "todo5 description 5"
    },
    {
        id: uuidv4(),
        title: "todo6",
        desc: "todo6 description 6"
    }
];
const LIST = () => {
  return (
    <div>
      {todos.map((todo) => {
        const {id, title, desc} = todo;
        return <div key={id}>
           <h3>{title}</h3>
           <p>{desc}</p> 
        </div>
      })}
    </div>
  );
}

export default LIST;
