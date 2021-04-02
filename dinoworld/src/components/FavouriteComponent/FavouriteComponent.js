import React from "react";
import DinoCardComponent from "../DinoCardComponent/DinoCardComponent";
import "./Favourite.css";

export default function FavouriteComponent({ dinosFavorite }) {
  return (
    <div className="grid-container">
      {dinosFavorite.map(dino => {
        return <DinoCardComponent key={dino.ID} {...dino} />;
      })}
    </div>
  );
}
