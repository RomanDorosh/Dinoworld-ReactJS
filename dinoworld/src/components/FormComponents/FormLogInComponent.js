import { useState } from "react";
import FormLogIn from "./FormLogIn";
import FormSuccessLogIn from "./FormSuccessLogIn";
// import { values } from "./useFormLogIn";
// import FormSuccessLogIn from "./FormSuccessLogIn";

const FormLogInComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // console.log(values);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      {!isSubmitted ? (
        <FormLogIn submitForm={submitForm} />
      ) : (
        <FormSuccessLogIn />
        // <Home />
      )}
    </div>
  );
};

export default FormLogInComponent;
