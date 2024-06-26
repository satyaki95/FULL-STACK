import React, { useState } from "react";
import style from "./form.module.css";

const CONTROLLED = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value)
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let userInfo = {
        name,
        email,  // if key and value is same
        password
    }
    console.log(userInfo); // from useState
  };
  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default CONTROLLED;
