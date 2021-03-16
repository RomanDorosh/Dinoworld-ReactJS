import React from "react";
import * as IconName from "react-icons/md";
import { Link } from "react-router-dom";

export default function DinoCardComponent({
  id,
  name,
  weight,
  height,
  diet,
  topSpeed,
  period,
  img
}) {
  return (
    <div className="grid-card">
      {/* Using Link with path indicated in route in App.js we open the Dino.js with selected dino ID in URL*/}

      <Link
        to={`/Dino/${id}`}
        style={{ textDecoration: "none", color: "rgb(53, 53, 53)" }}
      >
        <img src={img} alt="" />
        <h3>{name}</h3>
        <h6>Weight: {weight}</h6>
        <h6>Height: {height}</h6>
        <h6>Diet: {diet}</h6>
        <h6>Top Speed: {topSpeed}</h6>
        <h6>Period: {period}</h6>
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