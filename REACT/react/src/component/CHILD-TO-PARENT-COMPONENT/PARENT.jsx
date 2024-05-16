import React from 'react';
import CHILD from './CHILD';

const PARENT = () => {
    const data = "I Am Parrent";
    const handleChildData = (childData) => {
        console.log(childData);
    }
  return (
    <div>
        <CHILD data={data} onData={handleChildData}/>
    </div>
  )
}

export default PARENT;