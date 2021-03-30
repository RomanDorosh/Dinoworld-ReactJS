import DinoCardComponent from "../DinoCardComponent/DinoCardComponent";
import { useContext } from "react";
import "./HomeStyle.css";
import PaginationComponent from "./PaginationComponent";
import { DinoHomeContext } from "../../pages/Home";

function HomeComponent() {
  //Using useContext we grab array of dinos from Home page, where we made a fetch and with "map method display every DinocardComponent
  const { dinosPagination } = useContext(DinoHomeContext);

  return (
    <div>
      <div className="grid-container">
        {dinosPagination.map(dino => {
          return <DinoCardComponent key={dino.ID} {...dino} />;
        })}
      </div>
      <div>
        <PaginationComponent />
      </div>
    </div>
  );
}

export default HomeComponent;
