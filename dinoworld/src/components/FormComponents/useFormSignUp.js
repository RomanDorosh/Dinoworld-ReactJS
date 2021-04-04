import { useState, useEffect } from "react";
import { urlApi } from "../../App";

//Creating a custom hook for form validation

const useFormSignUp = (callback, validateFormSignUp) => {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    birthdate: "",
    username: "",
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

    const currentErrors = validateFormSignUp(values);
    setErrors(currentErrors);

    if (Object.values(currentErrors).some(error => error)) {
      return;
    }

    setErrors(validateFormSignUp(values));
    setIsSubmitting(true);

    fetch(`${urlApi}/register/user`, {
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
          console.log(response);
        })
        .catch(error => console.log("Erorr: ", error))
    );
  };

  //Check if there are not errors and if not then return isSubmitting
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useFormSignUp;
