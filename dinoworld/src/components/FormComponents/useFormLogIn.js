import { useState, useEffect } from "react";
import { urlApi } from "../../App";
import { DinoContext } from "../../App";
import { useContext } from "react";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";

//Creating a custom hook for form validation

const useForm = (callback, validateForm) => {
  //Assign default values to every property of values object
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const { setJwt, setUserEmail, setUserRoles } = useContext(DinoContext);

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
    const currentErrors = validateForm(values);
    setErrors(currentErrors);

    //Check if object of values have some errors, is so we  executing handle submit function
    if (currentErrors.password || currentErrors.username) {
      return;
    }
    setIsSubmitting(true);

    //Make post with user data
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
            Swal.fire(`Invalid email or password`); //If credencial is incorrect break fetch with empty return
            //!!!Need to be improved restructured and make a redirect
            return;
          } else {
            //Assign token to a variable in local storage, also user's email and roles
            localStorage.setItem("mitoken", response.token);
            const decoded = jwtDecode(response.token);
            localStorage.setItem("userEmail", decoded.username);
            localStorage.setItem("userRoles", decoded.roles);

            //!!!Need to be revise
            setJwt(response.token);
            setUserRoles(decoded.roles);
            setUserEmail(decoded.username);
          }
        })
        .catch(error => console.log("Erorr: ", error))
    );
  };

  //Check if there are not errors and if isSubmitting is true than invoke function callback
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
