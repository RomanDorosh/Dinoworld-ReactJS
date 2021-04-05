import { useState } from "react";
import AddDinoForm from "./AddDinoForm";
import FormSuccessAddDino from "./FormSuccessAddDino";

const AddDinoComponent = () => {
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
        <AddDinoForm submitForm={submitForm} />
      ) : (
        <FormSuccessAddDino />
      )}
    </div>
  );
};

export default AddDinoComponent;
