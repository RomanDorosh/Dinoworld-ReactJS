import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

//Creating a custom hook for form validation

const useForm = (callback, validateForm) => {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

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

    fetch("http://localhost:8000/login", {
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
          console.log("Respuesta ok: ", response);
          localStorage.setItem("mitoken", response.token);

          const decoded = jwt_decode(response.token);
          console.log(decoded);
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
