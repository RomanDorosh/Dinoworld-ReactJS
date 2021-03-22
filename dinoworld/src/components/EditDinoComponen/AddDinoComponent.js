import { useState } from "react";
import AddDinoForm from "./AddDinoForm";
import FormSuccessAddDino from "./FormSuccessAddDino";


const AddDinoComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      {!isSubmitted ? <AddDinoForm submitForm={submitForm} /> : <FormSuccessAddDino />}
    </div>
  );
};

export default AddDinoComponent;
