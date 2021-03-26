import { Link } from "react-router-dom";
import { useState } from "react";

export default function TableComponent({ dinos }) {
  let sortedDinos = [...dinos];
  console.log(sortedDinos);
  // console.log(dinos);

  // const [tableData, setTableData] = useState(dinos);

  // const ascendOrder = false;

  // function sortByName() {
  //   console.log(tableData);

  //   let sortData = tableData.sort((a, b) => {
  //     return ascendOrder ? a.name - b.name : b.name - a.name;
  //   });
  //   setTableData(sortData);
  //   console.log(tableData);
  // }

  return (
    <div>
      <table className=" table table-hover">
        <thead>
          <tr>
            <th scope="col">
              <button type="button">Name</button>
            </th>
            <th scope="col">
              <button type="button">Weight</button>
            </th>
            <th scope="col">
              <button type="button">Height</button>
            </th>
            <th scope="col">
              <button type="button">Length</button>
            </th>
            <th scope="col">
              <button type="button">Diet</button>
            </th>
            <th scope="col">
              <button type="button">Top Speed</button>
            </th>
            <th scope="col">
              <button type="button">Period</button>
            </th>
            <th scope="col">
              <button type="button">Continent</button>
            </th>
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
