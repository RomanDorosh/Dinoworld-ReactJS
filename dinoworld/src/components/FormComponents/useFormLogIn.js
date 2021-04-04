import { useState, useEffect } from "react";
// import jwt_decode from "jwt-decode";
import { urlApi } from "../../App";
import { DinoContext } from "../../App";
import { useContext } from "react";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";

//Creating a custom hook for form validation

const useForm = (callback, validateForm) => {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const { setJwt, setUserEmail, setUserRoles } = useContext(DinoContext);

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
    const currentErrors = validateForm(values);
    setErrors(currentErrors);

    if (currentErrors.password || currentErrors.username) {
      return;
    }
    setIsSubmitting(true);

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
            Swal.fire(`Invalid email or password`);
            return;
          } else {
            localStorage.setItem("mitoken", response.token);

            const decoded = jwtDecode(response.token);
            localStorage.setItem("userEmail", decoded.username);
            localStorage.setItem("userRoles", decoded.roles);

            setJwt(response.token);
            setUserRoles(decoded.roles);
            setUserEmail(decoded.username);
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
