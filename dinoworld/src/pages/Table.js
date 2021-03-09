import TableComponent from "../components/TableComponent";
import {useContext} from 'react';
import { DinoContext } from "../App";


export default function Table() {

  const dinos = useContext(DinoContext);

  return (
    <div>
      <TableComponent dinos = {dinos}/>
    </div>
  );
}
