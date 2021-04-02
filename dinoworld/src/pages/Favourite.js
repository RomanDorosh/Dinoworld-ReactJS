import React, { useState, useContext, useEffect } from "react";
import FavouriteComponent from "../components/FavouriteComponent/FavouriteComponent";
import { urlApi, DinoContext } from "../App";

export default function Favourite() {
  const [dinosFavorite, setDinosFavorite] = useState([]);

  const { jwt } = useContext(DinoContext);

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

  console.log(dinosFavorite);

  // const favDinoObj = dinosFavorite.reduce((obj, dino) => {
  //   obj[dino.id] = dino;
  //   return obj;
  // }, {});

  // console.log(favDinoObj);

  return (
    <div>
      <FavouriteComponent dinosFavorite={dinosFavorite} />
    </div>
  );
}
