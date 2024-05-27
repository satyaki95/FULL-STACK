import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";

const VALIDATE = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  return (
    <div>
      <h2>User Signe Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default VALIDATE;
