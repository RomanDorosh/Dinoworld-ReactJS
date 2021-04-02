import DinoCardComponent from "../DinoCardComponent/DinoCardComponent";
import { useContext } from "react";
import "./HomeStyle.css";
import PaginationComponent from "./PaginationComponent";
import { DinoHomeContext } from "../../pages/Home";

function HomeComponent({ isLoading }) {
  //Using useContext we grab array of dinos from Home page, where we made a fetch and with "map method display every DinocardComponent
  const { dinosPagination } = useContext(DinoHomeContext);
  // const [clickedButton, setClickedButton] = useState(false);

  return (
    <div>
      {!isLoading && (
        <>
          <div className="grid-container">
            {dinosPagination.map(dino => {
              return (
                <DinoCardComponent
                  key={dino.ID}
                  {...dino}
                  // clickedButton={clickedButton}
                  // setClickedButton={setClickedButton}
                />
              );
            })}
          </div>
          <PaginationComponent />
        </>
      )}
    </div>
  );
}

export default HomeComponent;
