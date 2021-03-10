import React from "react";
import "./Table.css";
import { Link } from "react-router-dom";

export default function TableComponent({dinos}) {

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
            </tr>
          </thead>
          <tbody>
            {dinos.map((dino) => {
              return (
                //Will need to change to an index as a key and add link to every dino
                <tr key={dino.id} className="">
                  <td>{dino.name}</td>
                  <td>{dino.weight}</td>
                  <td>{dino.height}</td>
                  <td>{dino.length}</td>
                  <td>{dino.diet}</td>
                  <td>{dino.topSpeed}</td>
                  <td>{dino.period}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
  );
}
