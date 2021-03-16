import React from "react";
import "./Form.css";
import useForm from "./useForm";
import validateForm from "./validateForm";

const FormLogIn = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validateForm
  );

  return (
    <div className="form-content">
      <form action="" onSubmit={handleSubmit}>
        <h1>Begin your journey in DinoWord by creating an account</h1>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Your email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="input-field"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {/* If value of property name is empty it will return value 
          of "name" property of "errors" object inside of parragraph. 
          The same for every input field*/}
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Your password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="input-field"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default FormLogIn;