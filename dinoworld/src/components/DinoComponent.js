import React from "react";
import { useParams } from "react-router-dom";

export default function Dino({ dinos }) {
  console.log(dinos);
  return (
    <div>
      {/* <h1>Hello I am Dino</h1>
      <img src={dinos.img} alt="" />
      <h3>{dinos.name}</h3>
      <h6>Weight: {dinos.weight}</h6>
      <h6>Height: {dinos.height}</h6>
      <h6>Diet: {dinos.diet}</h6>
      <h6>Top Speed: {dinos.topSpeed}</h6>
      <h6>Period: {dinos.period}</h6>
      <button
        style={{
          backgroundColor: "rgba(189, 122, 34, 0.3)",
          border: "none"
        }}
      ></button> */}
    </div>
  );
}
