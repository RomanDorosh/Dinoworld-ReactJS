import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import * as IconName from "react-icons/md";
import "./DinoComponent.css";
import { urlApi } from "../../App";

function DinoComponent() {
  const { ID } = useParams();

  // let url = `http://localhost/finalsymfonyproject/public/index.php/dinosaur/${ID}`;

  // let url = `http://localhost:8000/dinosaur${ID}`;

  // ${urlApi}/dinosaur${ID}

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

  return (
    <div className="dinoAbout">
      <img
        src={`${urlApi}/images/${dino.img}`}
        // src={`${urlApi}/public/images/stegosaurus.jpg`}

        alt=""
      />
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
          style={{
            backgroundColor: "rgba(189, 122, 34, 0.3)",
            border: "none"
          }}
        >
          <IconName.MdFavorite />
        </button>
      </div>
      <p>{dino.info}</p>
    </div>
  );
}

export default DinoComponent;
