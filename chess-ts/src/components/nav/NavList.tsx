import { AiOutlineHome } from "react-icons/ai";
import { RiInformationLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";
import { GiTabletopPlayers } from "react-icons/gi";
import React from "react";

export const navList: {
  name: string;
  path: string;
  image?: string;
  alt?: string;
  icon?: JSX.Element;
}[] = [
  {
    name: "Home",
    path: "/",
    icon: <AiOutlineHome />,
  },
  {
    name: "Play",
    path: "/play",
    icon: <GiTabletopPlayers />,
    alt: "Chess Pawn Icon takes you to /play",
  },
  {
    name: "About",
    path: "/about",
    icon: <RiInformationLine />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <FiSettings />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <BiLogIn />,
  },
];
