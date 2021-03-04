import { useState } from "react";

//Creating a custom hook for form validation

const useForm = (validateForm) => {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    birthdate: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  //Prefent default refresh when submitting a form

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateForm(values));
    console.log(errors);
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
