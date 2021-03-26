import { urlApi } from "../../App";
import { useState } from "react";

export default function DinoCardGameComponent({
  ID,
  name,
  img,
  clickedNames,
  setClickedNames,
  clickedID,
  setClickedID
}) {
  // const { jwt } = useContext(DinoContext);
  // const [clickedNames, setClickedName] = useState([]);
  // const [clickedID, setClickedID] = useState([]);

  function checkForMatch() {
    const firstDino = clickedNames[0];
    const secondDino = clickedNames[1];

    if (firstDino === secondDino) {
      alert("You found the match");
    }
  }

  function flipCard() {
    console.log(`card fliped ${ID}`);
    // const newClickedName = clickedName.push(name);
    // const newClickedID = clickedID.push(ID);

    setClickedNames(clickedNames => [...clickedNames, name]);
    setClickedID(clickedID => [...clickedID, ID]);

    console.log(clickedNames.length);
  }

  return (
    <>
      <div className="grid-card" onClick={() => flipCard()}>
        <img src={`${urlApi}/images/${img}`} alt="" />
        <h3>{name}</h3>
      </div>
    </>
  );
}
