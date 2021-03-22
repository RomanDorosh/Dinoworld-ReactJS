import { useState, useEffect } from "react";

//Creating a custom hook for form validation

const useFormSignUp = (callback, validateForm) => {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    birthdate: "",
    email: "",
    password: "",
    passwordConfirm: ""
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

    setErrors(validateForm(values));
    setIsSubmitting(true);
    console.log(errors);
    console.log(values);

    // fetch("http://localhost:8000/login", {
    //   method: "POST",
    //   cors: "CORS",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(values)
    // }).then(response =>
    //   response
    //     .json()
    //     .then(response => {
    //       console.log("Respuesta ok: ", response);
    //       localStorage.setItem("mitoken", response.token);

    //       const decoded = jwt_decode(response.token);
    //       console.log(decoded);
    //     })
    //     .catch(error => console.log("Erorr: ", error))
    // );
  };

  //Check if there are not errors and if not then submin
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useFormSignUp;
