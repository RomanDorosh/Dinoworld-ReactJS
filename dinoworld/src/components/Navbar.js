import * as FaIcons from "react-icons/fa";
// import * as IconName from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./NavbarStyle.css";

function Navbar() {
  //Declare a state of side bar and give to it value "false"
  const [sidebar, setSidebar] = useState(false);
  //Using useState we change the value of sidebar variable and can show sidebar an close it
  const showsidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onMouseEnter={showsidebar} />
        </Link>
        <div className="logo">
          <Link to="/">
            <span>dinoworld</span>
          </Link>
        </div>
        {/* <div className="search-container"> */}
        {/* <Searchbar /> */}

        {/* <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search" />
        </form> */}
        {/* </div> */}
        <div className="logIn">
          <button>
            <Link to="/FormLogIn">
              <span>Log In</span>
            </Link>
          </button>
          <button>
            <Link to="/FormSignUp">
              <span>Sign In</span>
            </Link>
          </button>
        </div>
      </div>

      {/* Changes a class depending of a state of side bar */}

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul
          className="nav-menu-items"
          onClick={showsidebar} /*</nav>onMouseLeave={showsidebar}*/
        >
          {/* The "map" method from stored data made a bunch of links for a sidebar */}
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
