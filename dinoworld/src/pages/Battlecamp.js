import BattlecampComponent from "../components/BattlecampComponent";
import {useContext} from 'react';
import { DinoContext } from "../App";


export default function Battlecamp() {

  const dinos = useContext(DinoContext);

  return (
    <div>
      <BattlecampComponent dinos = {dinos}/>
    </div>
  );
}
