import CardGameComponent from "../components/CardGameComponents/CardGameComponent";
import React, { useState, useContext, useEffect } from "react";
import { urlApi, DinoContext } from "../App";

export default function CardGame() {
  //Get token from Dinocontext
  const { jwt } = useContext(DinoContext);

  //Set default values
  const [newGame, setNewGame] = useState(false);
  const [dinos, setDinos] = useState([]);
  const [visibleDinos, setVisibleDinos] = useState([]);
  const [finishedDinos, setFinishedDinos] = useState([]);
  const [winner, setWinner] = useState(false);

  //Check clicked dinos for match
  const checkForMatch = (firstIndex, secondIndex) => {
    //IF indexes doesn't match and dinos name are equal set them to finished dinos with that indexes
    if (
      firstIndex !== secondIndex &&
      dinos[firstIndex].name === dinos[secondIndex].name
    ) {
      setFinishedDinos([...finishedDinos, firstIndex, secondIndex]);
    } else {
      //if name doesn't match with interval we set visible dinos to an empty array
      setTimeout(() => {
        setVisibleDinos([]);
      }, 1000);
    }
  };

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
        //Create an array of response data using map method
        const newList = dinos.map(dino => {
          //return only property needed for a game
          return {
            id: dino.ID,
            name: dino.name,
            img: dino.img
          };
        });
        //Set to dinos an array concatenated with another array which is created using map with changing ID property
        setDinos(
          newList
            .concat(
              // Using concat method on a new list of dinos we dublicate every dino in the array
              newList.map(dino => {
                return {
                  ...dino,
                  id: dino.id + "1" //change id property by adding a "1" for dublicated dinos
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

  //With useEffect ckeck if all dinos have been finished(opened) and finish the game by setting winner to true
  useEffect(() => {
    if (finishedDinos.length > 0 && finishedDinos.length === dinos.length) {
      setWinner(true);
    }
  }, [finishedDinos]);

  return (
    <div>
      <div className="text-center p-4 d-flex flex-column">
        <button
          // when button is clicked we set all to a default values
          onClick={() => {
            setNewGame(!newGame);
            setVisibleDinos([]);
            setFinishedDinos([]);
            setWinner(false);
          }}
          className="btn btn-warning mb-4"
        >
          New Game
        </button>
        <div>
          <CardGameComponent
            dinos={dinos}
            visibleDinos={visibleDinos}
            setVisibleDinos={setVisibleDinos}
            finishedDinos={finishedDinos}
            checkForMatch={checkForMatch}
          />
          {/* If winner is true return a div with congratulation */}
          {winner && <h1>You Win!</h1>}
        </div>
      </div>
    </div>
  );
}
