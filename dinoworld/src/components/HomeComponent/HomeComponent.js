import DinoCardComponent from "../DinoCardComponent/DinoCardComponent";
import { useContext } from "react";
import PaginationComponent from "./PaginationComponent";
import { DinoHomeContext } from "../../pages/Home";

function HomeComponent({ isLoading }) {
  //Using useContext we grab array of dinos from Home page, where we made a fetch and with "map method display every DinocardComponent
  const { dinosPagination } = useContext(DinoHomeContext);

  return (
    <div>
      {/* Is loading is true then return this two components */}
      {!isLoading && (
        <>
          <div className="grid-container">
            {dinosPagination.map(dino => {
              return <DinoCardComponent key={dino.ID} {...dino} />;
            })}
          </div>
          <PaginationComponent />
        </>
      )}
    </div>
  );
}

export default HomeComponent;
