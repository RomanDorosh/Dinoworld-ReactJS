import { useContext } from "react";
import * as IconName from "react-icons/md";
import { Link } from "react-router-dom";
import { urlApi, DinoContext } from "../../App";
import Swal from "sweetalert2";

export default function DinoCardComponent({
  ID,
  name,
  weight,
  diet,
  period,
  img,
  users
}) {
  const { jwt, userEmail } = useContext(DinoContext);

  //!!!This function and all component I have to revise and improve  totally
  function toggleDinosaur() {
    //check if dino's users array is empty
    if (users.length !== 0) {
      fetch(`${urlApi}/favorite/remove/${ID}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + jwt
        }
      })
        .then(response => response.json())

        .catch(error => console.log(error));

      Swal.fire(`You have removed ${name} from your favorite dinos`);
    } else {
      fetch(`${urlApi}/favorite/add/${ID}`, {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + jwt
        }
      })
        .then(response => response.json())

        .catch(error => console.log(error));
      Swal.fire(`You have added ${name} to your favorite dinos`);
    }
  }

  let actionButton = "buttonFovorite";

  //Check is dino's array of users include email of logged user
  if (jwt) {
    users.forEach(element => {
      if (element.email === userEmail) {
        actionButton = "buttonFovoriteActive";
      }
    });
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
        <h6>Diet: {diet.name}</h6>
        <h6>Period: {period.name}</h6>
      </Link>
      <div style={{ textAlign: "center", color: "#ff6347" }}>
        {/* If user is logged then return a button for adding dinos to favorites */}
        {jwt && (
          <button className={actionButton} onClick={() => toggleDinosaur()}>
            <IconName.MdFavorite size={25} />
          </button>
        )}
      </div>
    </div>
  );
}
