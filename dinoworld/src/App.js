import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, createContext } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import "./App.css";
import Home from "./pages/Home";
import TopDinos from "./pages/TopDinos";
import Dino from "./pages/Dino";
import Table from "./pages/Table";
import CardGame from "./pages/CardGame";
import Favourite from "./pages/Favourite";
import FormLogIn from "./pages/FormLogIn";
import FormSignUp from "./pages/FormSignUp";
import EditDino from "./pages/EditDino";
import AddDino from "./pages/AddDino";

export const urlApi = "http://localhost:8000";
export const DinoContext = createContext({});

function App() {
  const storedJwt = localStorage.getItem("mitoken");
  const storedEmail = localStorage.getItem("userEmail");
  const storedRoles = localStorage.getItem("userRoles");

  const [jwt, setJwt] = useState(storedJwt || null);
  const [userEmail, setUserEmail] = useState(storedEmail || null);
  const [userRoles, setUserRoles] = useState(storedRoles || null);

  console.log(userRoles, userEmail);

  return (
    <>
      <Router>
        <DinoContext.Provider
          value={{
            jwt,
            setJwt,
            userRoles,
            setUserRoles,
            userEmail,
            setUserEmail
          }}
        >
          <Navbar />
          <Route path="/Table" component={Table} />
          <Route path="/TopDinos" component={TopDinos} />
          <Route path="/CardGame" component={CardGame} />
          <Route path="/EditDino/:ID" component={EditDino} />
          <Route path="/AddDino" component={AddDino} />
          <Route path="/FormLogIn" component={FormLogIn} />
          <Route path="/FormSignUp" component={FormSignUp} />
          <Route path="/" exact component={Home} />
          <Route path="/Favourite" component={Favourite} />
          <Route path="/Dino/:ID" component={Dino} />
          <Footer />
        </DinoContext.Provider>
      </Router>
    </>
  );
}

export default App;
