import logo from './logo.svg';
import './App.css';

function App() {
  const chackSpeed = (e) => {
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>SPEED
        <input onChange={chackSpeed} type="number"></input>
      </header>
    </div>
  );
}

export default App;
