import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IconName from "react-icons/md";
import * as GiIcon from "react-icons/gi";

export const SidebarData = [
  {
    title: "Dinos",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Periods",
    path: "/Periods",
    icon: <IconName.MdTimeline />,
    cName: "nav-text",
  },
  {
    title: "Top Dinos",
    path: "/TopDinos",
    icon: <FaIcons.FaTrophy />,
    cName: "nav-text",
  },
  {
    title: "Table",
    path: "/Table",
    icon: <FaIcons.FaTable />,
    cName: "nav-text",
  },
  {
    title: "Battlecamp",
    path: "/Battlecamp",
    icon: <GiIcon.GiBattleAxe />,
    cName: "nav-text",
  },
];
