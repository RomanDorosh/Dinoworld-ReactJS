import DinoComponent from "../components/DinoComponent";
import { useContext } from "react";
import { DinoContext } from "../App";

export default function Dino() {
  const dinos = useContext(DinoContext);

  console.log(dinos);
  return (
    <div>
      <DinoComponent dinos={dinos} />
    </div>
  );
}
