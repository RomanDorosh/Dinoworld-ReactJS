import { useContext } from "react";
import * as IconName from "react-icons/md";
import { Link } from "react-router-dom";
import { urlApi, DinoContext } from "../../App";

export default function DinoCardComponent({
  ID,
  name,
  weight,
  height,
  lenght,
  diet,
  top_speed,
  period,
  img,
  continent
}) {
  const { jwt, setJwt } = useContext(DinoContext);

  function addDinosaur() {
    console.log("dino has been added" + ID);

    fetch(`${urlApi}/favorite/add/${ID}`, {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + jwt
      }
    })
      .then(response => response.json())

      .catch(error => console.log(error));
  }

  return (
    <div className="grid-card">
      {/* Using Link with path indicated in route in App.js we open the Dino.js with selected dino ID in URL*/}

      <Link
        to={`/Dino/${ID}`}
        style={{ textDecoration: "none", color: "rgb(53, 53, 53)" }}
      >
        <img src={`${urlApi}/images/${img}`} alt="" />
        <h3>{name}</h3>
        <h6>Weight: {weight} kilograms</h6>
        <h6>Height: {height} meters</h6>
        <h6>Length: {lenght} meters</h6>
        <h6>Diet: {diet.name}</h6>
        <h6>Top Speed: {top_speed} km/h</h6>
        <h6>Period: {period.name}</h6>
        <h6>Continent: {continent.name}</h6>
      </Link>

      <button
        className={jwt ? "buttonFovorite" : "displayNone"}
        onClick={() => addDinosaur()}
      >
        <IconName.MdFavorite />
      </button>
    </div>
  );
}
