import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import * as IconName from "react-icons/md";
import "./DinoComponent.css";
import { urlApi, DinoContext } from "../../App";
import Swal from "sweetalert2";

function DinoComponent() {
  //Using useParams hook get ID of dino that was clicked
  const { ID } = useParams();

  const { jwt, userRoles } = useContext(DinoContext);

  //Set dino to an empty array before making fetch
  const [dino, setDino] = useState([]);

  //Set to false until data is set
  const [isLoaded, setIsLoaded] = useState(false);

  //Making a fetch  with use effect, with dependencie of ID
  useEffect(() => {
    fetch(`${urlApi}/dinosaur/${ID}`)
      .then(resp => resp.json())
      .then(resp => {
        //Set response data to dino and set isLoaded to true
        setDino(resp);
        setIsLoaded(true);
      })
      .catch(err => console.log(err));
  }, [ID]);

  //This function and all component I have to revise and improve  totally

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
    }
  }

  //Delete dino using petition DELETE to API if user confirm it (using Swal)
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
  //Check if user is admin
  const isAdmin = () =>
    jwt && userRoles.includes("ROLE_ADMIN") ? true : false;

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
          {/* If user is logged then return a button for adding dinos to favorites */}
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
          {/* Return a div with Edit and Delete button if user is Admin */}
          {isAdmin() && (
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
