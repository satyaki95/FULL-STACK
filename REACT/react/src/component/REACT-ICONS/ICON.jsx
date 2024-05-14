import React from 'react';
import { FaBeer,FaFacebook } from 'react-icons/fa';


const icon = {
  color: "blue",
  fontSize: "3rem",
  margin: "2rem"
}

const ICON = () => {
  return (
    <div>
        <FaBeer style={icon}/>
        <br />
        <FaFacebook style={icon}/>
    </div>
  )
}

export default ICON;

// npm install react-icons --save