import HomeComponent from "../components/HomeComponent/HomeComponent";
import { createContext, useEffect, useState } from "react";
import { urlApi } from "../App";

export const DinoHomeContext = createContext({});

export default function Home() {
  const [dinosPagination, setDinosPagination] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  //As we have pagination made in back-end we can paginate through array of dinosaurs only changing number of page in URL
  useEffect(() => {
    // console.log("home call");
    fetch(`${urlApi}/dinosaur/page${page}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDinosPagination(data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));

    //Assigning "page" as a second argument to useEffect we will make fetch every time we change the page
  }, [page]);

  return (
    <>
      <DinoHomeContext.Provider
        value={{
          dinosPagination,
          setDinosPagination,
          page,
          setPage
        }}
      >
        <HomeComponent isLoading={isLoading} />
      </DinoHomeContext.Provider>
    </>
  );
}

// const favDinoObj = {
//   1: {},
//   2: {}
// };

// map(dino => ({
//   ...dino,
//   isFav: favDinoObj[dino.id] !== undefined
// }));
