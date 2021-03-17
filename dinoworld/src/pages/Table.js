import TableComponent from "../components/TableComponent";
import { useContext } from "react";
import { DinoContext } from "../App";
import SearchbarTable from "../components/SearchbarTable";

export default function Table() {
  const { dinos } = useContext(DinoContext);
  // const setDinos = useContext(DinoContext);
  return (
    <div>
      <SearchbarTable />
      <TableComponent dinos={dinos} />
    </div>
  );
}
