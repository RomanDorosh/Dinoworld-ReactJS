import { useState, useEffect } from "react";
import { urlApi } from "../../App";

//Creating a custom hook for form validation

const useFormAddDino = (callback, validateFormAddDino) => {
  const [values, setValues] = useState({
    name: "",
    weight: "",
    height: "",
    lenght: "",
    top_speed: "",
    period: "",
    diet: "",
    continent: "",
    top: "",
    info: "",
    img: []
  });

  //
  const [errors, setErrors] = useState({});

  //Assign isSubmitteng to false before handleSubmit is processed
  const [isSubmitting, setIsSubmitting] = useState(false);

  //Handlind form inserts and set them to the values
  const handleChange = e => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  //Handling inserted file (img)

  const handleFile = e => {
    // console.log(values);
    // console.log(e.target);
    const { name, files } = e.target;
    // console.log(name, files);
    setValues({
      ...values,
      [name]: files[0]
    });
  };

  const handleSubmit = e => {
    //Prevent default refresh when submitting a form

    e.preventDefault();

    setErrors(validateFormAddDino(values));
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("weight", values.weight);
    formData.append("height", values.height);
    formData.append("lenght", values.lenght);
    formData.append("top_speed", values.top_speed);
    formData.append("period", values.period);
    formData.append("diet", values.diet);
    formData.append("continent", values.continent);
    formData.append("top", values.top);
    formData.append("info", values.info);
    formData.append("img", values.img);

    console.log(formData);

    fetch(`${urlApi}/register/dinosaur`, {
      method: "POST",
      cors: "CORS",
      body: formData
    }).then(response =>
      response
        .json()
        .then(response => {
          console.log(response);
        })
        .catch(error => console.log("Erorr: ", error))
    );
  };

  //Check if there are not errors and if not then return isSubmitting
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleFile, handleChange, values, handleSubmit, errors };
};

export default useFormAddDino;
