import { useState, useContext, useEffect } from "react";
import FavouriteComponent from "../components/FavouriteComponent/FavouriteComponent";
import { urlApi, DinoContext } from "../App";

export default function Favourite() {
  const [dinosFavorite, setDinosFavorite] = useState([]);

  const { jwt } = useContext(DinoContext);

  //Get favorites dino of logged user from API adn set them to the dinosFavorite
  useEffect(() => {
    fetch(`${urlApi}/favorite/`, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + jwt
      }
    })
      .then(response => response.json())
      .then(data => setDinosFavorite(data))
      .catch(err => console.log(err));
  }, [jwt]);

  return (
    <div>
      <FavouriteComponent dinosFavorite={dinosFavorite} />
    </div>
  );
}
