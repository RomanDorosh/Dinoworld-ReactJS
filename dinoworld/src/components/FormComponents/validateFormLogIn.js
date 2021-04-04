export default function validateFormLogin(values) {
  /*Validating every input field of our form assigning property to 
"error" object and return it*/
  let errors = {};

  //Using email as a username to work with API

  if (!values.username) {
    errors.username = "Email is required";
  } else if (values.code === 401) {
    errors.code = "Email or password are invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 3) {
    errors.password = "Password needs to be 5 characters or more";
  } else if (values.code === 401) {
    errors.code = "Email or password are invalid";
  }

  return errors;
}
