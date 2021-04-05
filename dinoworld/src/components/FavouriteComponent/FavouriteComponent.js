import React from "react";
import DinoCardComponent from "../DinoCardComponent/DinoCardComponent";

export default function FavouriteComponent({ dinosFavorite }) {
  //Get dinosfavorite as a props and make a map with dinoCardComponent through them
  return (
    <div className="grid-container">
      {dinosFavorite.map(dino => {
        return <DinoCardComponent key={dino.ID} {...dino} />;
      })}
    </div>
  );
}
