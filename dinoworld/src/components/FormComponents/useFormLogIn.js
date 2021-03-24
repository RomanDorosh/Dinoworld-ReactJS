import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { urlApi } from "../../App";
import { DinoContext } from "../../App";
import { useContext } from "react";

//Creating a custom hook for form validation

const useForm = (callback, validateForm) => {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const { jwt, setJwt } = useContext(DinoContext);

  const [errors, setErrors] = useState({});

  //Assign isSubmitteng to false before handleSubmit is processed
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    //Prevent default refresh when submitting a form

    e.preventDefault();
    console.log(errors);
    setErrors(validateForm(values));
    setIsSubmitting(true);
    // console.log(errors);
    console.log(values);

    fetch(`${urlApi}/login`, {
      method: "POST",
      cors: "CORS",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    }).then(response =>
      response
        .json()
        .then(response => {
          console.log("Respuesta: ", response);
          if (response.code === 401) {
            alert("Invalid email or password");
          } else {
            localStorage.setItem("mitoken", response.token);
            // const decoded = jwt_decode(response.token);

            setJwt(response.token);
          }
        })
        .catch(error => console.log("Erorr: ", error))
    );
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
