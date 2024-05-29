import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TOASTIFY = () => {
    const handleClick =() => {
        toast.success("Add New User",{
            theme: "colored"
        });
        
    }
  return (
    <div>
        <h2>New User</h2>
        <button onClick={handleClick}>Add New User</button>
        <ToastContainer />
    </div>
  )
}

export default TOASTIFY;