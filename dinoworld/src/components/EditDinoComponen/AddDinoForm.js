import React from "react";
import { urlApi } from "../../App";
import "../FormComponents/Form.css";
import useFormAddDino from "./useFormAddDino";
import validateFormAddDino from "./validateFormAddDino";



export default function AddDinoForm({submitForm}) {
  const { handleChange, values, handleSubmit, errors } = useFormAddDino(
    submitForm,
    validateFormAddDino
  );




  // const token = localStorage.getItem("mitoken");

  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // };

  // fetch(`${urlApi}/dinosaur`, config)
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  //   .catch(err => console.log("Error: ", err));

  return (
    <div className="form-content">
      <form action="" onSubmit={handleSubmit}>
        <h1>Create a new dino in few steps</h1>
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">
            Dinosaur name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="input-field"
            placeholder="Enter dino name"
            //   value={values.name}
            //   onChange={handleChange}
          />
          {/* If value of property name is empty it will return value 
          of "name" property of "errors" object inside of parragraph. 
          The same for every input field*/}
          {/* {errors.name && <p>{errors.name}</p>} */}
        </div>
        <div className="form-inputs">
          <label htmlFor="weight" className="form-label">
            Weight of dinosaur
          </label>
          <input
            id="weight"
            type="text" // maybe need to change to a number?
            name="weight"
            className="input-field"
            placeholder="Enter weight of dino"
            //   value={values.lastname}
            //   onChange={handleChange}
          />
          {/* {errors.lastname && <p>{errors.lastname}</p>} */}
        </div>
        <div className="form-inputs">
          <label htmlFor="height" className="form-label">
            Height of dinosaur
          </label>
          <input
            id="height"
            type="text" // maybe need to change to a number?
            name="height"
            className="input-field"
            placeholder="Enter height of dino"
            //   value={values.birthdate}
            //   onChange={handleChange}
          />
          {/* {errors.birthdate && <p>{errors.birthdate}</p>} */}
        </div>
        <div className="form-inputs">
          <label htmlFor="lenght" className="form-label">
            Enter length of dinosaur
          </label>
          <input
            id="lenght"
            type="email" // maybe need to change to a number?
            name="lenght"
            className="input-field"
            placeholder="Enter length of dino"
            //   value={values.email}
            //   onChange={handleChange}
          />
          {/* {errors.email && <p>{errors.email}</p>} */}
        </div>
        <div className="form-inputs">
          <label htmlFor="top_speed" className="form-label">
            Enter top speed of dinosaur
          </label>
          <input
            id="top_speed"
            type="text" // maybe need to change to a number?
            name="top_speed"
            className="input-field"
            placeholder="Enter top speed of dinos"
            //   value={values.password}
            //   onChange={handleChange}
          />
          {/* {errors.password && <p>{errors.password}</p>} */}
        </div>
        <div className="form-inputs">
          <label htmlFor="period" className="form-label">
            Choose period when lived dinosaur:
          </label>
          <select
            id="period"
            name="period"
            className="input-field"
            //   value={values.passwordConfirm}
            //   onChange={handleChange}
          >
            <option value="1">Triassic</option>
            <option value="2">Jurasic</option>
            <option value="3">Cretaceous</option>
          </select>
          {/* {errors.passwordConfirm && <p>{errors.passwordConfirm}</p>} */}
        </div>
        <div className="form-inputs">
          <label htmlFor="diet" className="form-label">
            Choose diet of dinosaur:
          </label>
          <select
            id="diet"
            name="diet"
            className="input-field"
            //   value={values.passwordConfirm}
            //   onChange={handleChange}
          >
            <option value="1">Carnivore</option>
            <option value="2">Herbivore</option>
            <option value="3">Piscivore</option>
          </select>
          {/* {errors.passwordConfirm && <p>{errors.passwordConfirm}</p>} */}
        </div>
        <div className="form-inputs">
          <label htmlFor="continent" className="form-label">
            Choose continent where was found dinosaur:
          </label>
          <select
            id="continent"
            name="continent"
            className="input-field"
            //   value={values.passwordConfirm}
            //   onChange={handleChange}
          >
            <option value="1">South America</option>
            <option value="2">North America</option>
            <option value="3">Europe</option>
            <option value="4">Asia</option>
            <option value="5">Africa</option>
            <option value="6">Australia</option>
          </select>
          {/* {errors.passwordConfirm && <p>{errors.passwordConfirm}</p>} */}
        </div>
        <div className="form-inputs">
          <label htmlFor="img" className="form-label">
            Add an awesome image of dinosaur
          </label>
          <input
            className="form-control-file mb-3"
            type="file"
            name="img"
            // onChange={handleFile}
          />
          {/* {errors.passwordConfirm && <p>{errors.passwordConfirm}</p>} */}
        </div>
        <button type="submit">Add new dinosaur</button>
      </form>
    </div>
  );
}
