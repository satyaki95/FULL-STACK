import React from 'react';
import './App.css';
//import "bootstrap/dist/css/bootstrap.min.css";
import UNIQUE from './component/UNIQUE-ID/UNIQUE';
import NESTED from './component/NASTED-MAPPING/NESTED';
import CLASS from './component/CLASS-COMPONENT/CLASS';
import ICON from './component/REACT-ICONS/ICON';
import BOOTSTRAP from './component/BOOTSTRAP/BOOTSTRAP';
import STATE from './component/STATE/STATE';

function App() {

  return (
    <div>
      {/* <UNIQUE />
      <NESTED />
      <CLASS />
      <ICON />
      <BOOTSTRAP /> */}
      <STATE />
    </div>
  )
}

export default App;