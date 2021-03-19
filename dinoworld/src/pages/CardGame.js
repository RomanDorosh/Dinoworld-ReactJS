import CardGameComponent from "../components/CardGameComponent/CardGameComponent";
import { useContext } from "react";
import { DinoContext } from "../App";

export default function CardGame() {
  const dinos = useContext(DinoContext);

  return (
    <div>
      <CardGameComponent dinos={dinos} />
    </div>
  );
}
