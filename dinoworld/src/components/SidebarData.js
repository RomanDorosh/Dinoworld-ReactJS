import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IconName from "react-icons/md";


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
        title: "Messages",
        path: "/messages",
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: "nav-text"
    }
]
