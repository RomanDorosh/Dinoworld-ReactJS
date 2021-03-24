import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import * as IconName from "react-icons/md";
import "./DinoComponent.css";
import { urlApi, DinoContext } from "../../App";

function DinoComponent() {
  const { ID } = useParams();

  const { jwt, setJwt } = useContext(DinoContext);

  const [dino, setDino] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`${urlApi}/dinosaur/${ID}`)
      .then(resp => resp.json())
      .then(resp => {
        setDino(resp);
        setIsLoaded(true);
      })
      .catch(err => console.log(err));
  }, [ID]);

  function addDinosaur() {
    console.log("dino has been added" + ID);

    fetch(`${urlApi}/favorite/add/${ID}`, {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + jwt
      }
    })
      .then(response => response.json())

      .catch(error => console.log(error));
  }

  return (
    <div className="dinoAbout">
      {/* Get image of dino from a folder using property "img" where is saved name of file with that exact dino */}
      <img src={`${urlApi}/images/${dino.img}`} alt="" />
      <div className="dino-char">
        <h3>{dino.name}</h3>
        <h6>Weight: {dino.weight} kilograms</h6>
        <h6>Height: {dino.height} meters</h6>
        <h6>Length: {dino.lenght} meters</h6>
        <h6>Diet: {isLoaded && dino.diet.name}</h6>
        <h6>Top Speed: {dino.top_speed} km/h</h6>
        <h6>Period: {isLoaded && dino.period.name}</h6>
        <h6>Continent: {isLoaded && dino.continent.name}</h6>
        <button
          className={jwt ? "buttonFovorite" : "displayNone"}
          onClick={() => addDinosaur()}
        >
          <IconName.MdFavorite />
        </button>
      </div>
      <p>{dino.info}</p>
    </div>
  );
}

export default DinoComponent;
