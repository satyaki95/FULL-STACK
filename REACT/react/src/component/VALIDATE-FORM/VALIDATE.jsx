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
    validationSchema: yup.object({
      name: yup.string().min(2, "Name must have 2 caracter").required(),
      emaail: yup.string().email().required(),
      password: yup.string().min(6, "Password must have 6 caracter").required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  const nameError = formik.touched.name && formik.errors.name && <span style={{ color: "red" }}>{formik.errors.name}</span>;
  const emailError = formik.touched.email && formik.errors.email && <span style={{ color: "red" }}>{formik.errors.email}</span>;
  const passwordError = formik.touched.password && formik.errors.password && <span style={{ color: "red" }}>{formik.errors.password}</span>;

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
            required
          />
          <br />
          {nameError}
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
            <br />
            {emailError}
          </div>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
          <br />
          {passwordError}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default VALIDATE;
