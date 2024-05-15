import React from 'react';
import './App.css';
//import "bootstrap/dist/css/bootstrap.min.css";
import UNIQUE from './component/UNIQUE-ID/UNIQUE';
import NESTED from './component/NASTED-MAPPING/NESTED';
import CLASS from './component/CLASS-COMPONENT/CLASS';
import ICON from './component/REACT-ICONS/ICON';
import BOOTSTRAP from './component/BOOTSTRAP/BOOTSTRAP';
import STATE from './component/STATE/STATE';
import CONDITIONAL_RENDERING from './component/CONDITIONAL-RENDERING/CONDITIONAL_RENDERING';
import ON_CHANGE from './component/EVENT-HANDLER/ON_CHANGE';

function App() {

  return (
    <div>
      {/* <UNIQUE />
      <NESTED />
      <CLASS />
      <ICON />
      <BOOTSTRAP />
      <STATE />
      <CONDITIONAL_RENDERING /> */}
      <ON_CHANGE />
    </div>
  )
}

export default App;