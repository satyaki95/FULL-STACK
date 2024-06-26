import React, { useState } from "react";
import style from "./form.module.css";

const OBJECT = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    //const fieldName = e.target.name;

    // if (fieldName === 'name') {
    //   setUser({
    //     name: e.target.value,
    //     email,
    //     password,
    //   });
    // } else if (fieldName === 'email') {
    //   setUser({
    //     name,
    //     email: e.target.value,
    //     password,
    //   });
    // } else if (fieldName === 'password') {
    //   setUser({
    //     name,
    //     email,
    //     password: e.target.value,
    //   });
    // }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user); // from useState
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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

export default OBJECT;
