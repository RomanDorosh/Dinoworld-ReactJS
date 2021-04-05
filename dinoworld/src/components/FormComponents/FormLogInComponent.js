import { useState } from "react";
import FormLogIn from "./FormLogIn";
import FormSuccessLogIn from "./FormSuccessLogIn";

const FormLogInComponent = () => {
  //Assigning to false until the worm will be filled correctly
  const [isSubmitted, setIsSubmitted] = useState(false);

  //If validation was completed without errors this function is invoked and assign to true isSubmitted
  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    //If true then return succes form component
    <div>
      {!isSubmitted ? (
        <FormLogIn submitForm={submitForm} />
      ) : (
        <FormSuccessLogIn />
      )}
    </div>
  );
};

export default FormLogInComponent;
