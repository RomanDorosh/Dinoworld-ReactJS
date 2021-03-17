import MainComponent from "../components/MainComponent";
import { createContext, useEffect, useState } from "react";

export const DinoHomeContext = createContext({});

export default function Home() {
  const [dinosPagination, setDinosPagination] = useState([]);
  const [page, setPage] = useState(1);

  //As we have pagination made in back-end we can paginate through array of dinosaurs only changing number of page in URL
  useEffect(() => {
    console.log("home call");
    fetch(
      `http://localhost/finalsymfonyproject/public/index.php/dinosaur/page${page}`
    )
      .then(response => response.json())
      .then(data => setDinosPagination(data))
      .catch(err => console.log(err));

    //Assigning "page" as a second argument to useEffect we will make fetch every time we change the page
  }, [page]);

  // console.log(dinosAPI);
  // console.log(dinosPagination);

  return (
    <>
      <DinoHomeContext.Provider
        value={{ dinosPagination, setDinosPagination, page, setPage }}
      >
        <MainComponent />
      </DinoHomeContext.Provider>
    </>
  );
}
