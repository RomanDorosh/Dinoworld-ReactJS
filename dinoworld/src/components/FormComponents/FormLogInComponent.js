import { useState } from "react";
import Home from "../../pages/Home";
import FormLogIn from "./FormLogIn";
// import FormSuccessLogIn from "./FormSuccessLogIn";

const FormLogInComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      {!isSubmitted ? (
        <FormLogIn submitForm={submitForm} />
      ) : (
        // <FormSuccessLogIn />
        <Home />
      )}
    </div>
  );
};

export default FormLogInComponent;
