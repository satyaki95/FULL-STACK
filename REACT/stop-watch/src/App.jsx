import React,{ useState, useRef } from 'react';
import './App.css';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef();

  const start = () => {
    if (!isRunning) {
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 100);
      setIsRunning(true);
    }
  };

  const stop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const pad = (num) => num.toString().padStart(2, '0');
    const milliseconds = pad(Math.floor((time % 1000) / 10));
    const seconds = pad(Math.floor((time / 1000) % 60));
    const minutes = pad(Math.floor((time / (1000 * 60)) % 60));
    const hours = pad(Math.floor((time / (1000 * 60 * 60)) % 24));
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div>
      <div>{formatTime(time)}</div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
