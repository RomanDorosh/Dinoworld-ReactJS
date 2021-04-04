import React from "react";
import DinoCardComponent from "../DinoCardComponent/DinoCardComponent";

export default function FavouriteComponent({ dinosFavorite }) {
  return (
    <div className="grid-container">
      {dinosFavorite.map(dino => {
        return <DinoCardComponent key={dino.ID} {...dino} />;
      })}
    </div>
  );
}
