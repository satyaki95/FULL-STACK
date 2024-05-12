import { useState } from 'react';
import './App.css';

function App() {
  const [str, setStr] = useState("");
  const [currentInput, setCurrentInput] = useState([]);

  const append = () => {
    return setCurrentInput(currentInput => [...currentInput, str]);
  }

  const undo = () => {
    currentInput.pop();
    setCurrentInput(currentInput => [...currentInput]);
  }

  return (
    <div>
      <input type="text" onChange={(event) => setStr(event.target.value)}/>
      <button onClick={append}>Append</button>
      <button onClick={undo}>Undo</button>
      <div>
        {currentInput.map((item)=>{
          return item + " ";
        })}
      </div>
    </div>
  )
}

export default App;



