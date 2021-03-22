import { useState } from "react";
import FormSignUp from "./FormSignUp";
import FormSuccess from "./FormSuccess";

const FormSignUpComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};

export default FormSignUpComponent;
