import React, { useReducer } from 'react';

const initialState = {
  str: '',
  currentInput: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_STR':
      return {
        ...state,
        str: action.payload,
      };
    case 'APPEND':
      return {
        ...state,
        currentInput: [...state.currentInput, state.str],
        str: '',
      };
    case 'UNDO':
      return {
        ...state,
        currentInput: state.currentInput.slice(0, -1),
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = event => {
    dispatch({ type: 'SET_STR', payload: event.target.value });
  };

  const handleAppend = () => {
    dispatch({ type: 'APPEND' });
  };

  const handleUndo = () => {
    dispatch({ type: 'UNDO' });
  };

  return (
    <div>
      <input type="text" value={state.str} onChange={handleInputChange} />
      <button onClick={handleAppend}>Append</button>
      <button onClick={handleUndo}>Undo</button>
      <div>
        {state.currentInput.map((item, index) => {
          return <span key={index}>{item} </span>;
        })}
      </div>
    </div>
  );
}

export default App;
