import DinoCardComponent from "./DinoCardComponent";
import { useContext } from "react";
import "./MainStyle.css";
import PaginationComponent from "./PaginationComponent";
import { DinoHomeContext } from "../pages/Home";

function MainComponent() {
  //Using useContext we grab array of dinos from Home page, where we made a fetch and with "map method display every DinocardComponent

  const { dinosPagination } = useContext(DinoHomeContext);

  return (
    <div>
      <div className="grid-container">
        {dinosPagination.map(dino => {
          // const {ID, name, weight, continent, diet, height, img, lenght, period, top_speed} = dino;
          return <DinoCardComponent key={dino.ID} {...dino} />;
        })}
      </div>
      <div style={{ marginLeft: "200px", marginBottom: "200px" }}>
        <PaginationComponent />
      </div>
    </div>
  );
}

export default MainComponent;
