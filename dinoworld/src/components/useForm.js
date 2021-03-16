import { useState, useEffect } from "react";

//Creating a custom hook for form validation

const useForm = (callback, validateForm) => {
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

  //Prevent default refresh when submitting a form

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validateForm(values));
    setIsSubmitting(true);
    console.log(errors);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
