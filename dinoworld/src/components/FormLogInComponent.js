import { useState } from "react";
import FormLogIn from "./FormLogIn";
import FormSuccess from "./FormSuccess";

const FormComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      {!isSubmitted ? <FormLogIn submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};

export default FormComponent;
