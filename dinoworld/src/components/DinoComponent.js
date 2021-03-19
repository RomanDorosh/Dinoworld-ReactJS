import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as IconName from "react-icons/md";
import "./DinoComponent.css";

function DinoComponent() {
  // console.log(useParams());

  // const { x } = useState(1);
  // const { ID } = useParams();
  // let url = `http://localhost/finalsymfonyproject/public/index.php/dinosaur/${ID}`;

  let url = `http://localhost/finalsymfonyproject/public/index.php/dinosaur/1`;

  const [dino, setDino] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.count("single call");
    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        setDino(resp);
        setIsLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(dino);

  return (
    <div class="dinoAbout">
      <img
        src={`http://localhost/finalsymfonyproject/public/images/${dino.img}`}
        alt=""
      />
      <div class="dino-char">
        <h3>{dino.name}</h3>
        <h6>Weight: {dino.weight}</h6>
        <h6>Height: {dino.height}</h6>
        <h6>Diet: {isLoaded && dino.diet.name}</h6>
        <h6>Top Speed: {dino.top_speed}</h6>
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
