import TableComponent from "../components/TableComponent/TableComponent";
import { createContext, useState, useEffect } from "react";
import { urlApi } from "../App";

export const DinoTableContext = createContext({});

export default function Table() {
  const [dinos, setDinos] = useState([]);

  //Get sorted data from back-end

  useEffect(() => {
    fetch(`${urlApi}/dinosaur/sorted`)
      .then(response => response.json())
      .then(data => setDinos(data))
      .catch(err => console.log(err));
  }, []);

  const [searchInput, setSearchInput] = useState("");

  //Invoke function inside of props and return filtered data, then pass that data as props to the TableComponent
  function search(dinosRows) {
    return dinosRows.filter(
      dino => dino.name.toLowerCase().indexOf(searchInput) > -1
    );
  }

  return (
    <div>
      <div className="container-fluid">
        <input
          className="form-control me-2 background-second"
          type="search"
          placeholder="Search"
          aria-label="Search"
          //With every pressed button we assign that value and make search with it
          onChange={e => setSearchInput(e.target.value.toLowerCase())}
        />
      </div>
      <TableComponent dinos={search(dinos)} />
    </div>
  );
}
