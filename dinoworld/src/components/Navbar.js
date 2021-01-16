import * as FaIcons from "react-icons/fa";
// import * as IconName from "react-icons/io";
import { useState} from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'
import "./NavbarStyle.scss"

function Navbar() {
    //Declare a state of side bar and give to it value "false"
    const [sidebar, setSidebar] = useState(false);
    //Using useState we change the value of sidebar variable and can show sidebar an close it
    const showsidebar = () => setSidebar(!sidebar);
    return (
        <>
           <div className="navbar">
               <Link to="#" className="menu-bars">
                   <FaIcons.FaBars onMouseEnter={showsidebar}/>
               </Link>
               </div> 
               <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                   <ul className="nav-menu-items" /*onClick={showsidebar}*/ onMouseLeave={showsidebar}>
                       {/* <li className="navbar-toggle">
                           <Link to="#" className="menu-bars close">
                           <IconName.IoMdClose onClick={showsidebar}/>
                           </Link>
                       </li> */}
                       {SidebarData.map((item, index) => {
                           return (
                               <li key={index} className={item.cName}>
                                   <Link to={item.path}>
                                       {item.icon}
                                       <span>{item.title}</span>
                                   </Link>
                               </li>
                           )
                       })}
                   </ul>
               </nav>
        </>
    )
}

export default Navbar
