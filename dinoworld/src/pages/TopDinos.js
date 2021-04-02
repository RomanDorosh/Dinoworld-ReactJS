import TopDinosComponent from "../components/TopDinosComponent/TopDinosComponent";
import { useEffect, useState } from "react";
import { urlApi } from "../App";

export default function TopDinos() {
  const [dinos, setDinos] = useState([]);

  useEffect(() => {
    fetch(`${urlApi}/dinosaur/`)
      .then(response => response.json())
      .then(data => setDinos(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <TopDinosComponent dinos={dinos} />
    </>
  );
}
