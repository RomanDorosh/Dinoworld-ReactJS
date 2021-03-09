import MainComponent from "../components/MainComponent";
import {useContext} from 'react';
import { DinoContext } from "../App";

export default function Home() {
  
  const dinos = useContext(DinoContext);

  return (
    <>
      <MainComponent dinos = {dinos}/>
    </>
  );
}
