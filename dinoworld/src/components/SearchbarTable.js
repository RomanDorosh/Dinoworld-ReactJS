import "./SearchbarStyle.css";
import { useContext, useState } from "react";
import { DinoContext } from "../App";

export default function Searchbar() {
  const { dinos, setDinos } = useContext(DinoContext);
  console.log(dinos);

  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(e) {
    console.log(e.target.value.toLowerCase());
    setSearchInput(e.target.value.toLowerCase());

    let searchedDinos = dinos.filter(dino => {
      if (searchInput == "") {
        return dino;
      } else if (dino.name.toLowerCase().includes(searchInput)) {
        return dino;
      }
    });
    // let searchedDinos = dinos.forEach(dino => {
    //   if (searchInput == "") {
    //     return dino;
    //   } else if (dino.name.toLowerCase().includes(searchInput)) {
    //     return dino;
    //   }
    // });
    setDinos(searchedDinos);

    // console.log(searchInput);
    // console.log(dinos);

    // console.log("hello");
  }

  // onChange={e => {
  //           setSearchInput(e.target.value.toLowerCase());
  //           setDinos(searchedDinos);
  //         }}

  return (
    <div className="container-fluid">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={e => handleSearchInput(e)}
      />
    </div>
  );
}
