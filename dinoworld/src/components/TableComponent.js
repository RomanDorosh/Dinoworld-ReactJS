import React from "react";
import "./Table.css";
import { Link } from "react-router-dom";

export default function TableComponent({ dinos }) {
  return (
    <div>
      <table className=" table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Weight</th>
            <th scope="col">Height</th>
            <th scope="col">Length</th>
            <th scope="col">Diet</th>
            <th scope="col">Top Speed</th>
            <th scope="col">Period</th>
            <th scope="col">Continent</th>
          </tr>
        </thead>
        <tbody>
          {dinos.map(dino => {
            return (
              //Will need to change to an index as a key and add link to every dino
              <tr key={dino.ID} className="">
                <td>
                  <Link
                    to={`/Dino/${dino.ID}`}
                    style={{ textDecoration: "none", color: "rgb(53, 53, 53)" }}
                  >
                    {dino.name}
                  </Link>
                </td>
                <td>{dino.weight}</td>
                <td>{dino.height}</td>
                <td>{dino.lenght}</td>
                <td>{dino.diet.name}</td>
                <td>{dino.top_speed}</td>
                <td>{dino.period.name}</td>
                <td>{dino.continent.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
