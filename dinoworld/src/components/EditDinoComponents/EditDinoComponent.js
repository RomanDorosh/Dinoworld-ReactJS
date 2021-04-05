import { useState } from "react";
import EditDinoForm from "./EditDinoForm";
import FormSuccessEditDino from "./FormSuccessEditDino";

const EditDinoComponent = () => {
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
        <EditDinoForm submitForm={submitForm} />
      ) : (
        <FormSuccessEditDino />
      )}
    </div>
  );
};

export default EditDinoComponent;
