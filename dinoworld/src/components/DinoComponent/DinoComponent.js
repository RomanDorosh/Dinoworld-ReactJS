import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import * as IconName from "react-icons/md";
import "./DinoComponent.css";
import { urlApi, DinoContext } from "../../App";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

function DinoComponent() {
  const { ID } = useParams();

  const { jwt, userRoles } = useContext(DinoContext);

  const [dino, setDino] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`${urlApi}/dinosaur/${ID}`)
      .then(resp => resp.json())
      .then(resp => {
        setDino(resp);
        setIsLoaded(true);
      })
      .catch(err => console.log(err));
  }, [ID]);

  function toggleDinosaur() {
    if (dino.users.length !== 0) {
      fetch(`${urlApi}/favorite/remove/${ID}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + jwt
        }
      })
        .then(response => response.json())

        .catch(error => console.log(error));

      Swal.fire(`You have removed ${dino.name} from your favorite dinos`);
      // alert(`You have removed ${name} from your favorite dinos`);
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
      Swal.fire(`You have added ${dino.name} to your favorite dinos`);

      // alert(`You have added ${name} to your favorite dinos`);
    }
  }

  function deleteDinosaur() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      background: "rgba(189,122,34,0.9)",
      confirmButtonColor: "#d33",
      cancelButtonColor: "rgb(21, 126, 21)",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`${urlApi}/dinosaur/delete/${ID}`, {
          method: "DELETE",
          mode: "cors",
          headers: {
            Authorization: "Bearer " + jwt
          }
        })
          .then(response => response.json())

          .catch(error => console.log(error));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  return (
    <div className="dinoAbout">
      {/* Get image of dino from a folder using property "img" where is saved name of file with that exact dino */}
      <img src={isLoaded ? `${urlApi}/images/${dino.img}` : null} alt="" />
      <div className="dino-char text-center mt-2">
        <h3>{dino.name}</h3>
        <h6>Weight: {dino.weight} kilograms</h6>
        <h6>Height: {dino.height} meters</h6>
        <h6>Length: {dino.lenght} meters</h6>
        <h6>Diet: {isLoaded && dino.diet.name}</h6>
        <h6>Top Speed: {dino.top_speed} km/h</h6>
        <h6>Period: {isLoaded && dino.period.name}</h6>
        <h6>Continent: {isLoaded && dino.continent.name}</h6>
        <div className="container text-center">
          {jwt && (
            <div style={{ textAlign: "center", color: "#ff6347" }}>
              <button
                className="buttonFovorite"
                onClick={() => toggleDinosaur()}
              >
                <IconName.MdFavorite size={35} />
              </button>
            </div>
          )}
          {userRoles.includes("ROLE_ADMIN") && (
            <div className="m-2">
              <Link to={`/EditDino/${ID}`}>
                <button className="btn btn-warning ml-3"> EDIT</button>
              </Link>
              <button
                className="btn btn-danger ml-3"
                onClick={() => deleteDinosaur()}
              >
                DELETE
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="text-center">{dino.info}</p>
    </div>
  );
}

export default DinoComponent;
