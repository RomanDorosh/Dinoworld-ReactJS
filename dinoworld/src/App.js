import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import "./App.css";
import Home from "./pages/Home";
import TopDinos from "./pages/TopDinos";
import Dino from "./pages/Dino";
import Table from "./pages/Table";
import CardGame from "./pages/CardGame";
import Periods from "./pages/Periods";
import Favourite from "./pages/Favourite";
import FormLogIn from "./pages/FormLogIn";
import FormSignUp from "./pages/FormSignUp";
import EditDino from "./pages/EditDino";

export const DinoContext = createContext({});

function App() {
  const [dinos, setDinos] = useState([]);

  useEffect(() => {
    console.log("APP call");
    fetch("http://localhost/finalsymfonyproject/public/index.php/dinosaur/")
      .then(response => response.json())
      .then(data => setDinos(data))
      .catch(err => console.log(err));
  }, []);
  // console.log(dinosAPI);
  // console.log(dinos);

  return (
    <>
      <Router>
        <Navbar />
        <DinoContext.Provider value={{ dinos, setDinos }}>
          <Route path="/Periods" component={Periods} />
          <Route path="/Table" component={Table} />
          <Route path="/TopDinos" component={TopDinos} />
          <Route path="/CardGame" component={CardGame} />
          <Route path="/EditDino" component={EditDino} />
        </DinoContext.Provider>
        <Route path="/" exact component={Home} />
        <Route path="/Favourite" component={Favourite} />
        <Route path="/FormLogIn" component={FormLogIn} />
        <Route path="/FormSignUp" component={FormSignUp} />
        <Route path="/Dino/:ID" component={Dino} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
