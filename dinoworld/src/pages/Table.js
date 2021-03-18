import TableComponent from "../components/TableComponent";
import { useContext, createContext, useState } from "react";
import { DinoContext } from "../App";

export const DinoTableContext = createContext({});

export default function Table() {
  const { dinos } = useContext(DinoContext);

  const [searchInput, setSearchInput] = useState("");

  function search(dinosRows) {
    return dinosRows.filter(
      dino => dino.name.toLowerCase().indexOf(searchInput) > -1
    );
  }

  return (
    <div>
      <div className="container-fluid">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => setSearchInput(e.target.value.toLowerCase())}
        />
      </div>
      <TableComponent dinos={search(dinos)} />
    </div>
  );
}
