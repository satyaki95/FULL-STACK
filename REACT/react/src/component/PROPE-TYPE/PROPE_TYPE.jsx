import React, { useState } from 'react';
import USER from './USER';

const PROPE_TYPE = () => {
  const [userName, setUserName] = useState("Satyaki");
  const [userId, setUserId] = useState();
  return (
    <>
        <USER userName={userName} userId={userId}/>
    </>
  )
}

export default PROPE_TYPE;