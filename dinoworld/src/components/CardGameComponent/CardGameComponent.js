import DinoCardGameComponent from "./DinoCardGameComponent";
import "./CardGame.css";
import { useState } from "react";

export default function CardGameComponent({ dinos }) {
  const [clickedNames, setClickedNames] = useState([]);
  const [clickedID, setClickedID] = useState([]);

  function checkForMatch() {
    const firstDinoOption = clickedNames[0];
    const secondDinoOption = clickedNames[1];

    console.log(firstDinoOption);
    console.log(secondDinoOption);

    if (firstDinoOption === secondDinoOption) {
      alert("You found the match");
    }
  }

  // function flipCard() {
  //   console.log(`card fliped ${dinos.ID}`);
  //   // const newClickedName = clickedName.push(name);
  //   // const newClickedID = clickedID.push(ID);

  //   setClickedNames(clickedNames => [...clickedNames, dinos.name]);
  //   setClickedID(clickedID => [...clickedID, dinos.ID]);

  //   console.log(clickedNames.length);
  // }

  console.log(clickedNames);
  console.log(clickedID);
  console.log(clickedNames.length);
  console.log(clickedNames[0], clickedNames[1]);

  if (clickedNames.length === 2) {
    setTimeout(checkForMatch, 500);
  }
  // console.log(dinos);
  return (
    <div>
      <h3>Your score</h3>
      Create a board
      <div className="game-grid">
        {dinos.map(dino => {
          return (
            <DinoCardGameComponent
              key={dino.ID}
              {...dino}
              clickedNames={clickedNames}
              setClickedNames={setClickedNames}
              clickedID={clickedID}
              setClickedID={setClickedID}
            />
          );
        })}
      </div>
    </div>
  );
}
