import React from "react";
import "../FormComponents/Form.css";
import useFormAddDino from "./useFormAddDino";
//Using the same validate component
import validateForm from "../EditDinoComponents/validateForm";

export default function AddDinoForm({ submitForm }) {
  //Using destructuring we assign this elements to custom hook
  const {
    handleFile,
    handleChange,
    values,
    handleSubmit,
    errors
  } = useFormAddDino(submitForm, validateForm);

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
            value={values.name}
            onChange={handleChange}
          />
          {/* If value of property name is empty it will return value 
          of "name" property of "errors" object inside of parragraph. 
          The same for every input field*/}
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="weight" className="form-label">
            Weight of dinosaur
          </label>
          <input
            id="weight"
            type="text"
            name="weight"
            className="input-field"
            placeholder="Enter weight of dino"
            value={values.weight}
            onChange={handleChange}
          />
          {errors.weight && <p>{errors.weight}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="height" className="form-label">
            Height of dinosaur
          </label>
          <input
            id="height"
            type="text"
            name="height"
            className="input-field"
            placeholder="Enter height of dino"
            value={values.height}
            onChange={handleChange}
          />
          {errors.height && <p>{errors.height}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="lenght" className="form-label">
            Enter length of dinosaur
          </label>
          <input
            id="lenght"
            type="text"
            name="lenght"
            className="input-field"
            placeholder="Enter length of dino"
            value={values.lenght}
            onChange={handleChange}
          />
          {errors.lenght && <p>{errors.lenght}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="top_speed" className="form-label">
            Enter top speed of dinosaur
          </label>
          <input
            id="top_speed"
            type="text"
            name="top_speed"
            className="input-field"
            placeholder="Enter top speed of dinos"
            value={values.top_speed}
            onChange={handleChange}
          />
          {errors.top_speed && <p>{errors.top_speed}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="period" className="form-label">
            Choose period when lived dinosaur:
          </label>
          <select
            id="period"
            name="period"
            className="input-field"
            value={values.period}
            onChange={handleChange}
          >
            <option value="1">Triassic</option>
            <option value="2">Jurasic</option>
            <option value="3">Cretaceous</option>
          </select>
          {errors.period && <p>{errors.period}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="diet" className="form-label">
            Choose diet of dinosaur:
          </label>
          <select
            id="diet"
            name="diet"
            className="input-field"
            value={values.diet}
            onChange={handleChange}
          >
            <option value="1">Carnivore</option>
            <option value="2">Herbivore</option>
            <option value="3">Piscivore</option>
          </select>
          {errors.diet && <p>{errors.diet}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="continent" className="form-label">
            Choose continent where was found dinosaur:
          </label>
          <select
            id="continent"
            name="continent"
            className="input-field"
            value={values.continent}
            onChange={handleChange}
          >
            <option value="1">South America</option>
            <option value="2">North America</option>
            <option value="3">Europe</option>
            <option value="4">Asia</option>
            <option value="5">Africa</option>
            <option value="6">Australia</option>
          </select>
          {errors.continent && <p>{errors.continent}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="continent" className="form-label">
            Is this dinosaur one of the most famous?
          </label>
          <select
            id="top"
            name="top"
            className="input-field"
            value={values.top}
            onChange={handleChange}
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>
        <div className="form-inputs">
          <label htmlFor="info" className="form-label">
            Some interesting information about this dinosaur:
          </label>
          <textarea
            className="form-control-file mb-3"
            name="info"
            rows="4"
            cols="50"
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="img" className="form-label">
            Add an awesome image of dinosaur
          </label>
          <input
            className="form-control-file mb-3"
            type="file"
            name="img"
            onChange={handleFile}
          />
        </div>
        <button type="submit">Add new dinosaur</button>
      </form>
    </div>
  );
}
