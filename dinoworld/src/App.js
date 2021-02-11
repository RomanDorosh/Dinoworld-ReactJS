import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TopDinos from "./pages/TopDinos";
import Table from "./pages/Table";
import Battlecamp from "./pages/Battlecamp";
import Periods from "./pages/Periods";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Searchbar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Periods" component={Periods} />
          <Route path="/TopDinos" component={TopDinos} />
          <Route path="/Table" component={Table} />
          <Route path="/Battlecamp" component={Battlecamp} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
