import { useState } from "react";
import EditDinoForm from "./EditDinoForm";
import FormSuccessEditDino from "./FormSuccessEditDino";

const EditDinoComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      {!isSubmitted ? (
        <EditDinoForm submitForm={submitForm} />
      ) : (
        <FormSuccessEditDino />
      )}
    </div>
  );
};

export default EditDinoComponent;
