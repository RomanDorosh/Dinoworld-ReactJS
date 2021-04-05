import { useState, useEffect, useContext } from "react";

import { urlApi, DinoContext } from "../../App";

//Creating a custom hook for form validation

const useFormAddDino = (callback, validateForm) => {
  //Assign default values to every property of values object
  const [values, setValues] = useState({
    name: "",
    weight: "",
    height: "",
    lenght: "",
    top_speed: "",
    period: "1",
    diet: "1",
    continent: "1",
    top: "0",
    info: "",
    img: []
  });

  const { jwt } = useContext(DinoContext);

  //Assign errors to an empty object
  const [errors, setErrors] = useState({});

  //Assign isSubmitteng to false before handleSubmit is processed
  const [isSubmitting, setIsSubmitting] = useState(false);

  //Handlind form inserts and set them to the values
  const handleChange = e => {
    //With destructuring we assign new values and property to the values object
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  //Handling inserted file (img)
  const handleFile = e => {
    const { name, files } = e.target;

    setValues({
      ...values,
      [name]: files[0]
    });
  };

  //!!!Handle submit is need to be rechecked and improved
  const handleSubmit = e => {
    //Prevent default refresh when submitting a form
    e.preventDefault();

    //Check for curent errors befor sending data to the api
    const currentErrors = validateForm(values);
    setErrors(currentErrors);

    //Check if object of values have some errors, is so we  executing handle submit function
    if (Object.values(currentErrors).some(error => error)) {
      return;
    }

    setIsSubmitting(true);

    //Create FormData to send to the API
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

    //Make POST with users jwt(need to have role ADMIN)
    fetch(`${urlApi}/register/dinosaur`, {
      method: "POST",
      cors: "CORS",
      headers: {
        Authorization: "Bearer " + jwt
      },
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

  //Check if there are not errors and if isSubmitting is true than invoke function callback
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleFile, handleChange, values, handleSubmit, errors };
};

export default useFormAddDino;
