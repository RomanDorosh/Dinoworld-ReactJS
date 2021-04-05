import * as FaIcons from "react-icons/fa";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import { DinoContext } from "../App";
import * as AiIcons from "react-icons/ai";
import * as IconName from "react-icons/md";
import jwt_decode from "jwt-decode";

function Navbar() {
  const { jwt, setJwt, setUserRoles, setUserEmail } = useContext(DinoContext);

  //Array of object that is used for navbar data
  const SidebarData = [
    {
      title: "Dinos",
      path: "/",
      icon: <AiIcons.AiFillHome />,
      cName: "nav-text"
    },
    {
      title: "Top Dinos",
      path: "/TopDinos",
      icon: <FaIcons.FaTrophy />,
      cName: "nav-text"
    },
    {
      title: "Table",
      path: "/Table",
      icon: <FaIcons.FaTable />,
      cName: "nav-text"
    },
    {
      title: "CardGame",
      path: "/CardGame",
      icon: <FaIcons.FaGamepad />,
      cName: "nav-text"
    },
    {
      title: "Favourite",
      path: "/Favourite",
      icon: <IconName.MdFavorite />,
      cName: "nav-text"
    },
    {
      title: "Add new Dino",
      path: "/AddDino",
      icon: <FaIcons.FaEdit />,
      cName: "nav-text"
    }
  ];

  //Remove token from local storage when "LogOut" button is clicked
  function removeToken() {
    localStorage.removeItem("mitoken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRoles");

    //Set user token, email and roles to null when logout
    setJwt(null);
    setUserEmail(null);
    setUserRoles(null);
  }

  //Depending on if user is logged and if has role ADMIN, we reduce array of data for navbar
  if (!jwt) {
    SidebarData.length -= 3;
  } else {
    let decoded = jwt_decode(jwt);
    if (decoded.roles[0] !== "ROLE_ADMIN") {
      SidebarData.length -= 1;
    }
  }

  //Declare a state of side bar and give to it value "false"
  const [sidebar, setSidebar] = useState(false);

  //Using useState we change the value of sidebar variable and can show sidebar an close it
  const showsidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showsidebar} />
        </Link>
        <div className="logo">
          <Link to="/">
            <span>dinoworld</span>
          </Link>
        </div>
        {jwt ? (
          <div className="logIn">
            <Link to="/">
              <button onClick={() => removeToken()}>
                <span>Log Out</span>
              </button>
            </Link>
          </div>
        ) : (
          <div className="logIn">
            <Link to="/FormLogIn">
              <button>
                <span>Log In</span>
              </button>
            </Link>
            <Link to="/FormSignUp">
              <button>
                <span>Sign Up</span>
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Changes a class depending of a state of side bar */}

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showsidebar}>
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
