import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TopDinos from "./pages/TopDinos";
import Table from "./pages/Table";
import Battlecamp from "./pages/Battlecamp";
import Periods from "./pages/Periods";
import Searchbar from "./components/Searchbar";
import Favourite from "./pages/Favourite";
import FormComponent from "./components/FormComponent";
import Dino from "./components/Dino"


const dinos = [
    {
      id: "1",
      name: "Stegosaurus",
      weight: 7000,
      height: 5,
      diet: "Herbivore",
      topSpeed: 7,
      length: 9,
      period: "Jurassic",
      wasFound: "",
      top: true,
      img:
        "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoHerbi_QR_CO-09.jpg",
    },
    {
      id: "2",
      name: "Brachiosaurus",
      weight: 35000,
      height: 15,
      diet: "Herbivore",
      topSpeed: 8,
      length: 25,
      period: "Jurassic",
      wasFound: "North America",
      top: true,
      img:
        "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoHerbi_QR_CO-12.jpg",
    },
    {
      id: "3",
      name: "Ankylosaurus",
      weight: 5000,
      height: 1.6,
      diet: "Herbivore",
      topSpeed: 10,
      length: 6,
      period: "Jurassic",
      wasFound: "North America",
      top: true,
      img:
        "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoHerbi_QR_CO-11.jpg",
    },
    {
      id: "4",
      name: "Diplodocus",
      weight: 12000,
      height: 6,
      diet: "Herbivore",
      topSpeed: 15,
      length: 32,
      period: "Jurassic",
      wasFound: "North America",
      top: true,
      img:
        "https://www.wennoanimal.com/uploads/animals/original/img_diplodocus.jpg",
    },
    {
      id: "5",
      name: "Dracoraptor",
      weight: 40,
      height: 1,
      diet: "Herbivore",
      topSpeed: 25,
      length: 3,
      period: "Jurassic",
      wasFound: "Europe",
      top: false,
      img:
        "https://images.dinosaurpictures.org/Dracoraptor/news-dracoraptor_0f29.jpg",
    },
    {
      id: "6",
      name: "Pterodactylus",
      weight: 150,
      height: 1,
      diet: "Carnivore",
      topSpeed: 60,
      length: 2,
      period: "Jurassic",
      wasFound: "Europe",
      top: true,
      img: "https://www.wennoanimal.com/uploads/animals/original/Pterosaur.jpg",
    },
    {
      id: "7",
      name: "Allosaurus",
      weight: 2500,
      height: 3,
      diet: "Carnivore",
      topSpeed: 30,
      length: 9,
      period: "Jurassic",
      wasFound: "North America",
      top: false,
      img:
        "https://cdna.artstation.com/p/assets/images/images/012/701/066/large/albert-brigos-allosaurus-v2.jpg?1536085079",
    },
    {
      id: "8",
      name: "Iguanodon",
      weight: 3200,
      height: 3.5,
      diet: "Herbivore",
      topSpeed: 30,
      length: 10,
      period: "Jurassic",
      wasFound: "Europe",
      top: false,
      img:
        "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoHerbi_QR_CO-08.jpg",
    },
    {
      id: "9",
      name: "Dilophosaurus",
      weight: 400,
      height: 3.5,
      diet: "Carnivore",
      topSpeed: 38,
      length: 6,
      period: "Jurassic",
      wasFound: "North America",
      top: false,
      img:
        "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoCarni_QR_CO-11.jpg",
    },
    {
      id: "10",
      name: "Plesiosaurus",
      weight: 500,
      height: 1,
      diet: "Carnivore",
      topSpeed: 16,
      length: 3.5,
      period: "Jurassic",
      wasFound: "Europe",
      top: false,
      img:
        "https://www.wennoanimal.com/uploads/animals/original/img_plesiosaurus.jpg",
    },
    {
      id: "11",
      name: "T-Rex",
      weight: 7500,
      height: 5,
      diet: "Carnivore",
      topSpeed: 40,
      length: 12,
      period: "Cretaceous",
      wasFound: "North America",
      top: true,
      img:
        "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoCarni_QR_CO-15.jpg",
    },
    {
      id: "12",
      name: "Triceratops",
      weight: 12000,
      height: 5,
      diet: "Herbivore",
      topSpeed: 30,
      length: 8,
      period: "Cretaceous",
      wasFound: "North America",
      top: true,
      img:
        "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoHerbi_QR_CO-10.jpg",
    },
    {
      id: "13",
      name: "Velociraptop",
      weight: 15,
      height: 0.7,
      diet: "Carnivore",
      topSpeed: 64,
      length: 2,
      period: "Cretaceous",
      wasFound: "Asia",
      top: true,
      img:
        "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoCarni_QR_CO-12.jpg",
    },
    {
      id: "14",
      name: "Spinosaurus",
      weight: 8300,
      height: 7,
      diet: "Carnivore",
      topSpeed: 18,
      length: 15,
      period: "Cretaceous",
      wasFound: "South America",
      top: true,
      img:
        "https://www.wennoanimal.com/uploads/animals/original/playCard_DinoCarni_QR_CO-13.jpg",
    },
    {
      id: "15",
      name: "Amargasaurus",
      weight: 2600,
      height: 2.5,
      diet: "Herbivore",
      topSpeed: 25,
      length: 10,
      period: "Cretaceous",
      wasFound: "South America",
      top: true,
      img:
        "https://www.wennoanimal.com/uploads/animals/original/img_amargasaurus.jpg",
    },
    {
      id: "16",
      name: "Mosasaurus",
      weight: 13000,
      height: 2,
      diet: "Carnivore",
      topSpeed: 48,
      length: 18,
      period: "Cretaceous",
      wasFound: "Europe",
      top: false,
      img:
        "https://www.wennoanimal.com/uploads/animals/original/img_mosasaurus.jpg",
    },
    {
      id: "17",
      name: "Lambeosaurus",
      weight: 4000,
      height: 3,
      diet: "Herbivore",
      topSpeed: 25,
      length: 14,
      period: "Cretaceous",
      wasFound: "Europe",
      top: false,
      img:
        "https://www.wennoanimal.com/uploads/animals/original/img_lambeosaurus.jpg",
    },
    {
      id: "18",
      name: "Parasaurolophus",
      weight: 2500,
      height: 3.5,
      diet: "Herbivore",
      topSpeed: 40,
      length: 10,
      period: "Cretaceous",
      wasFound: "South America",
      top: false,
      img:
        "https://www.wennoanimal.com/uploads/animals/original/img_parasaurolophus.jpg",
    },
    {
      id: "19",
      name: "Asylosaurus",
      weight: 25,
      height: 0.7,
      diet: "Herbivore",
      topSpeed: 12,
      length: 2,
      period: "Triassic",
      wasFound: "Europe",
      top: false,
      img:
        "https://images.dinosaurpictures.org/Asylosaurus_yalensis_by_karkemish00_9538.jpg",
    },
    {
      id: "20",
      name: "Isanosaurus",
      weight: 5500,
      height: 2,
      diet: "Herbivore",
      topSpeed: 8,
      length: 7,
      period: "Triassic",
      wasFound: "Asia",
      top: false,
      img:
        "https://images.dinosaurpictures.org/Isanosaurus-Yamamoto-Seiji_0808.jpg",
    },
    {
      id: "21",
      name: "Mussaurus",
      weight: 150,
      height: 1,
      diet: "Herbivore",
      topSpeed: 9,
      length: 3,
      period: "Triassic",
      wasFound: "South America",
      top: false,
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Mussaurus_patagonicus_life_restoration.png/1024px-Mussaurus_patagonicus_life_restoration.png",
    },
    {
      id: "22",
      name: "Melanorosaurus",
      weight: 1800,
      height: 2.5,
      diet: "Herbivore",
      topSpeed: 6,
      length: 8,
      period: "Triassic",
      wasFound: "Africa",
      top: false,
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Melanorosaurus_readi_steveoc.jpg/1024px-Melanorosaurus_readi_steveoc.jpg",
    },
    {
      id: "23",
      name: "Plateosaurus",
      weight: 3000,
      height: 2.5,
      diet: "Herbivore",
      topSpeed: 6,
      length: 10,
      period: "Triassic",
      wasFound: "Europe",
      top: false,
      img: "https://images.dinosaurpictures.org/Plateosaurus_1_be90.jpg",
    },
    {
      id: "24",
      name: "Unaysaurus",
      weight: 70,
      height: 0.8,
      diet: "Herbivore",
      topSpeed: 6,
      length: 2.5,
      period: "Triassic",
      wasFound: "South America",
      top: false,
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Unaysaurus.jpg",
    },
  ];

export const DinoContext = React.createContext(dinos);

function App() {

  return (
    <>
    <DinoContext.Provider value = {dinos}>
      <BrowserRouter>
        <Navbar />
        {/* <Searchbar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Periods" component={Periods} />
          <Route path="/TopDinos" component={TopDinos} />
          <Route path="/Table" component={Table} />
          <Route path="/Battlecamp" component={Battlecamp} />
          <Route path="/Favourite" component={Favourite} />
          <Route path="/Form" component={FormComponent} />
          <Route path="/dino/:id" children={<Dino />}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
      </DinoContext.Provider>
    </>
  );
}

export default App;
