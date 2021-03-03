import React from "react";
import "./Form.css";

const FormSignUp = () => {
  return (
    <div id="bg-image-form">
      <div className="form-content">
        <form action="">
          <h1>Begin your journey in DinoWord by creating an account</h1>
        </form>
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">
            Your name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            classname="input-field"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="lastname" className="form-label">
            Your lastname
          </label>
          <input
            id="lastname"
            type="text"
            name="lastname"
            classname="input-field"
            placeholder="Enter your lastname"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="birthdate" className="form-label">
            Your birthdate
          </label>
          <input
            id="birthdate"
            type="date"
            name="birthdate"
            classname="input-field"
            placeholder="Enter your birthdate"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Your email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            classname="input-field"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Your password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            classname="input-field"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Repeat password
          </label>
          <input
            id="napassword2me"
            type="password"
            name="password"
            classname="input-field"
            placeholder="Repeat your password"
          />
        </div>
        <button type="submit">Sign Up</button>
      </div>
    </div>
  );
};

export default FormSignUp;
