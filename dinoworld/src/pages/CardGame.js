import CardGameComponent from "../components/CardGameComponent/CardGameComponent";
import React, { useState, useContext, useEffect } from "react";
import { urlApi, DinoContext } from "../App";

export default function CardGame() {
  const [newGame, setNewGame] = useState(false);
  const [dinos, setDinos] = useState([]);

  const { jwt } = useContext(DinoContext);

  //With fetch we get only favourite dinos of user that is logged
  useEffect(() => {
    fetch(`${urlApi}/favorite/`, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + jwt
      }
    })
      .then(response => response.json())
      .then(dinos => {
        const newList = dinos.map(dino => {
          return {
            id: dino.ID,
            name: dino.name,
            img: dino.img
          };
        });
        setDinos(
          newList
            .concat(
              // Using concat method on a new list of dinos we dublicate every dino in the array
              newList.map(dino => {
                console.log(newList);

                return {
                  ...dino,
                  id: dino.id + 1 //change id property by adding a "1"
                };
              })
            )
            .sort(() => {
              //With sort method we make a random list of dinos every time we begin a new game
              return 0.5 - Math.random();
            })
        );
      })
      .catch(err => console.log(err));
  }, [jwt, newGame]);

  console.log(dinos);

  return <div>{/* <CardGameComponent dinos={dinos} /> */}</div>;
}
