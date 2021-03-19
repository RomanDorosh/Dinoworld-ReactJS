import { useContext } from "react";
import { DinoContext } from "../App";
import PeriodsComponent from "../components/PeriodsComponent/PeriodsComponent";

export default function Periods() {
  const dinos = useContext(DinoContext);

  return (
    <>
      <PeriodsComponent dinos={dinos} />
    </>
  );
}
