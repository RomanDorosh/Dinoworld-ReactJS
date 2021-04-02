export default function validateForm(values) {
  /*Validating every input field of our form assigning property to 
"error" object and return it*/
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.weight) {
    errors.weight = "Weight is required";
  } else if (isNaN(values.weight)) {
    errors.weight = "Need to be a number";
  }

  if (!values.height) {
    errors.height = "Height is required";
  } else if (isNaN(values.height)) {
    errors.height = "Need to be a number";
  }

  if (!values.lenght) {
    errors.lenght = "Length is required";
  } else if (isNaN(values.lenght)) {
    errors.lenght = "Need to be a number";
  }

  if (!values.top_speed) {
    errors.top_speed = "Top speed is required";
  } else if (isNaN(values.top_speed)) {
    errors.top_speed = "Need to be a number";
  }

  if (!values.period) {
    errors.period = "Period is required";
  }

  if (!values.diet) {
    errors.diet = "Diet is required";
  }

  if (!values.continent) {
    errors.continent = "Continent is required";
  }

  return errors;
}
