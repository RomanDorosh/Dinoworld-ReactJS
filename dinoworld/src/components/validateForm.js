export default function validateForm(values) {
  /*Validating every input field of our form assigning property to 
"error" object and return it*/
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.lastname.trim()) {
    errors.lastname = "Lastname is required";
  }

  if (!values.birthdate) {
    errors.birthdate = "Birthdate is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 5) {
    errors.password = "Password needs to be 5 characters or more";
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Confirm your password is required";
  } else if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = "Passwords do not match";
  }

  return errors;
}
