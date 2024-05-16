import React from 'react';

const CHILD = (props) => {
    const data = "I Am Child2";

    props.onData(data);
  return (
    <div>
        {props.data}
    </div>
  )
}

export default CHILD;