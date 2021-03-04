import { useState } from "react";
import FormSignUp from "./FormSignUp";
import FormSuccess from "./FormSuccess";

const FormComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      <FormSignUp />
      {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};

export default FormComponent;
