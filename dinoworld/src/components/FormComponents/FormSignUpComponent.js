import { useState } from "react";
import FormSignUp from "./FormSignUp";
import FormSuccess from "./FormSuccess";

const FormSignUpComponent = () => {
  //Assigning to false until the worm will be filled correctly
  const [isSubmitted, setIsSubmitted] = useState(false);

  //If validation was completed without errors this function is invoked and assign to true isSubmitted
  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    //If true then return succes form component
    <div>
      {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};

export default FormSignUpComponent;
