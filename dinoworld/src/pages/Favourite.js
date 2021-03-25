import React, { useState, useContext, useEffect } from "react";
import FavouriteComponent from "../components/FavouriteComponent/FavouriteComponent";
import { urlApi, DinoContext } from "../App";

export default function Favourite() {
  const [dinos, setDinos] = useState([]);

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
      .then(data => setDinos(data))
      .catch(err => console.log(err));
  }, [jwt]);

  return (
    <div>
      <FavouriteComponent dinos={dinos} />
    </div>
  );
}
