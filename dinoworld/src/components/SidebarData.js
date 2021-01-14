import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Periods",
        path: "/Periods",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
    },
    {
        title: "Top Dinos",
        path: "/TopDinos",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text"
    },
    {
        title: "Messages",
        path: "/messages",
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: "nav-text"
    }
]
