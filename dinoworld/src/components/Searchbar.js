import "./SearchbarStyle.css";
import { useContext, useState } from "react";
import { DinoHomeContext } from "../pages/Home";

export default function Searchbar() {
  // const { dinosPagination, setDinosPagination } = useContext(DinoHomeContext);
  // console.log(dinosPagination);

  // const [searchInput, setSearchInput] = useState("");

  // let searchedDinos = dinosPagination.filter(dino => {
  //   if (searchInput == "") {
  //     return dino;
  //   } else if (dino.name.toLowerCase().includes(searchInput)) {
  //     return dino;
  //   }
  // });

  return (
    <form action="/action_page.php">
      <input
        type="text"
        placeholder="Search.."
        name="search"
        onChange={e => {
          setSearchInput(e.target.value.toLowerCase());
          setDinosPagination(searchedDinos);
        }}
      />
    </form>
  );
}
