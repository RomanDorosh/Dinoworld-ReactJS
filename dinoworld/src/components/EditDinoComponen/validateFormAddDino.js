export default function validateForm(values) {
  /*Validating every input field of our form assigning property to 
"error" object and return it*/
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.weight.trim()) {
    errors.weight = "Weight is required";
  }

  if (!values.height) {
    errors.height = "Height is required";
  }

  if (!values.lenght) {
    errors.lenght = "Length is required";
  }

  if (!values.top_speed) {
    errors.top_speed = "Top speed is required";
  } 

  if (!values.diet) {
    errors.diet = "Diet is required";
  }

  if (!values.continent) {
    errors.continent = "Continent is required";
  } 

  
  return errors;
}
