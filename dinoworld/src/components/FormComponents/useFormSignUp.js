import { useState, useEffect } from "react";
import { urlApi } from "../../App";

//Creating a custom hook for form validation

const useFormSignUp = (callback, validateFormSignUp) => {
  //Assign default values to every property of values object
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    birthdate: "",
    username: "",
    password: "",
    passwordConfirm: ""
  });

  //Assign errors to an empty object
  const [errors, setErrors] = useState({});

  //Assign isSubmitteng to false before handleSubmit is processed
  const [isSubmitting, setIsSubmitting] = useState(false);

  //Handlind form inserts and set them to the values
  const handleChange = e => {
    //With destructuring we assign new values and property to the values object
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  //!!!Handle sumbit is need to be rechecked and improved
  const handleSubmit = e => {
    //Prevent default refresh when submitting a form

    e.preventDefault();

    //Check for curent errors befor sending data to the api
    const currentErrors = validateFormSignUp(values);
    setErrors(currentErrors);

    //Check if object of values have some errors, is so we  executing handle submit function
    if (Object.values(currentErrors).some(error => error)) {
      return;
    }

    setIsSubmitting(true);

    //Make post with inserted data to registr user
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
