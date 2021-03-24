import React from "react";
import DinoCardComponent from "../DinoCardComponent/DinoCardComponent";
import "./Favourite.css";

export default function FavouriteComponent({ dinos }) {
  // console.log(dinos);

  return (
    <div className="grid-container">
      {dinos.map(dino => {
        return <DinoCardComponent key={dino.ID} {...dino} />;
      })}
    </div>
  );
}
