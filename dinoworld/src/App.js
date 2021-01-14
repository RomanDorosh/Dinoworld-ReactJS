import Navbar from './components/Navbar'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import TopDinos from "./pages/TopDinos";
import Periods from "./pages/Periods";


function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar />
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/Periods" component={Periods} />
       <Route path="/TopDinos" component={TopDinos} />
     </Switch>
     </BrowserRouter>
    </>
  );
}

export default App;
