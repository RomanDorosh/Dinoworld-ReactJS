import * as FaIcons from "react-icons/fa";
// import * as IconName from "react-icons/io";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { SidebarData } from "./SidebarData";
import "./NavbarStyle.css";
import { DinoContext } from "../App";
import * as AiIcons from "react-icons/ai";
import * as IconName from "react-icons/md";

function Navbar() {
  const { jwt, setJwt } = useContext(DinoContext);

  const SidebarData = [
    {
      title: "Dinos",
      path: "/",
      icon: <AiIcons.AiFillHome />,
      cName: "nav-text"
    },
    {
      title: "Periods",
      path: "/Periods",
      icon: <IconName.MdTimeline />,
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
      title: "EditDino",
      path: "/EditDino",
      icon: <FaIcons.FaEdit />,
      cName: "nav-text"
    }
  ];

  function removeToken() {
    localStorage.removeItem("mitoken");
    setJwt(null);
  }

  // const [data, setData] = useState(SidebarData);

  // jwt ? setData(SidebarData) : setData((SidebarData.length -= 2));

  // jwt ? console.log("Hi") : console.log("Hey");

  // console.log(data);

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
        {jwt ? (
          <div className="logIn">
            <button onClick={() => removeToken()}>
              <span>Log Out</span>
            </button>
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
