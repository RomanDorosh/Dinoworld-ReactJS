import React from "react";
import { urlApi } from "../../App";

// import { values } from "./useFormSignUp";

function FormSuccess() {
  // console.log(values);
  // fetch(`${urlApi}/register/user`, {
  //   method: "POST",
  //   cors: "CORS",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(values)
  // }).then(response =>
  //   response
  //     .json()
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => console.log("Erorr: ", error))
  // );

  return (
    <div>
      <div>Thanks for create your account</div>
      <img src="" alt="success" />
    </div>
  );
}

export default FormSuccess;
