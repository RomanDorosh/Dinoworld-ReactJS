import { useState, useEffect, useContext } from "react";
import { urlApi, DinoContext } from "../../App";
import { useParams } from "react-router-dom";

//Creating a custom hook for form validation

const useFormEditDino = (callback, validateForm) => {
  //Assign default values to every property of values object
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

  //Using useParams hook get ID of dino that was clicked
  const { ID } = useParams();

  //Making a fetch  with use effect, with dependencie of ID
  useEffect(() => {
    fetch(`${urlApi}/dinosaur/${ID}`)
      .then(resp => resp.json())
      .then(resp => {
        setValues(resp);
      })
      .catch(err => console.log(err));
  }, [ID]);

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

    //Check if object of values have some errors, is so we stop executing handle submit function
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
    formData.append("period", values.period.ID); //We need to send ID, not name to API
    formData.append("diet", values.diet.ID); //We need to send ID, not name to API
    formData.append("continent", values.continent.ID); //We need to send ID, not name to API
    formData.append("top", values.top * 1); // Convert boolean to a number for API
    formData.append("info", values.info);
    formData.append("img", values.img);

    //Make POST with users jwt(need to have role ADMIN)
    fetch(`${urlApi}/dinosaur/edit/${ID}`, {
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

  //Check if there are not errors and if not then return isSubmitting
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleFile, handleChange, values, handleSubmit, errors };
};

export default useFormEditDino;
