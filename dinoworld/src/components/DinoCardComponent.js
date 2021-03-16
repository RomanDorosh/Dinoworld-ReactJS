import React from "react";
import * as IconName from "react-icons/md";
import { Link } from "react-router-dom";

export default function DinoCardComponent({
  ID,
  name,
  weight,
  height,
  diet,
  top_speed,
  period,
  img,
  continent
}) {
  return (
    <div className="grid-card">
      {/* Using Link with path indicated in route in App.js we open the Dino.js with selected dino ID in URL*/}

      <Link
        to={`/Dino/${ID}`}
        style={{ textDecoration: "none", color: "rgb(53, 53, 53)" }}
      >
        <img
          src={`http://localhost/finalsymfonyproject/public/images/${img}`}
          alt=""
        />
        <h3>{name}</h3>
        <h6>Weight: {weight}</h6>
        <h6>Height: {height}</h6>
        <h6>Diet: {diet.name}</h6>
        <h6>Top Speed: {top_speed}</h6>
        <h6>Period: {period.name}</h6>
        <h6>Continent: {continent.name}</h6>
        <button
          style={{
            backgroundColor: "rgba(189, 122, 34, 0.3)",
            border: "none"
          }}
        >
          <IconName.MdFavorite />
        </button>
      </Link>
    </div>
  );
}
