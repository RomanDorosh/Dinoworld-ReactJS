import { Link } from "react-router-dom";
import { useState } from "react";

export default function TableComponent({ dinos }) {
  // Assign to false and change to true when button is clicked we make a toggle

  const [ascendOrder, setAscendOrder] = useState(false);

  //Use one function with switch statement inside to sort diferent table columns

  const orderBy = e => {
    setAscendOrder(!ascendOrder);

    //Using text content of event target we can sort values of that column which has triggered the event

    switch (e.target.textContent) {
      case "Weight": {
        dinos.sort((a, b) => {
          return ascendOrder ? a.weight - b.weight : b.weight - a.weight;
        });
        break;
      }
      case "Height": {
        dinos.sort((a, b) => {
          return ascendOrder ? a.height - b.height : b.height - a.height;
        });
        break;
      }
      case "Name": {
        dinos.sort((a, b) => {
          //With localeCompare string prototype we can sort strings
          return ascendOrder
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        });
        break;
      }
      case "Length": {
        dinos.sort((a, b) => {
          return ascendOrder ? a.lenght - b.lenght : b.lenght - a.lenght;
        });
        break;
      }
      case "Diet": {
        dinos.sort((a, b) => {
          return ascendOrder
            ? a.diet.name.localeCompare(b.diet.name)
            : b.diet.name.localeCompare(a.diet.name);
        });
        break;
      }
      case "Period": {
        dinos.sort((a, b) => {
          return ascendOrder
            ? a.period.name.localeCompare(b.period.name)
            : b.period.name.localeCompare(a.period.name);
        });
        break;
      }
      case "Continent": {
        dinos.sort((a, b) => {
          return ascendOrder
            ? a.continent.name.localeCompare(b.continent.name)
            : b.continent.name.localeCompare(a.continent.name);
        });
        break;
      }
      case "Top Speed": {
        dinos.sort((a, b) => {
          return ascendOrder
            ? a.top_speed - b.top_speed
            : b.top_speed - a.top_speed;
        });
        break;
      }
      default:
        break;
    }
  };

  return (
    <div>
      <table className=" table table-hover">
        <thead>
          <tr>
            <th scope="col">
              <button
                className="button-table-sort"
                type="button"
                onClick={orderBy}
              >
                Name
              </button>
            </th>
            <th scope="col">
              <button
                className="button-table-sort"
                type="button"
                onClick={orderBy}
              >
                Weight
              </button>
            </th>
            <th scope="col">
              <button
                className="button-table-sort"
                type="button"
                onClick={orderBy}
              >
                Height
              </button>
            </th>
            <th scope="col">
              <button
                className="button-table-sort"
                type="button"
                onClick={orderBy}
              >
                Length
              </button>
            </th>
            <th scope="col">
              <button
                className="button-table-sort"
                type="button"
                onClick={orderBy}
              >
                Diet
              </button>
            </th>
            <th scope="col">
              <button
                className="button-table-sort"
                type="button"
                onClick={orderBy}
              >
                Top Speed
              </button>
            </th>
            <th scope="col">
              <button
                className="button-table-sort"
                type="button"
                onClick={orderBy}
              >
                Period
              </button>
            </th>
            <th scope="col">
              <button
                className="button-table-sort"
                type="button"
                onClick={orderBy}
              >
                Continent
              </button>
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
