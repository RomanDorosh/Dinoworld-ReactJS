import TopDinosComponent from "../components/TopDinosComponent";
import {useContext} from 'react';
import { DinoContext } from "../App";



export default function TopDinos() {

  const dinos = useContext(DinoContext);

  return (
    <>
      <TopDinosComponent dinos = {dinos}/>
    </>
  );
}
