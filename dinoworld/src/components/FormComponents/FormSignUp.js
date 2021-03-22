import "./Form.css";
import useFormSignUp from "./useFormSignUp";
import validateFormSignUp from "./validateFormSignUp";
import jwt_decode from "jwt-decode";

const FormSignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useFormSignUp(
    submitForm,
    validateFormSignUp
  );

  // const config = {
  //   method: "POST",
  //   mode: "cors",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     username: "mark@mail.com",
  //     password: "dino"
  //   })
  // };
  // // const request = new Request("http://localhost:8000/login", config);
  // fetch("http://localhost:8000/login", config).then(response =>
  //   response
  //     .json()
  //     .then(response => {
  //       console.log("Respuesta ok: ", response);
  //       localStorage.setItem("mitoken", response.token);

  //       const decoded = jwt_decode(response.token);
  //       console.log(decoded);

  //       var decodedHeader = jwt_decode(response.token, { header: true });
  //       console.log(decodedHeader);
  //     })
  //     .catch(error => console.log("Erorr: ", error))
  // );

  return (
    <div className="form-content">
      <form action="" onSubmit={handleSubmit}>
        <h1>Begin your journey in DinoWord by creating an account</h1>
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">
            Your name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="input-field"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
          />
          {/* If value of property name is empty it will return value 
          of "name" property of "errors" object inside of parragraph. 
          The same for every input field*/}
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="lastname" className="form-label">
            Your lastname
          </label>
          <input
            id="lastname"
            type="text"
            name="lastname"
            className="input-field"
            placeholder="Enter your lastname"
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="birthdate" className="form-label">
            Your birthdate
          </label>
          <input
            id="birthdate"
            type="date"
            name="birthdate"
            className="input-field"
            placeholder="Enter your birthdate"
            value={values.birthdate}
            onChange={handleChange}
          />
          {errors.birthdate && <p>{errors.birthdate}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Your email
          </label>
          <input
            id="email"
            type="email"
            name="username"
            className="input-field"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
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
        <div className="form-inputs">
          <label htmlFor="passwordConfirm" className="form-label">
            Repeat password
          </label>
          <input
            id="passwordConfirm"
            type="password"
            name="passwordConfirm"
            className="input-field"
            placeholder="Repeat your password"
            value={values.passwordConfirm}
            onChange={handleChange}
          />
          {errors.passwordConfirm && <p>{errors.passwordConfirm}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default FormSignUp;
